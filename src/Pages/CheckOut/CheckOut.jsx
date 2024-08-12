import { Link, useLoaderData } from "react-router-dom";
import photo from '../../assets/jacob-spence--lxokV5E0tc-unsplash.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import main_photo from '../../assets/sven-d-a4S6KUuLeoM-unsplash.jpg'
const CheckOut = () => {
    const service = useLoaderData();
    const { price, title, _id, img } = service;
    const { user } = useContext(AuthContext)
    console
    const handleBook = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const number = e.target.number.value;
        const price = e.target.price.value;
        const discover = e.target.discover.value;


        const booking = {
            name,
            email,
            date,
            number,
            price,
            discover,
            service: _id,
            title,
            img
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }
    return (
        <div>
            {/* booking sections */}


            <div className="mb-20 rounded-2xl  transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
                <div
                    className="hero lg:h-[400px] rounded-2xl "
                    style={{
                        backgroundImage: `url(${main_photo})`,
                    }}>

                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl text-white mt-5 font-bold">Check Out</h1>
                            <h1 className="mb-5 text-3xl text-white mt-5 font-bold">{title}</h1>
                            <p className="mb-5 text-white">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                        </div>
                    </div>
                </div>
            </div>



            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center min-h-screen">
                        <div
                            className="hidden rounded-l-xl bg-cover lg:block lg:w-2/5"
                            style={{ backgroundImage: `url(${photo})` }}
                        />
                        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                            <div className="w-full">
                                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                    {title}
                                </h1>
                                <p className="mt-4 text-gray-500 dark:text-gray-400">
                                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                                </p>
                                {
                                    user ? <div className="mt-6">
                                        <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>
                                        <div className="mt-3 md:flex md:items-center md:-mx-2">
                                            <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="mx-2">client</span>
                                            </button>
                                            <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="mx-2">worker</span>
                                            </button>
                                        </div>
                                    </div> :
                                        <Link to='/signup'> <li>Register Now</li></Link>
                                }
                                <form onSubmit={handleBook} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={user?.displayName}
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                                        <input
                                            type="text"
                                            name="number"
                                            placeholder="XXX-XX-XXXX-XXX"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            defaultValue={user?.email}
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Amount</label>
                                        <input
                                            type="text"
                                            defaultValue={'$' + price}
                                            name="price"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Date</label>
                                        <input
                                            type="date"

                                            name="date"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Comment Box</label>
                                        <textarea
                                            type="text"
                                            name="discover"
                                            placeholder="Comment"

                                            className="textarea textarea-bordered textarea-lg  max-w-xs block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>

                                    </div>
                                    <button
                                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        <span>Book Now</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CheckOut;