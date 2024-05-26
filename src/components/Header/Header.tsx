import NavBar from './NavBar'
import casa from "../../assets/img/casa-hero.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='px-[5%]'>
      <NavBar />
      <div className='flex flex-wrap h-96'>
        <div className='w-1/2  flex justify-center  md:flex-col '>
          <h1 className='text-5xl text-gray-800 text-pretty'>Encuentra tu <br />
            inmueble ideal</h1>
          <p className='text-pretty text-sm text-gray-800 my-6'>Encuentra casas,
            departamentos, ranchos, naves industriales y terrenos</p>
          
          {/* botones */}
          <div >
            <a className='mr-6 px-6 py-2 bg-gray-800 border-2 border-gray-800  
              text-white rounded-xl cursor-pointer transition hover:bg-transparent hover:text-gray-800'>Contactar</a>
            <a className='mr-6 px-6 py-2 bg-transparent border-2 border-gray-800  
              rounded-xl cursor-pointer text-gray-800 transition hover:bg-gray-800 hover:text-white'>Ver todo</a>
          </div>
          
          {/* iconos */}
          <div className='mt-6'>
            <FontAwesomeIcon icon={faFacebook} className='bg-gray-800 text-xl rounded-full mr-3 p-1 text-white transition hover:scale-110' />
            <FontAwesomeIcon icon={faInstagram} className='bg-gray-800 text-xl mr-3 rounded-full p-1 text-white transition hover:scale-110' />
            <FontAwesomeIcon icon={faSolidEnvelope} className='bg-gray-800 text-xl  rounded-full p-1 text-white transition hover:scale-110' />
          </div>
        </div>
        <div className='w-1/2  flex justify-center  md:flex-col px-4'>
          <img style={{ boxShadow: "20px -20px 0 #000" }} className='rounded-3xl' src={casa} />
        </div>

      </div>
      <hr />
    </header>
  )
}

export default Header
