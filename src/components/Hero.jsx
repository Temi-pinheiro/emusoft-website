export const Hero = () => {
  return (
    <div
      id='#home'
      className='w-full h-[860px] hero bg-opacity-70 flex items-center relative overflow-clip'
    >
      <div className='wrapper pad-left flex items-start 2xl:justify-between pt-[280px] h-full text-white relative z-2'>
        <div className='max-w-[520px] w-full '>
          <h1 className='text-[52px] leading-[62.40px] font-bold text-white'>
            Creating Innovative & Impactful Solutions
          </h1>
          <p className='leading-normal mt-[18px] max-w-[468px]'>
            We use the latest technology and methodologies to develop
            personalized software solutions that meet your specific needs.
          </p>
          <a className='bg-[#14A6E3] text-xl font-bold w-[205px] flex justify-center py-4 mt-[72px] rounded-lg'>
            Let’s Talk
          </a>
        </div>
        <div className='relative'>
          <img
            src='/buildings.svg'
            alt='cool futuristic vector drawing of building'
            className=' '
          />
        </div>
      </div>
      <div className='absolute inset-0 max-w-[1440px] mx-auto w-full h-full oveflow-y-clip opacity-30'>
        <div className='h-full relative flex items-end justify-between gap-x-10'>
          <img src='/bars.svg' />
          <img src='/bars.svg' />
        </div>
      </div>
    </div>
  );
};
