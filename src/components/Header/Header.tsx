import NavBar from './NavBar'
import casa from "../../assets/img/casa-hero.jpg"

const Header = () => {
  return (
    <header className='px-[5%]'>
      <NavBar />
      <div className='flex h-96'>
        <div className='w-1/2  flex justify-center  md:flex-col '>
          <h1 className='text-5xl text-gray-800 text-pretty'>Encuentra tu <br />
            inmueble ideal</h1>
          <p className='text-pretty text-sm text-gray-800 my-6'>Encuentra casas,
            departamentos, ranchos, naves industriales y terrenos</p>
          <div >
            <a className='mr-6 px-6 py-2 bg-gray-800 border-2 border-gray-800  
              text-white rounded-xl cursor-pointer'>Contactar</a>
            <a className='mr-6 px-6 py-2 bg-transparent border-2 border- border-gray-800  
              rounded-xl cursor-pointer text-gray-800'>Ver todo</a>
          </div>
        </div>
        <div className='w-1/2  flex justify-center  md:flex-col px-4'>
          <img style={{boxShadow: "20px -20px 0 #000"}} className='rounded-3xl' src={casa} />
        </div>
      </div>
    </header>
  )
}

export default Header
