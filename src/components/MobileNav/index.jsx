import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.css';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const modalBodyVariants = {
  initial: { x: window.innerWidth },
  remove: { x: window.innerWidth },
  animate: { x: 0 },
};

export const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      mm.add('(max-width: 1279px)', () => {
        // gsap.set('#nav', { opacity: 0 });

        ScrollTrigger.create({
          trigger: '#mobilenav',
          start: '80px',
          end: '2000px',
          scrub: true,
          onEnter: () =>
            gsap.to('#mobilenav', {
              background: 'rgba(53, 39, 132, .98)',
            }),
          onLeaveBack: () =>
            gsap.to('#mobilenav', {
              background: 'rgba(88, 15, 123, 0)',
            }),
        });
      });
    },
    { dependencies: [] }
  );
  const mm = gsap.matchMedia();
  const scrollTo = (e, target) => {
    e.preventDefault();
    let scrollTarget = document.querySelector(target);

    gsap.to(window, {
      duration: 1.5,
      scrollTo: scrollTarget,
      ease: 'power2.inOut',
    });
    setSidebarOpen(false);
  };
  useEffect(() => {
    sidebarOpen && setSidebarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <div className='xl:hidden'>
      <div id='mobilenav' className={styles.nav}>
        <a href='/' className='overflow-y-clip'>
          <motion.h6
            initial={{ y: 'var(--y-from, 0)' }}
            animate={{ y: 'var(--y-to, 0)', transition: { duration: 0.3 } }}
            className='max-sm:[--y-from:30px] max-sm:[--y-to:0px]  '
          >
            <div className='flex flex-col gap-y-[5px]'>
              <h4>
                <svg
                  width='69'
                  height='15'
                  viewBox='0 0 69 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.55229 10.7313H3.94032V9.26863H8.19408V6.31339H3.94032V5.10442H8.55229V1.83575H0.358211V14H8.55229V10.7313ZM18.937 14V9.28355C18.937 7.20891 19.3699 6.71637 20.2057 6.71637C21.1161 6.71637 21.5042 7.08951 21.5042 8.38803V14H25.0863V7.53727C25.0863 4.25367 24.2206 3.17904 21.9221 3.17904C19.7878 3.17904 18.937 4.53726 18.937 8.41788V7.56713C18.937 4.2686 18.0714 3.17904 15.7728 3.17904C13.6833 3.17904 12.7877 4.46263 12.7877 8.26862V3.25367H9.20563V14H12.7877V9.16415C12.7877 7.16414 13.2206 6.71637 14.0564 6.71637C14.9669 6.71637 15.3549 7.08951 15.3549 8.38803V14H18.937ZM31.8983 14H35.4804V3.25367H31.8983V8.08952C31.8983 10.0746 31.4804 10.5373 30.5998 10.5373C29.6595 10.5373 29.3311 10.1791 29.3311 8.86564V3.25367H25.749V9.68654C25.749 12.9851 26.6147 14.0746 28.8236 14.0746C31.0028 14.0746 31.8983 12.7761 31.8983 8.98504V14ZM45.3938 10.8955V10.806C45.3938 8.52235 44.3789 7.6119 41.6177 7.38802C39.6624 7.22384 39.4087 7.07459 39.4087 6.50742V6.49249C39.4087 5.99995 39.752 5.71637 40.6624 5.71637C41.5878 5.71637 42.0057 6.0298 42.0057 6.8507V6.97011H45.3938V6.88055C45.3938 4.29845 43.9162 3.17904 40.7072 3.17904C37.5281 3.17904 36.0057 4.31337 36.0057 6.44772V6.50742C36.0057 8.67161 36.9012 9.44773 39.6326 9.82087C41.7669 10.1045 42.0057 10.2537 42.0057 10.8358V10.8806C42.0057 11.3582 41.6475 11.5671 40.7968 11.5671C39.8266 11.5671 39.4087 11.2239 39.4087 10.403V10.2985H36.0057V10.4328C36.0057 13.1343 37.6624 14.0746 40.7221 14.0746C43.8565 14.0746 45.3938 13.1194 45.3938 10.8955ZM50.7575 3.17904C47.3695 3.17904 45.8023 4.83577 45.8023 8.17907V9.0746C45.8023 12.4179 47.3695 14.0746 50.7575 14.0746C54.1605 14.0746 55.7128 12.4179 55.7128 9.0746V8.17907C55.7128 4.83577 54.1605 3.17904 50.7575 3.17904ZM50.7575 10.9552C49.8023 10.9552 49.3844 10.5373 49.3844 8.94027V8.3134C49.3844 6.71637 49.8023 6.29846 50.7575 6.29846C51.7128 6.29846 52.1307 6.71637 52.1307 8.3134V8.94027C52.1307 10.5373 51.7128 10.9552 50.7575 10.9552ZM55.9434 7.65668H57.1673V14H60.7494V7.65668H62.4808V4.79099H60.7494V4.62681C60.7494 4.11934 60.9136 3.88054 61.4509 3.88054H62.5554V1.83575H59.8838C58.1823 1.83575 57.1673 2.77605 57.1673 4.62681V4.79099H55.9434V7.65668ZM67.3747 14V6.11936H68.8523V3.25367H67.3747V2.02978H63.7926V3.25367H62.8523V6.11936H63.7926V14H67.3747Z'
                    fill='#0CBAF1'
                  />
                </svg>
              </h4>
              <span className='text-sky-500 text-[6.8px] leading-relaxed'>
                Technologies LLC.
              </span>
            </div>
          </motion.h6>
        </a>
        <motion.button
          initial={{ x: 'var(--x-from, 0)' }}
          animate={{
            x: 'var(--x-to, 0)',
            transition: { duration: 0.3, delay: 0.3 },
          }}
          className='max-sm:[--x-from:100px] max-sm:[--x-to:0px]  mb-2'
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 7.37134H19'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 12.3713H19'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 17.3713H19'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </motion.button>
      </div>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className='bg-[#352784] bg-opacity-60 fixed h-screen inset-0 backdrop-blur-xl z-[60] px-8 pt-6 w-full overflow-y-auto flex flex-col pb-10'
            onClick={(e) => e.stopPropagation()}
            variants={modalBodyVariants}
            animate='animate'
            exit='remove'
            initial='initial'
          >
            <button onClick={() => setSidebarOpen(false)} className='ml-auto'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 12 12'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-black '
              >
                <path d='M7.09939 6.00974L11.772 1.33703C12.076 1.03309 12.076 0.541661 11.772 0.237721C11.468 -0.0662194 10.9766 -0.0662194 10.6727 0.237721L5.99994 4.91043L1.32737 0.237721C1.02329 -0.0662194 0.532003 -0.0662194 0.228062 0.237721C-0.0760207 0.541661 -0.0760207 1.03309 0.228062 1.33703L4.90063 6.00974L0.228062 10.6824C-0.0760207 10.9864 -0.0760207 11.4778 0.228062 11.7818C0.379534 11.9334 0.578697 12.0095 0.777717 12.0095C0.976738 12.0095 1.17576 11.9334 1.32737 11.7818L5.99994 7.10905L10.6727 11.7818C10.8243 11.9334 11.0233 12.0095 11.2223 12.0095C11.4213 12.0095 11.6203 11.9334 11.772 11.7818C12.076 11.4778 12.076 10.9864 11.772 10.6824L7.09939 6.00974Z' />
              </svg>
            </button>
            <ul className='flex flex-col items-center gap-y-8 mt-10 uppercase text-2xl font-semibold text-[#0CBAF1]'>
              <li>
                <a onClick={(e) => scrollTo(e, '#home')} href='/'>
                  Home
                </a>
              </li>
              <li>
                <a onClick={(e) => scrollTo(e, '#about')} href='/#works'>
                  About
                </a>
              </li>

              <li>
                <a
                  onClick={(e) => scrollTo(e, '#services')}
                  href='/#experience'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => scrollTo(e, '#projects')}
                  href={'/#projects'}
                >
                  Projects
                </a>
              </li>
              <li>
                <a onClick={(e) => scrollTo(e, '#contact')} href='/#contact'>
                  Contact
                </a>
              </li>
            </ul>{' '}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
