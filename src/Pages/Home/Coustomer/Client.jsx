import person_1 from '../../../assets/unnamed.jpg'
import person_2 from '../../../assets/unnamed (1).jpg'
import person_3 from '../../../assets/unnamed (2).jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../assets/Swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Client = () => {
    return (
        < >
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          <section className="bg-white dark:bg-gray-900 container  w-[600px] mx-auto">
      <div className="">
        <div className=" lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:h-[100px]  w-full  rounded-lg "
            src={person_2}
            alt=""
          />

          <div className=" lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Help us improve our productivity
            </h1>

            <p className="max-w-lg  text-gray-500 dark:text-gray-400">
              “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
              tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
              aperiam dolorum, obcaecati corrupti aspernatur a. ”
            </p>

            <h3 className=" text-lg font-medium text-blue-500">Mia Brown</h3>
            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

            <div className="flex items-center justify-between lg:justify-start">
             
            </div>
          </div>
        </div>
      </div>
    </section>
    </SwiperSlide>
          <SwiperSlide>  <section className="bg-white dark:bg-gray-900 container mx-auto w-[600px] mx-auto">
      <div className="">
        <div className=" lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2  w-full h-96 rounded-lg "
            src={person_1}
            alt=""
          />

          <div className=" lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Help us improve our productivity
            </h1>

            <p className="max-w-lg  text-gray-500 dark:text-gray-400">
              “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
              tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
              aperiam dolorum, obcaecati corrupti aspernatur a. ”
            </p>

            <h3 className=" text-lg font-medium text-blue-500">Mia Brown</h3>
            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

            <div className="flex items-center justify-between lg:justify-start">
             
            </div>
          </div>
        </div>
      </div>
    </section></SwiperSlide>
          <SwiperSlide>  <section className="bg-white dark:bg-gray-900 container mx-auto w-[600px] mx-auto">
      <div className="">
        <div className=" lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2  w-full h-96 rounded-lg "
            src={person_3}
            alt=""
          />

          <div className=" lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Help us improve our productivity
            </h1>

            <p className="max-w-lg  text-gray-500 dark:text-gray-400">
              “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
              tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
              aperiam dolorum, obcaecati corrupti aspernatur a. ”
            </p>

            <h3 className=" text-lg font-medium text-blue-500">Mia Brown</h3>
            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

            <div className="flex items-center justify-between lg:justify-start">
             
            </div>
          </div>
        </div>
      </div>
    </section></SwiperSlide>
         
        </Swiper>
      </>
    );
};

export default Client;