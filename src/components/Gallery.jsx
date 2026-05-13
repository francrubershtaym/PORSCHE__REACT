import img1 from "../assets/photo/gallery1.png"
import img2 from "../assets/photo/gallery2.png"
import img3 from "../assets/photo/gallery3.png"

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="container GL">
            <h2 className="gallery__title">GALLERY</h2>
            <div className="gallery__images">
                <img src={img1} alt="" className="gallery__img" />
                <img src={img2} alt="" className="gallery__img" />
                <img src={img3} alt="" className="gallery__imgs" />
            </div>
        </div>
    </div>
  )
}

export default Gallery