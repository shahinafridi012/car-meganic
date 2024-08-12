import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, title, price, img } = service;
    return (
        <div className="card card-compact bg-base-100 lg:w-96  transition ease-in-out hover:-translate-y-1 hover:scale-110 lg:p-1 md:p-1 p-3">
            <figure>
                <img
                    src={img}
                    alt={title} // Added alt text for accessibility
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <p>Price:<span className="text-red-700 font-bold">${price}</span></p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-outline"><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

// Define PropTypes for the component
ServicesCard.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        _id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
};

export default ServicesCard;
