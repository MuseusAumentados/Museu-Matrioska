import React, { useState, useMemo } from 'react';
import { useCursor } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

// Componente de Seta criado com geometria, sem usar imagens
export default function Hotspot({ position, rotation, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  useCursor(isHovered);

  // Animação para a seta "pulsar" ou aumentar de tamanho ao passar o mouse
  const { scale } = useSpring({
    scale: isHovered ? 1.2 : 1,
    config: { tension: 400, friction: 30 },
  });

  // Criamos a forma da seta usando um caminho (Shape) do Three.js
  // Isso é feito uma vez e memorizado para melhor performance
  const arrowShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 0.8;
    const headLength = 0.7;
    const headWidth = 1.2;
    
    // Desenha o corpo da seta
    shape.moveTo(-width / 2, 0);
    shape.lineTo(width / 2, 0);
    
    // Desenha a ponta da seta
    shape.lineTo(width / 2, -headLength);
    shape.lineTo(headWidth / 2, -headLength);
    shape.lineTo(0, -headLength * 2); // Ponta da flecha
    shape.lineTo(-headWidth / 2, -headLength);
    shape.lineTo(-width / 2, -headLength);
    shape.lineTo(-width / 2, 0);

    return shape;
  }, []);

  return (
    <a.group
      position={position}
      rotation={rotation} // Controla a direção (para onde a seta aponta)
      onClick={onClick}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      scale={scale}
    >
      {/* A malha (mesh) que contém a geometria da seta */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}> {/* Deita a seta no chão */}
        <shapeGeometry args={[arrowShape]} />
        <meshBasicMaterial 
          color="white" 
          transparent 
          opacity={0.85} 
          side={THREE.DoubleSide} 
        />
      </mesh>
    </a.group>
  );
}