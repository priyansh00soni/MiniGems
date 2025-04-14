import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipNCfF6G6QzqYUWBVcbrW9XHbRDE50ROpvwT_LGY=w750-h606-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipOrDmjrl2YXeSsB0jOK8_p-kJ0ias_B7d9qilKi=w750-h606-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipPqlAEK9469TvH9jEyJYDGZaBXG-BiqxrFco_vF=w750-h606-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipOv5GmIichi3zo8t09Yls1D_lcwfn6yAL9D-0N6=w750-h606-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipPZayhG3FKdJWSJSHUrUqpsRk16eMkV-QgTBMVe=w750-h606-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipOjMVISXJaIt8pmiCWOqfGxP-3oNiB02-SRqeeb=w750-h813-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipNF0PX3JyKECUOilW9e8nKR15R95y4uptwI-KYw=w750-h813-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipPyyPSTNNKdCO1nAPadtJdcC87tf03C-cw7HH6q=w750-h813-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipOaZkYdUlfSFjt-GvSU3XJYc3bBqnfxVtVu17ff=w750-h813-p-k-no",
  "https://lh3.googleusercontent.com/p/AF1QipPE_AqXVmstcxF0pWYnf6Vy2ZFaoMLEnplEovgo=w750-h813-p-k-no",
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-slate-100 py-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full"
          >
            <div className="mb-10 bg-white rounded-xl shadow-2xl drop-shadow-md overflow-hidden flex justify-center items-center mx-auto w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="max-h-full max-w-full object-contain "
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
