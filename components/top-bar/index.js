import Link from 'next/link';

import './index.css';

const TopBar = ({ altColor = false }) => {
  return (
    <div className={`top-bar__container ${altColor ? 'top-bar__container--alt' : ''}`}>
      <div className='top-bar__container_wrap'>
        <Link href="/">
          <img
            className='top-bar__image'
            src={altColor ? "/logo-blue.png" : "/logo-white.png"}
          />
        </Link>

        <div className='top-bar__button-container'>
          <Link href='/signup'>
            <button className={`top-bar__button ${altColor ? 'top-bar__button--alt' : ''}`}>
              register
            </button>
          </Link>
          <button className={`top-bar__button ${altColor ? 'top-bar__button--alt' : ''}`}>
            about
          </button>
          <button className={`top-bar__button ${altColor ? 'top-bar__button--alt' : ''}`}>
            faq
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
