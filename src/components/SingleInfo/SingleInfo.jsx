import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'

const SingleInfo = () => {
    const{user}=useContext(AuthContext)
    const docInfo=useLoaderData()
    const{name,fees}=docInfo;
    const handelSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const namePas=form.name.value;
        const date=form.date.value
        const email=user?.email;
        const userInfo={customerName:namePas,email,appointment:name,price:fees,date};

        fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(userInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire({
            title: 'Done!',
            text: 'Go To Appointment Page',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        }
      })
    }
    

    return (
        <div className="p-10">
            <div className="text-center text-3xl my-5 font-medium">Appointment For: <span className="text-teal-500">{name}</span></div>
            <form onSubmit={handelSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Patient Name" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">

           <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date"  name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email"  placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fees</span>
          </label>
          <input type="text" name="fees" defaultValue={fees} className="input input-bordered" />
        </div>
            </div>
        <div className="form-control mt-6">
          <input type="submit"className="btn btn-accent" value="Appointment" />
        </div>
            </form>
          
    </div>

    );
};

export default SingleInfo;