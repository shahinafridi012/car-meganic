import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../../assets/Screenshot_2024-08-02_160506-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import log from '../../../assets/logo.png'
import Swal from "sweetalert2";

const NavBar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                navigate('/')
                Swal.fire("You Successfully logOut");
            })
            .catch(error => console.log(error))

    }
    const link = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user?.email ? <li><Link to='/bookings'>My Bookings</Link></li> :<p></p>
        }
        {
            user? <p></p> :<li><Link to="/login">Login</Link></li>
        }
        {
            user? <p></p> :<li><Link to="/signup">Register</Link></li>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}

                        </ul>
                    </div>
                    <Link to='/' className=" text-center text-red-700"><img className=" w-[150px] lg:w-[200px] text-cen' text-red-800 " src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="btn btn-ghost btn-circle lg:flex hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle lg:flex hidden">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <button className="btn btn-outline">Appointment</button>

                    {/* {
                        user?.email? <button onClick={handleLogOut} className="btn">SignOut</button> 
                        :  <Link to='/signup'><button className="btn">SignIn</button></Link>
                    } */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" w-[50px] btn-ghost ">
                            {
                                user?.photoURL ? <img className="rounded-3xl" src={user.photoURL} alt="" />
                                    : <img src={log
                                    } alt="" />
                            }
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] space-y-2 mt-3 lg:w-[300px] w-[70px] shadow">
                            <li className="lg:text-2xl lg:font-bold">Profile</li>
                            {
                                user ? <NavLink to='/update'><h1 className="lg:text-lg border rounded-xl">Update profile</h1></NavLink> : <p></p>
                            }
                            {
                                user ? <p></p> : <li className='lg:text-lg border rounded-xl'><NavLink to='/signup'>Register</NavLink></li>
                            }
                            {user ?
                                <h1 className='lg:text-lg border rounded-xl'><NavLink onClick={handleLogOut} to="/">SignOut</NavLink></h1> :
                                <li className='lg:text-lg border rounded-xl'><NavLink to="/login">Login</NavLink></li>
                            }
                            {
                                user ? <h1 className='text-lg justify-between border rounded-xl'>{user.
                                    displayName || user.name
                                }</h1>

                                    : <p></p>
                            }
                            {
                                user ? <h1 className='text-lg justify-between lg:flex hidden border rounded-xl'>{user.email}</h1> : <p></p>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;