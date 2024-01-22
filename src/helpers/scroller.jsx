import ScrollToPlugin from 'gsap/ScrollToPlugin';
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(ScrollToPlugin);
export const scrollTo = (e, target) => {
  e.preventDefault();
  let scrollTarget = document.querySelector(target);

  gsap.to(window, {
    duration: 1.5,
    scrollTo: scrollTarget,
    ease: 'power2.inOut',
  });
};
