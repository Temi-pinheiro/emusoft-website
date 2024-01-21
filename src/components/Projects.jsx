export const Projects = () => {
  const items = [
    {
      title: 'One-stop investment shop app for an investment company ',
      by: 'By Emusoft Technologies LLC.',
      bg: '#E5ECEC',
      img: '/phone.png',
      link: '',
    },
    {
      title:
        'Enterprise software ranging from HR, Retail store management systems',
      by: 'By Emusoft Technologies LLC.',
      bg: '#E8E5EC',
      img: '/laptop.png',
      link: '',
    },
    {
      title: 'e-Commerce (online stores) mobile based apps',
      by: 'By Emusoft Technologies LLC.',
      bg: '#ECEBE5',
      img: '/phone.png',
      link: '',
    },
    {
      title:
        'Enterprise software ranging from HR, Retail store management systems',
      by: 'By Emusoft Technologies LLC.',
      bg: '#E8E5EC',
      img: '/laptop.png',
      link: '',
    },
  ];
  return (
    <div
      id='projects'
      className='bg-[#F1FAFE] flex flex-col items-center justify-center h-[932px] mt-[63px] md:mt-40  overflow-x-clip'
    >
      <h3 className='text-center text-[#352784] font-bold text-xl sm:text-[30px] md:text-[40px] xl:leading-[56px] w-full'>
        Latest Projects
      </h3>
      <div className='flex gap-x-2 md:gap-x-5 mt-[23px] md:mt-16 overflow-x-scroll pb-[160px]  px-4 md:px-[70px] '>
        {items.map((item, index) => (
          <article
            key={index}
            className='p-4 md:p-8 rounded-2xl flex flex-col gap-y-2 md:gap-y-8 shrink-0 max-w-[181px] md:max-w-[420px]'
            style={{ background: item.bg }}
          >
            <div className='w-full h-[116px] md:h-[210px] rounded-lg'>
              <img
                src={item.img}
                alt={item.title}
                className='object-cover w-full h-[116px] md:h-[210px] rounded-lg'
              />
            </div>
            <div className='flex flex-col gap-y-4  text-[#463C53]'>
              <p className='text-sm md:text-2xl font-bold'>{item.title}</p>
              <span className='text-xs md:text-sm'>{item.by}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
