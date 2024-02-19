import { FC } from 'react';
import Header from '../../common/Header';
import LandingShape from './LandingShape';
import LandingContainer from './LandingContainer';

const Landing: FC = () => {
  return (
    <section
      id="landing"
      className="relative w-full min-h-[1000px] flex flex-col items-center gap-24 bg-landing-light-bg dark:bg-landing-dark-bg"
    >
      <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden">
        <div className="bg-[url(../../assets/images/landing/)]"></div>
        <LandingShape />
      </div>
      <Header />
      <LandingContainer />
    </section>
  );
};

export default Landing;