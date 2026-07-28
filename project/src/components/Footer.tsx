import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <style>
        {`
          /* Button and star animation from Uiverse.io by MuhammadHasann */
          .shiny-button {
            position: relative;
            padding:5px 10px 5px 10px;
            background: #1E3A8A;
            font-size: 17px;
            font-weight: 500;
            color: #ffffff;
            border: 3px solid #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 0 #fec1958c;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            display: inline-block;
          }

          .shiny-button:hover {
            background: black;
            color: #ffffff;
            box-shadow: 0 0 25px #ffffff;
            scale:1.3;
            
          }

          .star {
            position: absolute;
            height: auto;
            z-index: -5;
            filter: drop-shadow(0 0 0 #fffdef);
          }

          .star svg {
            width: 100%;
            height: auto;
          }

          .fil0 {
            fill: #fffdef;
          }

          .star-1 { top: 20%; left: 20%; width: 25px; transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96); }
          .star-2 { top: 45%; left: 45%; width: 15px; transition: all 1s cubic-bezier(0, 0.4, 0, 1.01); }
          .star-3 { top: 40%; left: 40%; width: 5px; transition: all 1s cubic-bezier(0, 0.4, 0, 1.01); }
          .star-4 { top: 20%; left: 40%; width: 8px; transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01); }
          .star-5 { top: 25%; left: 45%; width: 15px; transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01); }
          .star-6 { top: 5%; left: 50%; width: 5px; transition: all 0.8s ease; }

          .shiny-button:hover .star-1 { top: -80%; left: -30%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
          .shiny-button:hover .star-2 { top: -25%; left: 10%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
          .shiny-button:hover .star-3 { top: 55%; left: 25%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
          .shiny-button:hover .star-4 { top: 30%; left: 80%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
          .shiny-button:hover .star-5 { top: 25%; left: 115%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
          .shiny-button:hover .star-6 { top: 5%; left: 60%; filter: drop-shadow(0 0 10px #fffdef); z-index: 2; }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-[#1E3A8A] font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-10 w-10 mr-2" />
                <div className="flex flex-col underline">
                  <a href="tel:+919713660450">+91 97136 60450</a>
                  
                  <a href="tel:+919229441706">+91 92294 41706</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@minigems.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>840-R, Mahalaxmi Nagar, Indore, Madhya Pradesh 452010</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-[#1E3A8A] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="/about" className="w-fit hover:text-blue-400 transition-colors duration-300">
                  <pre className="font-sans">      About</pre>
                </a>
              </li>
             
              <li>
                <a href="/appointment" className="hover:text-blue-400 transition-colors duration-300">
                  <pre className="font-sans">      Contact</pre>
                </a>
              </li>
            </ul>
          </div>
        </div>

        
    </footer>
  );
};

export default Footer;
