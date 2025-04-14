import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {/* Wrapping Routes with AnimatePresence to handle animation during page transitions */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial={{ y: -100, opacity: 0 }} // Starts from above
                    animate={{ y: 0, opacity: 1 }} // Final position at the center
                    exit={{ y: 100, opacity: 0 }} // Moves downward when exiting
                    transition={{ type: 'spring', stiffness: 50, damping: 25 }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 25 }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/appointment"
                element={
                  <motion.div
                    key="appointment"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 25 }}
                  >
                    <Appointment />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
