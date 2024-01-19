export const Footer = () => {
  return (
    <footer className='w-full md:h-[343px] flex items-center'>
      <div className='wrapper max-md:py-[56px] max-md:pl-[41px] pad-both flex max-md:flex-col gap-y-3 justify-between'>
        <div className='flex flex-col gap-y-[5px]'>
          <h4>
            <svg
              width='160'
              height='30'
              viewBox='0 0 160 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.1154 21.3119H9.26785V17.8716H19.2729V10.9207H9.26785V8.07713H20.1154V0.389025H0.842532V29H20.1154V21.3119ZM44.1752 29V17.9067C44.1752 13.027 45.1933 11.8685 47.1592 11.8685C49.3006 11.8685 50.2134 12.7462 50.2134 15.8003V29H58.6387V13.7993C58.6387 6.07611 56.6026 3.54852 51.1963 3.54852C46.1762 3.54852 44.1752 6.74312 44.1752 15.8705V13.8695C44.1752 6.11122 42.1391 3.54852 36.7329 3.54852C31.8181 3.54852 29.7118 6.56759 29.7118 15.5195V3.72405H21.2864V29H29.7118V17.6258C29.7118 12.9217 30.7298 11.8685 32.6957 11.8685C34.8372 11.8685 35.7499 12.7462 35.7499 15.8003V29H44.1752ZM74.2951 29H82.7204V3.72405H74.2951V15.0982C74.2951 19.7673 73.3121 20.8555 71.2409 20.8555C69.0293 20.8555 68.257 20.013 68.257 16.9237V3.72405H59.8316V18.8545C59.8316 26.6128 61.8678 29.1755 67.0634 29.1755C72.1888 29.1755 74.2951 26.1213 74.2951 17.2046V29ZM105.672 21.6981V21.4874C105.672 16.1163 103.284 13.9749 96.7899 13.4483C92.1911 13.0621 91.5943 12.7111 91.5943 11.377V11.3419C91.5943 10.1835 92.4018 9.51645 94.5432 9.51645C96.7197 9.51645 97.7027 10.2537 97.7027 12.1845V12.4653H105.672V12.2547C105.672 6.18143 102.196 3.54852 94.6485 3.54852C87.171 3.54852 83.5903 6.21654 83.5903 11.2366V11.377C83.5903 16.4673 85.6966 18.2928 92.1209 19.1705C97.141 19.8375 97.7027 20.1885 97.7027 21.5576V21.663C97.7027 22.7863 96.8602 23.2778 94.8591 23.2778C92.5773 23.2778 91.5943 22.4704 91.5943 20.5396V20.2938H83.5903V20.6098C83.5903 26.9639 87.487 29.1755 94.6836 29.1755C102.056 29.1755 105.672 26.9288 105.672 21.6981ZM117.922 3.54852C109.953 3.54852 106.267 7.44523 106.267 15.3089V17.4152C106.267 25.2788 109.953 29.1755 117.922 29.1755C125.926 29.1755 129.577 25.2788 129.577 17.4152V15.3089C129.577 7.44523 125.926 3.54852 117.922 3.54852ZM117.922 21.8385C115.675 21.8385 114.692 20.8555 114.692 17.0992V15.6248C114.692 11.8685 115.675 10.8856 117.922 10.8856C120.168 10.8856 121.151 11.8685 121.151 15.6248V17.0992C121.151 20.8555 120.168 21.8385 117.922 21.8385ZM129.754 14.0802H132.632V29H141.058V14.0802H145.13V7.33991H141.058V6.95375C141.058 5.76016 141.444 5.19848 142.707 5.19848H145.305V0.389025H139.021C135.019 0.389025 132.632 2.60067 132.632 6.95375V7.33991H129.754V14.0802ZM156.275 29V10.4643H159.75V3.72405H156.275V0.845397H147.85V3.72405H145.638V10.4643H147.85V29H156.275Z'
                fill='#352784'
              />
            </svg>
          </h4>
          <span className='text-sky-500 leading-relaxed'>
            Technologies LLC.
          </span>
        </div>
        <div className='flex flex-col md:gap-y-2 max-w-[237px]'>
          <p className='font-black max-md:text-sm'>ABOUT</p>
          <span className='max-md:text-xs'>
            Over 18 years of experience in the industry and a diverse set of
            skills
          </span>
        </div>
        <div className='flex flex-col md:gap-y-2 max-w-[118px]'>
          <p className='font-black max-md:text-sm'>ADDRESS</p>
          <span className='max-md:text-xs'>
            <a href='mailto:info@emusoft.com'>info@emusoft.com</a>
            <a href='tel:+971 55 666 2948'>+971 55 666 2948</a>
          </span>
        </div>
        <div className='flex items-center'>
          <a>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.402 21V14.034H17.735L18.084 11.326H15.402V9.598C15.402 8.814 15.62 8.279 16.744 8.279H18.178V5.857C17.4838 5.78334 16.7861 5.74762 16.088 5.75C14.021 5.75 12.606 7.012 12.606 9.33V11.326H10.268V14.034H12.606V21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H15.402Z'
                fill='#313131'
              />
            </svg>
          </a>
          <a>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z'
                fill='#313131'
              />
            </svg>
          </a>
          <a>
            <svg
              width='22'
              height='22'
              viewBox='0 0 24 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.901 0.15332H22.581L14.541 9.34332L24 21.8463H16.594L10.794 14.2623L4.156 21.8463H0.474L9.074 12.0163L0 0.15432H7.594L12.837 7.08632L18.901 0.15332ZM17.61 19.6443H19.649L6.486 2.24032H4.298L17.61 19.6443Z'
                fill='#313131'
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
