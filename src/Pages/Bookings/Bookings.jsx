import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

import main_photo from '../../assets/car-repair-costs-hero_1_1.webp'
import axios from "axios";
const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
    }, [url])
    const handleDelete = id => {
        const proceed = confirm('are you sure want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successful')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }
    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }
    return (
        <div className="mx-auto">
            <div>

                <div className="mb-20 rounded-2xl  transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    <div
                        className="hero lg:h-[400px] rounded-2xl "
                        style={{
                            backgroundImage: `url(${main_photo})`,
                        }}>

                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl text-white mt-5 font-bold">My Cart</h1>
                                <h1 className="mb-5 text-3xl text-white mt-5 font-bold"></h1>
                                <p className="mb-5 text-white">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Date & $Money</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingRow key={booking._id} booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                ></BookingRow>)
                            }

                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;