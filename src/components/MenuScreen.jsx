import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import './MenuScreen.css';

// CORREÇÃO: Verifique se os nomes dos arquivos batem exatamente com a pasta
import backgroundMenuImage1 from '../assets/fotos_museu/5.JPG';
import backgroundMenuImage2 from '../assets/fotos_museu/8.JPG'; // Corrigido de .JP para .JPG

// Imports dos Logos
import logo from '../assets/logo_matrioska/Logo-Matrioska.png';
import logoAzul from '../assets/logo_site/Fundo_Azul.png';
import logoAzulBB from '../assets/logo_site/Fundo_AzulBB.png';
import logoLaranja from '../assets/logo_site/Fundo_Laranja.png';
import logoPreto from '../assets/logo_site/Fundo_Preto.png';
import logoSalmao from '../assets/logo_site/Fundo_Salmão.png';
import logoVermelho from '../assets/logo_site/Fundo_Vermelho.png';

function RotatingSphere() {
  // Garante que o array tenha apenas texturas válidas
  const textures = useTexture([backgroundMenuImage1, backgroundMenuImage2]);
  const sphereRef = useRef();
  const [activeTexture, setActiveTexture] = useState(textures[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textures.length);
    setActiveTexture(textures[randomIndex]);
  }, [textures]);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={activeTexture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function MenuScreen({ onStart, onMap, onCredits }) {
  // Lógica dos Logos Coloridos Aleatórios
  const siteLogos = [logoAzul, logoAzulBB, logoLaranja, logoPreto, logoSalmao, logoVermelho];
  const [activeSiteLogo, setActiveSiteLogo] = useState(null);

  useEffect(() => {
    const randomLogo = siteLogos[Math.floor(Math.random() * siteLogos.length)];
    setActiveSiteLogo(randomLogo);
  }, []);

  const handleStartWithPermission = async () => {
    // Tenta permissão para iOS (Giroscópio)
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        await DeviceOrientationEvent.requestPermission();
      } catch (e) {
        console.error(e);
      }
    }
    onStart();
  };

  return (
    <div className="menu-container">
      <div className="background-canvas">
        <Canvas camera={{ position: [0, 0, 0.1] }}>
           <RotatingSphere />
        </Canvas>
      </div>

      <div className="menu-overlay">
        <img src={logo} alt="Logo Museu" className="logo" />
        <div className="subtitle-container">
          <p>Experiência 360°: Museu Jacinto de Sousa</p>
        </div>
        
        <div className="menu-buttons">
          <button onClick={handleStartWithPermission}>Começar</button>
          <button onClick={onMap}>Mapa</button>
          <button onClick={onCredits}>Sobre</button>
        </div>
        
        <div className="footer-menu">
          <p>Em memória de Jacinto de Sousa</p>
        </div>

        {/* Lógica dos Logos no canto inferior direito */}
        {activeSiteLogo && (
          <div className="site-logo-container">
             <img src={activeSiteLogo} alt="Logo Colorido Site" />
          </div>
        )}
      </div>
    </div>
  );
}