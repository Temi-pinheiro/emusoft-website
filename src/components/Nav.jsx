/* eslint-disable no-unused-vars */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const NavBar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  gsap.registerPlugin(ScrollToPlugin);

  const scrollTo = (e, target) => {
    e.preventDefault();
    let scrollTarget = document.querySelector(target);

    gsap.to(window, {
      duration: 1.5,
      scrollTo: scrollTarget,
      ease: 'power2.inOut',
    });
  };
  useGSAP(
    () => {
      mm.add('(min-width: 1280px)', () => {
        gsap.set('#nav', { opacity: 0 });

        const makeFixed = gsap.to('#nav', {
          position: 'fixed',
          autoAlpha: 1,
          background: 'rgba(53, 39, 132, .8)',
        });

        ScrollTrigger.create({
          trigger: '#nav',
          start: '860px',
          end: '200px',
          scrub: 1,
          animation: makeFixed,
        });
      });
    },
    { dependencies: [] }
  );
  return (
    <>
      <div className='inset-0 h-fit absolute max-xl:hidden text-white z-[20] w-full'>
        <nav className='wrapper pad-both flex items-center py-10 justify-between rounded-[20px]'>
          <div>
            <svg
              width='176'
              height='33'
              viewBox='0 0 176 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.8145 23.6625H10.0507V19.9316H20.9008V12.3936H10.0507V9.30983H21.8145V0.972339H0.913698V32H21.8145V23.6625ZM48.3032 32V19.9696C48.3032 14.6778 49.4072 13.4215 51.5392 13.4215C53.8615 13.4215 54.8513 14.3732 54.8513 17.6854V32H63.9883V15.5154C63.9883 7.1398 61.7802 4.39871 55.9173 4.39871C50.4732 4.39871 48.3032 7.86315 48.3032 17.7615V15.5915C48.3032 7.17787 46.0951 4.39871 40.2322 4.39871C34.9022 4.39871 32.618 7.67279 32.618 17.3808V4.58906H23.481V32H32.618V19.6651C32.618 14.5636 33.7221 13.4215 35.854 13.4215C38.1763 13.4215 39.1662 14.3732 39.1662 17.6854V32H48.3032ZM81.3637 32H90.5007V4.58906H81.3637V16.924C81.3637 21.9874 80.2978 23.1676 78.0516 23.1676C75.6531 23.1676 74.8156 22.2539 74.8156 18.9037V4.58906H65.6786V20.9976C65.6786 29.4112 67.8867 32.1904 73.5212 32.1904C79.0795 32.1904 81.3637 28.8782 81.3637 19.2082V32ZM115.787 24.0813V23.8529C115.787 18.028 113.198 15.7057 106.155 15.1347C101.168 14.7159 100.521 14.3352 100.521 12.8885V12.8504C100.521 11.5941 101.396 10.8707 103.719 10.8707C106.079 10.8707 107.145 11.6702 107.145 13.7641V14.0687H115.787V13.8403C115.787 7.25401 112.018 4.39871 103.833 4.39871C95.7238 4.39871 91.8406 7.29208 91.8406 12.7362V12.8885C91.8406 18.4087 94.1249 20.3884 101.092 21.3402C106.536 22.0635 107.145 22.4442 107.145 23.929V24.0432C107.145 25.2615 106.231 25.7945 104.061 25.7945C101.587 25.7945 100.521 24.9188 100.521 22.8249V22.5585H91.8406V22.9011C91.8406 29.7919 96.0665 32.1904 103.871 32.1904C111.866 32.1904 115.787 29.7538 115.787 24.0813ZM129.468 4.39871C120.826 4.39871 116.829 8.62456 116.829 17.1524V19.4367C116.829 27.9645 120.826 32.1904 129.468 32.1904C138.149 32.1904 142.108 27.9645 142.108 19.4367V17.1524C142.108 8.62456 138.149 4.39871 129.468 4.39871ZM129.468 24.2336C127.032 24.2336 125.966 23.1676 125.966 19.094V17.495C125.966 13.4215 127.032 12.3555 129.468 12.3555C131.905 12.3555 132.971 13.4215 132.971 17.495V19.094C132.971 23.1676 131.905 24.2336 129.468 24.2336ZM142.696 15.8199H145.818V32H154.955V15.8199H159.371V8.51035H154.955V8.09157C154.955 6.79716 155.374 6.18803 156.744 6.18803H159.562V0.972339H152.747C148.407 0.972339 145.818 3.3708 145.818 8.09157V8.51035H142.696V15.8199ZM171.854 32V11.8986H175.623V4.58906H171.854V1.46726H162.717V4.58906H160.319V11.8986H162.717V32H171.854Z'
                fill='#0CBAF1'
              />
            </svg>
            <span>Technologies LLC.</span>
          </div>
          <div className='flex items-center gap-x-[51px]'>
            <a
              onClick={(e) => scrollTo(e, '#home')}
              href='#home'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              Home
            </a>
            <a
              onClick={(e) => scrollTo(e, '#about')}
              href='#about'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              About
            </a>
            <a
              onClick={(e) => scrollTo(e, '#services')}
              href='#services'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              Services
            </a>
            <a
              onClick={(e) => scrollTo(e, '#projects')}
              href='#projects'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              Projects
            </a>
            <a
              onClick={(e) => scrollTo(e, '#contact')}
              href='#contact'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              {' '}
              Contact
            </a>
          </div>
        </nav>
      </div>
      <div
        id='nav'
        className='inset-0 absolute h-fit max-xl:hidden text-white z-10 w-full backdrop-blur-md 2xl:backdrop-blur-xl'
      >
        <nav
          id='withBg'
          // style={{ backgroundColor: backgroundColorTemplate }}
          className='wrapper pad-both py-5 flex items-center justify-between '
        >
          <div>
            <svg
              width='176'
              height='33'
              viewBox='0 0 176 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.8145 23.6625H10.0507V19.9316H20.9008V12.3936H10.0507V9.30983H21.8145V0.972339H0.913698V32H21.8145V23.6625ZM48.3032 32V19.9696C48.3032 14.6778 49.4072 13.4215 51.5392 13.4215C53.8615 13.4215 54.8513 14.3732 54.8513 17.6854V32H63.9883V15.5154C63.9883 7.1398 61.7802 4.39871 55.9173 4.39871C50.4732 4.39871 48.3032 7.86315 48.3032 17.7615V15.5915C48.3032 7.17787 46.0951 4.39871 40.2322 4.39871C34.9022 4.39871 32.618 7.67279 32.618 17.3808V4.58906H23.481V32H32.618V19.6651C32.618 14.5636 33.7221 13.4215 35.854 13.4215C38.1763 13.4215 39.1662 14.3732 39.1662 17.6854V32H48.3032ZM81.3637 32H90.5007V4.58906H81.3637V16.924C81.3637 21.9874 80.2978 23.1676 78.0516 23.1676C75.6531 23.1676 74.8156 22.2539 74.8156 18.9037V4.58906H65.6786V20.9976C65.6786 29.4112 67.8867 32.1904 73.5212 32.1904C79.0795 32.1904 81.3637 28.8782 81.3637 19.2082V32ZM115.787 24.0813V23.8529C115.787 18.028 113.198 15.7057 106.155 15.1347C101.168 14.7159 100.521 14.3352 100.521 12.8885V12.8504C100.521 11.5941 101.396 10.8707 103.719 10.8707C106.079 10.8707 107.145 11.6702 107.145 13.7641V14.0687H115.787V13.8403C115.787 7.25401 112.018 4.39871 103.833 4.39871C95.7238 4.39871 91.8406 7.29208 91.8406 12.7362V12.8885C91.8406 18.4087 94.1249 20.3884 101.092 21.3402C106.536 22.0635 107.145 22.4442 107.145 23.929V24.0432C107.145 25.2615 106.231 25.7945 104.061 25.7945C101.587 25.7945 100.521 24.9188 100.521 22.8249V22.5585H91.8406V22.9011C91.8406 29.7919 96.0665 32.1904 103.871 32.1904C111.866 32.1904 115.787 29.7538 115.787 24.0813ZM129.468 4.39871C120.826 4.39871 116.829 8.62456 116.829 17.1524V19.4367C116.829 27.9645 120.826 32.1904 129.468 32.1904C138.149 32.1904 142.108 27.9645 142.108 19.4367V17.1524C142.108 8.62456 138.149 4.39871 129.468 4.39871ZM129.468 24.2336C127.032 24.2336 125.966 23.1676 125.966 19.094V17.495C125.966 13.4215 127.032 12.3555 129.468 12.3555C131.905 12.3555 132.971 13.4215 132.971 17.495V19.094C132.971 23.1676 131.905 24.2336 129.468 24.2336ZM142.696 15.8199H145.818V32H154.955V15.8199H159.371V8.51035H154.955V8.09157C154.955 6.79716 155.374 6.18803 156.744 6.18803H159.562V0.972339H152.747C148.407 0.972339 145.818 3.3708 145.818 8.09157V8.51035H142.696V15.8199ZM171.854 32V11.8986H175.623V4.58906H171.854V1.46726H162.717V4.58906H160.319V11.8986H162.717V32H171.854Z'
                fill='#0CBAF1'
              />
            </svg>
            <span>Technologies LLC.</span>
          </div>
          <div className='flex items-center gap-x-[51px]'>
            <a
              onClick={(e) => scrollTo(e, '#home')}
              href='#home'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              Home
            </a>
            <a
              onClick={(e) => scrollTo(e, '#about')}
              href='#about'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              About
            </a>
            <a
              onClick={(e) => scrollTo(e, '#services')}
              href='#services'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              Services
            </a>
            <a
              onClick={(e) => scrollTo(e, '#projects')}
              href='#projects'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              Projects
            </a>
            <a
              onClick={(e) => scrollTo(e, '#contact')}
              href='#contact'
              className='hover:text-[#0CBAF1] transition duration-200 ease-in-out'
            >
              {' '}
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
