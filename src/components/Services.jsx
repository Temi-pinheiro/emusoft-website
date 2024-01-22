export const Services = () => {
  const items = [
    {
      icon: '/services/csd.svg',
      title: 'Custom Software Development',
      desc: 'Our team works closely with clients to understand their needs and develop a solution that meets their specific requirements.',
    },
    {
      icon: '/services/mad.svg',
      title: 'Mobile App Development',
      desc: 'Creating software applications that run on mobile devices such as smartphones, tablets, and smartwatches on platforms like iOS, Android, and Windows Mobile.',
    },
    {
      icon: '/services/wd.svg',
      title: 'Web Development',
      desc: 'We build & maintain websites and web applications with HTML, CSS, and JavaScript, as well as web development frameworks and content management systems (CMS).',
    },
    {
      icon: '/services/cs.svg',
      title: 'Cloud Solutions',
      desc: 'We use remote servers, storage, and applications to deliver computing services to businesses and individuals',
    },
    {
      icon: '/services/aml.svg',
      title: 'AI / Machine learning solutions',
      desc: 'With algorithms and statistical models, we analyze large amounts of data and identify patterns or relationships to provide AI solutions.',
    },
    {
      icon: '/services/mas.svg',
      title: 'Maintenance and support',
      desc: 'We ensure that software applications, websites, and other digital systems are functioning correctly and meeting their intended goals.',
    },
  ];
  return (
    <div id='services' className='w-full max-xl:px-4'>
      <div className=' wrapper pad-both flex flex-col pt-[60px] xl:pt-[240px] gap-y-2 md:gap-y-[54px]'>
        <h2 className='text-zinc-900 text-xl md:text-[40px] font-bold leading-[56px]'>
          Our Services
        </h2>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-[42px] xl:gap-x-[95px] gap-y-6 xl:gap-y-[100px]'>
          {items.map((item, index) => (
            <div key={index} className='flex flex-col gap-y-2 md:gap-y-6'>
              <div className='flex flex-col md:flex-row md:items-center gap-x-2 md:gap-x-6'>
                <span className='hidden md:w-14 h-6 md:h-14 max-md:p-1 md:flex shrink-0 items-center justify-center bg-blue-100 rounded-sm'>
                  <img src={item.icon} alt={item.title} />{' '}
                </span>
                <h4 className='text-[#352784] text-base md:text-2xl font-bold md:leading-[33.60px]'>
                  {item.title}
                </h4>
              </div>
              <p className='text-stone-800 text-sm md:text-xl md:leading-[30px]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
