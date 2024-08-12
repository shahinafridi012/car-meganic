import person from '../../../assets/person.jpg'
import parts from '../../../assets/car parts.webp'

const About = () => {
    return (
        <div>
            <div className="hero   mb-5 mt-5 p-0 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img
                            src={person}
                            className="w-3/4 rounded-lg shadow-2xl" />
                        <img
                            src={parts}
                            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 mt-20 space-y-4'>
                        <h3 className='text-3xl font-bold text-orange-500'>About US</h3>
                        <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold'>We are qualified & of experience in this field</h1>
                        <p className="py-3">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <p className="py-3">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn bg-orange-500 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;