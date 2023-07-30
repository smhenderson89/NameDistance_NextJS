import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header