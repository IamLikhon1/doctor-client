
const Looking = () => {
    return (
        <div className="my-10 grid md:grid-cols-3">
            <div className="card w-96 image-full">
            <figure><img src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=740&t=st=1683817396~exp=1683817996~hmac=88dd784a7d2c918311cd50404af3e707399f6f0922f3c2bce6d2098d0d27abab" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="flex justify-center mt-14 font-bold text-2xl">Visit a Doctor</h2>
                <div className="card-actions justify-center mt-5">
                <button className="btn btn-accent">Book Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96   image-full">
            <figure><img src="https://img.freepik.com/premium-vector/pharmacy-with-pharmacist-client-counter_36082-506.jpg?w=826" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="flex justify-center mt-14 font-bold text-2xl">Medical</h2>
                <div className="card-actions justify-center mt-5">
                <button className="btn btn-accent">Book Now</button>
                </div>
            </div>
            </div>
            <div className="card w-96   image-full">
            <figure><img src="https://img.freepik.com/free-photo/medium-shot-nurse-doctor-checking-patient_23-2148973496.jpg?w=740&t=st=1683818029~exp=1683818629~hmac=d2225f42ec4e561fd8d6fdf2b3101c11ae3d55c813014255534dbfc4ff9d4fc0" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="flex justify-center mt-14 font-bold text-2xl">Service</h2>
                <div className="card-actions justify-center mt-5">
                <button className="btn btn-accent">Book Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Looking;