import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/app/store';

const LandingAnimation: FC = () => {
  const { themes } = useSelector((state: RootState) => state.theme);

  return (
    <div className="">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1.1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial attach="material" color={themes === 'light' ? '#D6E4E5' : '#EEEEEE'} speed={1} />
        </Sphere>
      </Canvas>
    </div>
  );
};

export default LandingAnimation;
