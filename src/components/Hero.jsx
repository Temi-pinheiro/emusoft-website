export const Hero = () => {
  return (
    <div
      id='home'
      className='w-full h-[500px] xl:h-[860px] hero bg-opacity-70 flex relative overflow-clip'
    >
      <div className='wrapper pad-left flex flex-col xl:flex-row items-center 2xl:justify-between pt-[78px] xl:pt-[100px] h-full text-white relative z-10'>
        <div className='xl:max-w-[520px] w-full max-xl:text-center max-xl:flex flex-col items-center '>
          <h1 className='text-2xl xl:text-[52px] leading-[28.80px] xl:leading-[62.40px] max-xl:max-w-[245px] font-bold text-white'>
            Creating Innovative & Impactful Solutions
          </h1>
          <p className='leading-normal mt-[14px] xl:mt-[18px] max-md:text-[10px] max-w-[228px] md:max-w-[350px] xl:max-w-[468px]'>
            We use the latest technology and methodologies to develop
            personalized software solutions that meet your specific needs.
          </p>
          <a
            href='#contact'
            className='bg-[#14A6E3] text-xl font-bold w-[205px] flex justify-center py-4 mt-[18px] xl:mt-[72px] rounded-lg'
          >
            Let’s Talk
          </a>
        </div>
        <div className='relative max-md:mx-auto max-md:h-full max-md:w-[70%] max-md:mt-10'>
          <img
            src='/buildings.svg'
            alt='cool futuristic vector drawing of building'
            // className=' max-md:object-scale-down w-full'
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
