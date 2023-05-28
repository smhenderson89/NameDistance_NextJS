import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='links'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/future'>Future Plans</Link>
        </div>
      </div>
    </header>
  )
}

export default Header