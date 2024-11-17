
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import MainPage from './pages/MainPage';
import Expertise from './sections/Expertise/Expertise';
import Team from './sections/Team/Team';
import Events from './sections/Events/Events';
import About from './sections/About/About';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';
// import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                   
                    <Route path="/" element={<MainPage />} />

                    
                    <Route path="/expertise" element={<Expertise />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Fallback for any undefined paths */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
