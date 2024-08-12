import logo from '../../assets/Screenshot_2024-08-02_160506-removebg-preview.png';
import img from '../../assets/220721175751-woman-mechanic-stock.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SingUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleSingUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // You can handle user info or redirect here
                let timerInterval;
                Swal.fire({
                    title: "Your Account Creating",
                    html: "I will close in <b></b> milliseconds.",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                      Swal.showLoading();
                      const timer = Swal.getPopup().querySelector("b");
                      timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                      }, 100);
                    },
                    willClose: () => {
                      clearInterval(timerInterval);
                    }
                  }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                      console.log("I was closed by the timer");
                    }
                  });

            })
            .catch(error => {
                console.error("Error creating user:", error);
                Swal.fire(error.message, 'you already loged in');
            });
        const NewUser = {
            name,
            email,
            photo,
            password
        };
        console.log(NewUser);
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
            });
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Car Doctor</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                Revive Your Ride with Expert Care – Trust Our Car Doctors for Precision Repairs and Unmatched Reliability!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
                            </div>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Most Welcome To Visit Our Website</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSingUp}>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Your Name'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@example.com"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="photo" className="text-sm text-gray-600 dark:text-gray-200">Profile Photo</label>
                                    </div>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="Your Profile Photo URL"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                            <button onClick={handleGoogle} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <div className="px-4 py-2">
                                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>
                                </div>
                                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign up with Google</span>
                            </button>

                            <div className="mt-6 text-sm text-center text-gray-400">
                                Already have an account? <Link to='/login'><h1 href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign In</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
