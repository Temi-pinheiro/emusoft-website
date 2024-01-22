'use client';

import { scrollTo } from '../helpers/scroller';

export const CTA = () => {
  return (
    <a
      onClick={(e) => scrollTo(e, '#contact')}
      href='#contact'
      className='bg-[#14A6E3] text-xl font-bold w-[205px] flex justify-center py-4 mt-[18px] md:mt-[30px] xl:mt-[72px] rounded-lg'
    >
      Let’s Talk
    </a>
  );
};
