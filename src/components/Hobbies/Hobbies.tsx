import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../style/Hobbies.css'; // Ensure this is the correct path to your CSS

const hobbies = [
  {
    name: 'Travel and see new places',
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/014/537/365/small_2x/plane-travel-route-pin-on-the-world-map-travel-travel-ideas-png.png', // Replace with the correct icon path
  },
  {
    name: 'A good read along with a coffee or tea',
    icon: 'https://cdn-icons-png.flaticon.com/512/90/90821.png', // Replace with the correct icon path
  },
  {
    name: 'Sport',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNpNAMwHj2RUWq5W2pNkEjVoFvh5mLK96FmwgNZmzZHkwMchp2X52ivE3bsAOqViZ1N0&usqp=CAU', // Replace with the correct icon path
  },
];

const images = [
  'https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526995_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/12/04/09/13/leaves-1076307_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/10/09/20/16/globe-7510104_960_720.jpg',
];

const Hobbies: React.FC = () => {
  return (
    <section className="hobbies">
      <div className="hobbies-list">
        <h2 className='hobbies-title'>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index} className="hobby-item">
              <img src={hobby.icon} alt={`${hobby.name} icon`} className="hobby-icon" />
              <span className='hobby-name'>{hobby.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hobbies-image">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="hobby-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hobbies;
