import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className='flex'>
        <div className='w-1/2 bg-slate-400 h-screen'></div>
        <div className='w-1/2 bg-orange-800 h-screen'></div>
        </div>
    </header>
  )
}

export default Header
