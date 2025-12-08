import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTexture, OrbitControls, DeviceOrientationControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import Hotspot from './Hotspot';

function Sphere({ textureUrl }) {
  if (!textureUrl) return null;
  const texture = useTexture(textureUrl);
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

// Componente de carregamento para não ficar tela cinza puro
function Loader() {
  return (
    <Html center>
      <div style={{ color: 'white', fontWeight: 'bold', textShadow: '0px 0px 4px black' }}>
        Carregando...
      </div>
    </Html>
  );
}

export default function Scene360({ imageUrl, hotspots = [], onNavigate, gyroEnabled }) {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      {/* Suspense protege contra tela cinza da morte */}
      <Suspense fallback={<Loader />}>
        <Sphere textureUrl={imageUrl} />
      </Suspense>

      {/* Lógica do Giroscópio */}
      {isMobile && gyroEnabled ? (
        <DeviceOrientationControls />
      ) : (
        <OrbitControls enableZoom={false} rotateSpeed={-0.5} />
      )}

      {hotspots.map((spot, index) => (
        <Hotspot
          key={index}
          position={spot.position}
          rotation={spot.rotation}
          onClick={() => onNavigate(spot.leadsTo)}
        />
      ))}
    </Canvas>
  );
}