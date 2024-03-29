import { FC } from 'react';
import Landing from './components/sections/Landing';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Products />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
