import { Link } from "react-router-dom";

const Speical = ({cards}) => {
    const{_id,name,img,fees}=cards

    return (
        <div className="md:p-8">
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure><img className="w-full h-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Specialist: {name}</h2>
            <div className="text-xl font-semibold">Fees: <span className="text-teal-500">{fees}</span></div>
            <div className="card-actions justify-end">
           <Link to={`/booking/${_id}`}> <button className="btn btn-outline btn-accent text-white font-semibold mt-5 ">Make Appointment</button></Link>
            </div>
        </div>
        </div>
                </div>
            );
};

export default Speical;