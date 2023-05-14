import {useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import SingleBook from "./SingleBook";
import Swal from "sweetalert2";

const Booking = () => {
    // const{user}=useContext(AuthContext)
    const[bookings,setBookings]=useState([]);

    const url="http://localhost:5000/booking";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url]);

    const handleDeleteBook=(id)=>{

      fetch(`http://localhost:5000/booking/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          Swal.fire({
            title: 'Delete!',
            text: 'You deleted Successfully',
            icon: 'error',
            confirmButtonText: 'Delete?'
          })
          const remaining=bookings.filter(books=>books._id!==id);
          setBookings(remaining)
        }
      })
    

    }
    return (
        <div>
            <div className="text-4xl text-center text-teal-600 my-8">Appointment List</div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Appointment</th>
        <th>Email</th>
        <th>Fees</th>
        <th>Dates</th>
        <th>Update Date</th>
        <th>Transaction</th>
      </tr>
    </thead>
    <tbody>
        
        {
            bookings.map(book=><SingleBook key={book._id}
            book={book}
            handleDeleteBook={handleDeleteBook}
            >

            </SingleBook>)
        }
        
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Booking;