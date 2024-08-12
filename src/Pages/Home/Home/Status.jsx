
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";


const Status = () => {


    const [booking, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);

            })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
    }, [url])
    
    const Parsent = booking.length;
    const Update = Parsent + booking.length
    const parsent_2 = booking.length;
    const remaining_2 = parsent_2 + booking.length;
    const update_2 = 100 - remaining_2;
    
    return (
        <div className="">
            {
                user ?
                    <div className="stats w-full shadow mx-auto">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Total Services</div>
                            <div className="stat-value text-primary"></div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">My Bookings</div>
                            <div className="stat-value text-secondary"></div>
                            <div className="stat-value text-primary">{booking.length}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src={user.
                                            photoURL} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">{Update}%</div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-desc text-secondary">{update_2} tasks remaining</div>
                        </div>
                    </div>
                    : <p></p>
            }
        </div>
    );
};

export default Status;