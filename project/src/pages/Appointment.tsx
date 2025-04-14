import { MapPin } from 'lucide-react';
import { Mail, Phone } from "lucide-react";
const Appointment = () => {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 font-serif">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Take the first step towards progress.
          </p>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form first on all devices */}
            <div className="order-1 md:order-1 bg-gray-50 p-8 rounded-lg shadow-lg">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeGlZrcRRSbgl4EiIuKMiSp848drn4yMoV6GoEnTli_dHPHRQ/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>

              {/* 📞 Call Us Section */}
              <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800">Or Call Us At</h2>
                <a
                  href="tel:+919876543210"
                  className="text-blue-600 text-lg flex justify-center items-center hover:underline mt-2"
                >
                  <Phone className="h-10 w-10 mr-2" />
                 <div className="flex flex-col underline">
                  <a href="tel:+919713660450">+91 97136 60450</a>
                  
                  <a href="tel:+919229441706">+91 92294 41706</a>
                </div>
                <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" w-10 h-10 ml-4"
          fill="#16A34A"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
                </a>
              </div>
            </div>

            {/* Map second on all devices */}
            <div className="order-2 md:order-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-gray-600">
                    840-R, Mahalaxmi Nagar, Indore,<br />
                    Madhya Pradesh <br />
                    452010
                  </p>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1688211731157!2d75.91470620000004!3d22.7591153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d5bb5f08feb%3A0xe6e53edd4448acca!2sMini%20Gems%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1744553500643!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
