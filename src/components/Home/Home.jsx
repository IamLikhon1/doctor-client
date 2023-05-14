import { useEffect, useState } from "react";
import Speical from "../Speical/Speical";
import Looking from "../pages/Looking";


const Home = () => {
    const [allCard,setAllCard]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/specialist')
        .then(res=>res.json())
        .then(data=>setAllCard(data))
    },[])
    return (
        <div className="px-14">
            {/* banner */}
            <div className="grid md:grid-cols-2 items-center">
                <img src='https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=740&t=st=1683816606~exp=1683817206~hmac=63997d96ef40cd24827c9f2d1fccbaf08da314478e28a880b0c2a56681093d23' alt="" />

                <div>
                    <h2 className="text-5xl font-bold">Search Doctor,  Make an Appointment</h2>
                    <p className="text-2xl mt-5">Discover the best doctors,clinic & hospital the cities near by you. </p>
                </div>
            </div>
            {/* banner */}

            {/* looking for */}
            <div className="my-16">
                <h2 className="text-center text-5xl font-bold my-10">What Are You Looking For</h2>
                <Looking></Looking>
            </div>
            {/* looking for */}
            {/* Specialist */}

                <div className="text-center text-5xl font-bold my-10">Our Specialist</div>
            <div className="grid md:grid-cols-2 md:px-20">
            
                {
                   allCard.slice(0,4).map(cards=><Speical
                   key={cards._id}
                   cards={cards}
                   ></Speical>)
                }
           
            </div>
            {/* Specialist */}
        </div>
    );
};

export default Home;