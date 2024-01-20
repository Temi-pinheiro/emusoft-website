export const About = () => {
  return (
    <div id='about' className='w-full'>
      <div className=' wrapper pad-left flex max-md:flex-col xl:items-end pt-[70px] xl:mt-[104px] justify-between'>
        <div className='md:max-w-[550px] max-xl:px-4'>
          <h2 className='text-zinc-900 text-xl sm:text-[30px] md:text-[40px] font-bold xl:leading-[56px]'>
            About us
          </h2>
          <h3 className='max-w-[468px] text-indigo-900 sm:text-lg xl:text-[40px] font-bold xl:leading-[56px] mt-8'>
            We turn your ideas into cutting-edge technologies
          </h3>
          <p className='mt-[33px] text-neutral-800 text-sm sm:text-base xl:text-xl'>
            We believe that technology has the power to change the world. We are
            a team of passionate software developers and technology enthusiasts
            who are dedicated to creating innovative and impactful solutions for
            our clients. <br /> <br />
            With over 18 years of experience in the industry and a diverse set
            of skills, we are equipped to handle projects of all sizes and
            complexity. Our developers use the latest technologies and
            methodologies to build custom software that is tailored to meet the
            unique needs of each client.
            <br /> <br />
            We believe in taking a customer-centric approach, working closely
            with clients to understand their goals and develop a solution that
            meets their requirements. <br /> <br />
            Our approach is collaborative, agile, and focused on delivering
            solutions that meet our client’s unique requirements and exceed
            their expectations.
          </p>
        </div>
        <div className='xl:max-w-[658px] w-full h-[200px] sm:h-[400px] md:h-[500px] xl:h-[712px] max-xl:mt-8'>
          <img
            src='/guy.jpeg'
            alt='guy at a tech conference taking notes'
            className='h-full max-xl:w-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};
