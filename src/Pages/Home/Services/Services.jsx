import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="mt-4">
            <div className="text-center space-y-3">
                <h3 className="text-3xl text-orange-600 font-bold"> Services</h3>
                <h2 className="text-5xl font-bold">Our services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque facilis soluta id debitis omnis quo eaque <br /> quam! Ipsum ullam fuga delectus distinctio corporis quaerat.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-5">
              {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
              }
            </div>
        </div>
    );
};

export default Services;