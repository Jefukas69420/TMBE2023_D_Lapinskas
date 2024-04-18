import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav className='w-full bg-[#151314] flex justify-end p-2 gap-5 h-5lvh'>
             <Link to="/" className='text-white p-3 gap-5 h-[50px] w-[150px] flex justify-center items-center bg-[#EFCFA0]'>Pagrindinis</Link>
             <Link to="/about" className='text-white p-3 h-[50px] w-[150px] flex justify-center items-center bg-[#EFCFA0]'>Apie mus</Link>
             <Link to="/products" className='text-white p-3 h-[50px] w-[150px] flex justify-center items-center bg-[#EFCFA0]'>E-Spinta</Link>
 </nav>
 );
};

export default NavBar;