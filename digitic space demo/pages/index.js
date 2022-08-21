import Home from '../components/Home';
import MainNav from '../components/MainNav';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import AboutUs from '../components/AboutUs';

const home = () => {
  return (
    <>
      <MainNav />
      <Home />
      <Features />
      <Pricing />
      <AboutUs />
    </>
  );
};

export default home;
