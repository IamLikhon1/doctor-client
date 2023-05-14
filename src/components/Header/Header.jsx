import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const{user,logOut}=useContext(AuthContext);

  const handleLogOut=()=>{
    logOut();
  }
    return (
        <div className="px-10 mt-5">
                <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to='/'><li><a>Home</a></li></Link>
        <li tabIndex={0}>
        </li>
        <li><p>Contact Us</p></li>
       <Link to='/booking'>{ user?<li className="text-teal-600 font-medium"><p>Appointment</p></li>:<></>
       }</Link>
      </ul>
    </div>
   <Link to='/'> <a className="btn btn-ghost normal-case text-xl text-purple-500">My <span className="text-purple-700"> Camber &copy;</span></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to='/'><li><a>Home</a></li></Link>
      <li tabIndex={0}>
      </li>
      <li><a>Contact Us</a></li>
     <Link to='/booking'> { user?<li className="text-teal-600 font-medium"><p>Appointment</p></li>:<></>
       }</Link>
    </ul>
  </div>
  <div className="navbar-end">
   {user?<button onClick={handleLogOut} className="btn btn-outline btn-accent font-medium">Log Out</button>:<Link to='/login'><a className=" btn btn-outline btn-accent font-medium">Login/Sign Up</a></Link>}
  </div>
</div>
            
        </div>
    );
};

export default Header;