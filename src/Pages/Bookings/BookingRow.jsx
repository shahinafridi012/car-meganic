import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { date, name, title, price, img, _id, status } = booking;

    return (
        <tr className="rounded-xl">
            <td className="mt-1">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle min-h-14 w-24">
                            <img className="rounded-none" src={img} alt={`${name}'s avatar`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">Bangladesh</div>
                    </div>
                </div>
            </td>
            <td>
                {date}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{title}</td>
            <th className="">
                {
                    status === 'Confirm' 
                        ? <span className="font-bold text-primary">Confirmed</span>
                        : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><MdDelete /></button>
            </th>
        </tr>
    );
};

// Define prop types for the component
BookingRow.propTypes = {
    booking: PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
};

export default BookingRow;
