import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t'>
      <div className='p-5 grid text-center text-[15px]'>
        <p>{currentYear} {APP_NAME}. All Rights Reserved </p>
        <p>Created by Andral Orelus</p>
      </div>
    </footer>
  );
};

export default Footer;
