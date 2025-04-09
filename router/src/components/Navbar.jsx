import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white sticky top-0 shadow">
            <section className="flex justify-between items-center max-w-4xl m-auto py-2">
                <img className='w-full max-w-20' src={Logo} alt="logo" />
                <div className="navbar-menu">
                    <div className="space-x-4">
                        <NavLink to="/home"
                            style={({ isActive, isPending, isTransitioning }) => {
                                // console.log(isActive, "isActive");
                                // console.log(isPending, "isPending");
                                // console.log(isTransitioning, "isTransitioning");
                                return {
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? '#6EC2F6' : 'white',
                                    textDecoration: isActive ? 'underline' : 'none',
                                }
                            }}
                        >Home</NavLink>
                        <NavLink to="/about"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? '#6EC2F6' : 'white',
                                    textDecoration: isActive ? 'underline' : 'none',
                                }
                            }}
                            className="navbar-item">About</NavLink>
                        <NavLink to="/contact"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? '#6EC2F6' : 'white',
                                    textDecoration: isActive ? 'underline' : 'none',
                                }
                            }}
                        >Contact</NavLink>
                    </div>
                </div>
            </section>
        </nav>
    );
}