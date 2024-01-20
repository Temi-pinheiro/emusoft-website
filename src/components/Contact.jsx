import { useState } from 'react';
import Loader from './Loader';

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    budget: null,
    description: '',
    review: '',
  });
  const updateData = (e) => {
    if (e.target.type == 'tel' && isNaN(parseInt(e.target.value))) return;
    else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const options = {
      from: 'info@emusoft.co',
      to: 'info@emusoft.co',
      replyTo: data.email,
      subject: `Mail from ${data.name}`,
      html: '<p>Hello HTML world!</p>',
    };

    setLoading(false);
    try {
      // sendgrid.setSubstitutionWrappers;
      await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  };
  return (
    <div id='contact' className='w-full mt-[80px]'>
      <div className='wrapper md:flex'>
        <div className='2xl:max-w-[820px] hero w-full'>
          <form onSubmit={sendEmail} className='pt-[91px] pb-[123px]'>
            <h2 className='pad-left 2xl:pl-[160px] max-w-[732px] max-md:px-6 sm:px-20 xl:px-[120px] 2xl:px-0 2xl:pr-[93px]  text-white text-xl max-md:leading-7 leading-10 sm:text-[30px] md:text-[40px] font-bold'>
              Talk to us and set your project in motion!
            </h2>
            <div className='md:hidden w-screen -mx-auto h-[200px] mt-[39px] '>
              <img
                src='/smiles.jpeg'
                className='h-full w-full object-cover'
                alt='corporate high five with smiles'
              />
            </div>
            <div className='pad-left 2xl:pl-[160px] flex flex-col 2xl:max-w-[767px] gap-y-4 max-md:px-6 sm:px-20 xl:px-[120px] 2xl:px-0 2xl:pr-[93px]'>
              <input
                placeholder='Name'
                name='name'
                value={data.name}
                onChange={updateData}
                required
                className='bg-transparent border mt-[53px] border-white text-white placeholder::text-white rounded-lg p-4 leading-normal text-sm outline-none'
              />
              <input
                placeholder='Email Address'
                type='email'
                name='email'
                value={data.email}
                onChange={updateData}
                required
                className='bg-transparent border border-white text-white placeholder::text-white rounded-lg p-4 leading-normal text-sm outline-none'
              />
              <input
                placeholder='Budget'
                name='budget'
                value={data.budget}
                onChange={updateData}
                type='tel'
                required
                className='bg-transparent border border-white text-white placeholder::text-white rounded-lg p-4 leading-normal text-sm outline-none'
              />
              <textarea
                placeholder='Project Description'
                name='desc'
                value={data.desc}
                onChange={updateData}
                required
                className='bg-transparent border border-white text-white placeholder::text-white rounded-lg p-4 leading-normal text-sm outline-none'
              />
              <input
                placeholder='How did you hear about us? '
                name='review'
                value={data.review}
                onChange={updateData}
                className='bg-transparent border border-white text-white placeholder::text-white rounded-lg p-4 leading-normal text-sm outline-none'
              />
              <button
                type='submit'
                // disabled={loading}
                className='bg-[#14A6E3] text-xl font-bold disabled:bg-slate-400 flex text-white w-full justify-center py-4 mt-12 rounded-lg'
              >
                {loading ? (
                  <Loader bgColor='#14A6E3' />
                ) : (
                  <span>Send us a message</span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className='max-md:hidden max-w-[620px] w-full'>
          <img
            src='/smiles.jpeg'
            className='h-full object-cover'
            alt='corporate high five with smiles'
          />
        </div>
      </div>
    </div>
  );
};
