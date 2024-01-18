export const About = () => {
  return (
    <div className='w-full'>
      <div className=' wrapper pad-left flex items-end mt-[104px] justify-between'>
        <div className='max-w-[550px]'>
          <h2 className='text-zinc-900 text-[40px] font-bold leading-[56px]'>
            About us
          </h2>
          <h3 className='max-w-[468px] text-indigo-900 text-[40px] font-bold leading-[56px] mt-8'>
            We turn your ideas into cutting-edge technologies
          </h3>
          <p className='mt-[33px] text-neutral-800 text-xl'>
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
        <div className='max-w-[658px] h-[712px]'>
          <img
            src='/guy.jpeg'
            alt='guy at a tech conference taking notes'
            className='h-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};
