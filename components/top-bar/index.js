import Link from 'next/link';

import './index.css';

const TopBar = () => {
  return (
    <div className='top-bar__container'>
      <div className='top-bar__container_wrap'>
        <img className='top-bar__image' src="/logo-white.png" />

        <div className='top-bar__button-container'>
          <Link href='/signup'>
            <button className='top-bar__button'>subscribe</button>
          </Link>
          <Link href='/about'>
            <button className='top-bar__button'>about</button>
          </Link>
          <Link href='/faq'>
            <button className='top-bar__button'>faq</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
