
import img from '../../../assets/DTW-coveralls-black_F22_longsleeve_shortsleeve_Faye-Hadley_lifestyle_0363_2048x2048.webp'
import img_1 from '../../../assets/220721175751-woman-mechanic-stock.jpg'
import img_2 from '../../../assets/valuing-an-automotive-repair-shop.jpg'
import img_3 from '../../../assets/car-repair-costs-hero_1_1.webp'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img}
                        className="w-full rounded-xl" />
                    <div className="absolute  lg:mb-15 md:mb-24 left-5 right-5 bottom-0  mr-5 flex">
                        <div className='text-white lg:space-y-7 md:space-y-5 space-y-3 lg:w-1/3 w-[400px] mb-2  '>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold hover:animate-pulse'>Affordable price For Car Servicing</h2>
                            <p className=' hover:animate-pulse'>There are many variation of passages of available, but the majority have suffered alteration in some from </p>
                            <div className='  hover:animate-pulse'>
                                <button className='btn mr-5 btn-error rounded-lg text-white'>Discover More</button>
                                <button className='btn btn-outline rounded-lg  text-white'>latest Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute left-5 right-5 bottom-0 justify-end mr-5 flex -translate-y-1/2 transform ">

                        <a href="#slide4" className="btn mr-5 btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 justify-end mr-5 flex -translate-y-1/2 transform ">

                        <a href="#slide4" className="btn mr-5 btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img_1}
                        className="w-full rounded-xl" />
                          <div className="absolute  lg:mb-15 md:mb-24 left-5 right-5 bottom-0  mr-5 flex">
                        <div className='text-white lg:space-y-7 md:space-y-5 space-y-3 lg:w-1/3 w-[400px] mb-2  '>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold hover:animate-pulse'>How about?Budget-Friendly Car Service</h2>
                            <p className=' hover:animate-pulse'>There are many variation of passages of available, but the majority have suffered alteration in some from </p>
                            <div className='  hover:animate-pulse'>
                                <button className='btn mr-5 btn-error rounded-lg text-white'>Add Your Service</button>
                                <button className='btn btn-outline rounded-lg  text-white'>Edit Your Service</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 mr-5 transform justify-end">
                        <a href="#slide1" className="btn mr-5 btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img_2}
                        className="w-full rounded-xl" />
                          <div className="absolute  lg:mb-15 md:mb-24 left-5 right-5 bottom-0  mr-5 flex">
                        <div className='text-white lg:space-y-7 md:space-y-5 space-y-3 lg:w-1/3 w-[400px] mb-2  '>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold hover:animate-pulse'>Cost-Effective Auto Repairs</h2>
                            <p className=' hover:animate-pulse'>There are many variation of passages of available, but the majority have suffered alteration in some from </p>
                            <div className='  hover:animate-pulse'>
                                <button className='btn mr-5 btn-error rounded-lg text-white'>Login To 10% of</button>
                                <button className='btn btn-outline rounded-lg  text-white'>Register To Get 20% Of</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn mr-5 btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img_3}
                        className="w-full rounded-xl" />
                          <div className="absolute  lg:mb-15 md:mb-24 left-5 right-5 bottom-0  mr-5 flex">
                        <div className='text-white lg:space-y-7 md:space-y-5 space-y-3 lg:w-1/3 w-[400px] mb-2  '>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold hover:animate-pulse'>Value-Priced Car Maintenance</h2>
                            <p className=' hover:animate-pulse'>There are many variation of passages of available, but the majority have suffered alteration in some from </p>
                            <div className='  hover:animate-pulse'>
                                <button className='btn mr-5 btn-error rounded-lg text-white'>Drop Your CV</button>
                                <button className='btn btn-outline rounded-lg  text-white'>Resign From Job</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform mr-5 justify-end">
                        <a href="#slide3" className="btn mr-5 btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;