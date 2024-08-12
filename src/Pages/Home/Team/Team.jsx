import person_1 from '../../../assets/person.jpg'
import person_2 from '../../../assets/singup.png'
import person_3 from '../../../assets/valuing-an-automotive-repair-shop.jpg'

const Team = () => {
    return (
        <div className='mt-20'>
            <div className='text-center space-y-4 mb-10'>
                       <h2 className='text-2xl font-bold text-red-700'>Team</h2>
                       <h1 className='text-5xl font-bold text-black'>Meet Our Team</h1>
                       <p>At Car Doctor, our dedicated team of automotive experts combines deep industry <br /> knowledge with a passion for precision repair. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 lg:p-1 md:p-1 p-3 gap-4'>
                <div className="card bg-base-100 lg:w-96 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <figure>
                        <img className=''
                            src={person_1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Precision Auto Clinic</h2>
                      
                       
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-96 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <figure>
                        <img
                            src={person_2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Elite Car Care Specialists</h2>
                        
                      
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-96 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110">
                    <figure>
                        <img
                            src={person_3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Revive & Drive Auto Services</h2>
                      
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;