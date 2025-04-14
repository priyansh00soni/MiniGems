import { motion } from "framer-motion";
import { ArrowRight, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import maam from '../assets/maam.png';
import rupeshsir from '../assets/rupeshsir.png';
const Home = () => {
  return (
    <div>
      <style>{`
        .about-btn {
          --color: #1D4ED8;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 7em;
          height: 2.8em;
          line-height: 2.5em;
          overflow: hidden;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          z-index: 1;
          color: var(--color);
          border: 2px solid var(--color);
          border-radius: 6px;
          position: relative;
          background: transparent;
          transition: color 0.3s ease;
        }

        .about-btn::before {
          position: absolute;
          content: "";
          background: var(--color);
          width: 200px;
          height: 200px;
          z-index: -1;
          border-radius: 50%;
          top: 100%;
          left: 100%;
          transition: 0.3s all;
        }

        .about-btn:hover {
          color: white;
        }

        .about-btn:hover::before {
          top: -30px;
          left: -30px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="sm:scale-110 lg:scale-110">
              <h2 className="text-xl text-blue-600 font-semibold scale-105 md:scale-115 lg:scale-[1.8] flex flex-col items-center lg:pr-20">
                <span className="flex items-center">
                  <Link to="/" className="flex items-center group flex-col ">
                    <div className="flex">
                      <Gem className="h-12 w-12 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
                      <span className="ml-2 mt-1 text-5xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                        MiniGems
                      </span>
                    </div>
                    <br />
                    <h1 className="text-3xl text-blue-600 font-semibold scale-105 md:scale-115 lg:scale-100 flex flex-col items-center lg:pr-20 lg:ml-28 ml-5 mt-[-30px] lg:mt-[-30px] sm:mt-[-30px] lg:mb-10">
                      Coaching Institute
                    </h1>
                  </Link>
                </span>
              </h2>
              <br />
              <br />
              <h1 className="text-4xl sm:text-5xl flex justify-center mb-6 pl-5 lg:pr-28">
                Rupesh Tiwari
              </h1>

              <div className="flex justify-center pl-5 lg:pr-28">
                <Link to="/about" className="about-btn">
                  <span>About</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full   overflow-hidden rounded-xl shadow-lg"
>
  <img
    src={rupeshsir}
    alt="Rupesh Tiwari"
    className="w-full h-[400px] sm:h-[550px] object-contain lg:scale-[1.5] lg:-scale-x-[1.5] scale-[1.8] -scale-x-[1.8] translate-x-[-10%] translate-y-[20%]"
  />
</motion.div>
        </div>
      </section>

<section className="py-16 px-4 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
   <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full md:w-1/2 order-2 md:order-1 overflow-hidden rounded-xl shadow-lg"
>
  <img
    src={maam}
    alt="Sushmita Tiwari"
    className="w-full h-[400px] sm:h-[550px] object-cover scale-[1.8] translate-y-[40%] -scale-x-[1.8]"
  />
</motion.div>


    {/* Text Section */}
    <div className="scale-110 w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl flex justify-center mb-6 pl-5 lg:pr-28">
                Sushmita Tiwari
              </h1>
     <div className="flex justify-center pl-5 lg:pr-28">
                <Link to="/about" className="about-btn">
                  <span>About</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
    </div>
  </div>
</section>


 

      {/* Image Slider Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-10">
            Our Sparkling <span className="text-[#2563EB]">GEMS</span>
          </h2>
          <ImageSlider />
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-3">
              Watch Our <span className="text-[#2563EB]">Demo</span>
            </h2>
            <p className="text-lg text-gray-600">See how we can help !</p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe width="100%"
              height="100%" src="https://www.youtube.com/embed/yB4iJwxS-NE?si=A1GkWvEQ5R0BDFLf"
               title="Demo Video" frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture
                clipboard-write;
                allowFullScreen encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                className="absolute inset-0 w-full h-full">
                  
                </iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl sm:xl font-bold mb-8">
            Get in touch today and take the first step toward your goals.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-md text-base sm:text-lg font-bold hover:bg-blue-50 transition"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
