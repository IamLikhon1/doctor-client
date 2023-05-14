import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateForm = () => {
    const loader=useLoaderData();
    const {_id,customerName}=loader

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value
        const date=form.date.value;
        const updated={name,date};
        // console.log(updated);
       
        fetch(`http://localhost:5000/booking/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updated)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount>0){
                toast.success("Updated date successfully!!")
            }
        })
      
    }

    return (
        <div>
            <div className="text-5xl text-purple-500 font-bold text-center mt-10">Only Update Date</div>
            <div className="my-16 flex justify-center items-center ">
            <div className="card w-96 h-full shadow-xl bg-slate-600">
            <div className="card-body">
           <form onSubmit={handleSubmit}>
                 
           <input type="text" name="name" placeholder="Update Name" defaultValue={customerName} className="input w-full max-w-xs" />
            <input type="date" name="date" placeholder="Update Date" className="input w-full mt-10 max-w-xs" />
            <input type="submit" className="btn mt-5  btn-outline btn-warning w-full max-w-xs" value="Update" />
           
           </form>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default UpdateForm;