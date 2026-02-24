import React from 'react'
import "./Secrateimg.css"
const Secrateimg = () => {
  const secrateimages = [
    { id: 1, img: "/images/image49.jpeg" },
    { id: 2, img: "/images/image50.jpeg" },
    { id: 3, img: "/images/image51.jpeg" },
    { id: 4, img: "/images/image52.jpeg" },
    { id: 5, img: "/images/image53.jpeg" },
    { id: 6, img: "/images/image54.jpeg" },
    { id: 7, img: "/images/image55.jpeg" },
    { id: 8, img: "/images/image56.jpeg" },
    { id: 9, img: "/images/image57.jpeg" },
    { id: 10, img: "/images/image58.jpeg" },
  ];
  return (
    <div className="gallerygrid">
      {secrateimages.map((item) => (
        <div className="gallerycard" key={item.id}>
          <div className='galleryimgbox'>
            <img src={item.img} alt="gallery" />

          </div>
        </div>
      ))}
    </div>
  )
}

export default Secrateimg
