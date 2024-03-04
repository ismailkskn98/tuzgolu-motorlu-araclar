import { TypeAnimation } from 'react-type-animation';
import { FC } from 'react';

const LandingSloganAnimate: FC = () => {
  return (
    <TypeAnimation
      sequence={[100, 'Motorlu Araçlar', 2500, 'Yedek Parçalar', 2500]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="landing-title text-[40px] lg:text-6xl xl:text-8xl lg:text-left text-light-orange"
    />
  );
};

export default LandingSloganAnimate;