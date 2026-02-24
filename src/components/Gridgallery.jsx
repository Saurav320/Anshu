import React from 'react'
import "./Gridgallery.css"
import { useNavigate } from 'react-router-dom'
const Gridgallery = () => {
  const navigate = useNavigate;
  const gridgallery = [
    { id: 1, img: "/images/image1.jpeg" },
    { id: 2, img: "/images/image2.jpeg" },
    { id: 3, img: "/images/image3.jpeg" },
    { id: 4, img: "/images/image4.jpeg" },
    { id: 5, img: "/images/image5.jpeg" },
    { id: 6, img: "/images/image6.jpeg" },
    { id: 7, img: "/images/image7.jpeg" },
    { id: 8, img: "/images/image8.jpeg" },
    { id: 9, img: "/images/image9.jpeg" },
    { id: 10, img: "/images/image10.jpeg" },
    { id: 11, img: "/images/image11.jpeg" },
    { id: 12, img: "/images/image12.jpeg" },
    { id: 13, img: "/images/image13.jpeg" },
    { id: 14, img: "/images/image14.jpeg" },
    { id: 15, img: "/images/image15.jpeg" },
    { id: 16, img: "/images/image16.jpeg" },
    { id: 17, img: "/images/image17.jpeg" },
    { id: 18, img: "/images/image18.jpeg" },
    { id: 19, img: "/images/image19.jpeg" },
    { id: 20, img: "/images/image20.jpeg" },
    { id: 21, img: "/images/image21.jpeg" },
    { id: 22, img: "/images/image22.jpeg" },
    { id: 23, img: "/images/image23.jpeg" },
    { id: 24, img: "/images/image24.jpeg" },
    { id: 25, img: "/images/image25.jpeg" },
    { id: 26, img: "/images/image26.jpeg" },
    { id: 27, img: "/images/image27.jpeg" },
    { id: 28, img: "/images/image28.jpeg" },
    { id: 29, img: "/images/image29.jpeg" },
    { id: 30, img: "/images/image30.jpeg" },
    { id: 31, img: "/images/image31.jpeg" },
    { id: 32, img: "/images/image32.jpeg" },
    { id: 33, img: "/images/image33.jpeg" },
    { id: 34, img: "/images/image34.jpeg" },
    { id: 35, img: "/images/image35.jpeg" },
    { id: 36, img: "/images/image36.jpeg" },
    { id: 37, img: "/images/image37.jpeg" },
    { id: 38, img: "/images/image38.jpeg" },
    { id: 39, img: "/images/image39.jpeg" },
    { id: 40, img: "/images/image40.jpeg" },
    { id: 41, img: "/images/image41.jpeg" },
    { id: 42, img: "/images/image42.jpeg" },
    { id: 43, img: "/images/image43.jpeg" },
    { id: 44, img: "/images/image44.jpeg" },
    { id: 45, img: "/images/image45.jpeg" },
    { id: 46, img: "/images/image46.jpeg" },
    { id: 47, img: "/images/image47.jpeg" },
    { id: 48, img: "/images/image48.jpeg" },

  ];
  return (
    <div>
      <div className='gridmaindiv'>
        {gridgallery.map((item) => (
          <div className='gridcard' key={item.id}>
            <div className='galleryimgbox'>
              <img src={item.img} alt="gallery" />

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Gridgallery
