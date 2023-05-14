import { Link } from "react-router-dom";
import { FaRegEdit } from 'react-icons/fa';

const SingleBook = ({book,handleDeleteBook}) => {
    const{customerName,email,appointment,price,date,_id}=book;
    
    const openUpdate=()=>{
      // console.log('ok')
      
    }
    return (
        
            <tr>
         <Link onClick={()=>handleDeleteBook(_id)} className="btn btn-circle btn-xs ml-8 mt-5">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </Link>
        <td>{customerName}</td>
        <td>{appointment}</td>
        <td>{email}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td onClick={()=>openUpdate(_id)}><Link to={`/update/${_id}`}><FaRegEdit>
            </FaRegEdit></Link></td>
        <td>Payment</td>
      </tr>
            
     
    );
};

export default SingleBook;