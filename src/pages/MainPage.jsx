import Home from '../sections/Home/Home';
import Expertise from '../sections/Expertise/Expertise';
import Team from '../sections/Team/Team';
import Events from '../sections/Events/Events';
import About from '../sections/About/About';
import Testimonials from '../sections/Testimonials/Testimonials';
import Contact from '../sections/Contact/Contact';
// import Navbar from '../components/Navbar/Navbar';

function MainPage() {
    return (
        <>
            
            {/* <Navbar /> */}
            <Home />
            <Expertise />
            <Team />
            <Events />
            <About />
            <Testimonials />
            <Contact />
        </>
    );
}

export default MainPage;
