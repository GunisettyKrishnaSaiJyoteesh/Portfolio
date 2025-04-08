
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "./ThemeProvider";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 100, darkMode }) {
  const mesh = useRef();
  const particles = useRef([]);
  
  if (!particles.current.length) {
    for (let i = 0; i < count; i++) {
      particles.current.push({
        position: [
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        ],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.05 + 0.02
      });
    }
  }
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.y += 0.001;
    }
  });
  
  const dotColor = darkMode ? "#38bdf8" : "#0ea5e9";
  
  return (
    <group ref={mesh}>
      {particles.current.map((particle, i) => (
        <Sphere key={i} position={particle.position} args={[particle.scale, 8, 8]}>
          <meshBasicMaterial color={dotColor} transparent opacity={0.7} />
        </Sphere>
      ))}
    </group>
  );
}

function AnimatedGradient({ darkMode }) {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <mesh ref={mesh} position={[0, 0, -5]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <gradientTexture
          attach="map"
          stops={[0, 0.5, 1]}
          colors={darkMode 
            ? [new THREE.Color("#0f172a"), new THREE.Color("#075985"), new THREE.Color("#0c4a6e")] 
            : [new THREE.Color("#f0f9ff"), new THREE.Color("#e0f2fe"), new THREE.Color("#7dd3fc")]}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

export default function ThreeBackground({ className = "" }) {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  
  return (
    <div className={`absolute inset-0 -z-10 opacity-50 ${className}`}>
      <Canvas camera={{ position: [0, 0, 15], fov: 65 }}>
        <ambientLight intensity={0.5} />
        <AnimatedGradient darkMode={darkMode} />
        <Particles darkMode={darkMode} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
