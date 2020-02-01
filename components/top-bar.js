import Link from 'next/link';

const TopBar = () => {
  return (
    <div className='top-bar__container'>
      <div className='top-bar__container_wrap'>
        <image style={{ height: 75, width: 200, background: 'red' }} src="/logo-white.png" />

        <Link href='/signup'>
          <button>subscribe</button>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
