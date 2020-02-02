import Link from 'next/link';

const TopBar = () => {
  return (
    <div className='top-bar__container'>
      <div className='top-bar__container_wrap'>
        <img className='top-bar__image' src="/logo-white.png" />

        <Link href='/signup'>
          <button style={{ color: 'white' }}>subscribe</button>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
