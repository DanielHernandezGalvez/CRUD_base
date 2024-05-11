import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className='flex'>
        <div className='w-1/2 bg-slate-400 h-screen flex justify-center  md:flex-col px-5'>
          <h1 className='text-5xl text-gray-800 text-pretty'>Encuentra tu <br />
            inmueble ideal</h1>
          <p className='text-pretty text-sm text-gray-800 my-6'>Encuentra casas,
            departamentos, ranchos, naves industriales y terrenos</p>
          <div >
            <a className='mr-6 px-6 py-2 bg-gray-800 border-2 border-gray-800  
              text-white rounded-xl cursor-pointer'>Contactar</a>
            <a className='mr-6 px-6 py-2 bg-transparent border-2 border- border-gray-800  
              text-white rounded-xl cursor-pointer'>Ver todo</a>
          </div>
        </div>
        <div className='w-1/2 bg-orange-800 h-screen md:flex-col'></div>
      </div>
    </header>
  )
}

export default Header
