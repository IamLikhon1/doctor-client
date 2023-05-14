import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
const Register = () => {
    const{createUser}=useContext(AuthContext);
    const navigate=useNavigate()

    const handleRegisterSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            const logUser=result.user;
            console.log(logUser);
            toast.success('You Register Successfully');
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="grid md:grid-cols-2 items-center mx-20 my-10 ">
        <img className="w-full" src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1683818908~exp=1683819508~hmac=670f8b94ccef3d0694517ea4f37c9b6fcba9645320d811e0b01d283e841c7842" alt="" />

        <div className="w-full">
            <form onSubmit={handleRegisterSubmit}>
            <div className="px-5">
<div className="hero-content flex-col">
    <div className="text-center">
    <h1 className="text-5xl font-bold">Register</h1>
    </div>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <button type="submit" className="btn btn-accent text-white font-medium">Login</button>
        <p className="text-center mt-5 font-bold"><small>Already have account? <Link to='/login'><span className="text-teal-600">Login</span></Link></small></p>
        </div>
    </div>
    </div>
</div>
</div>
        
</form>
</div>
</div>
    );
};

export default Register;