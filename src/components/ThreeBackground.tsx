
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "./ThemeProvider";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 100, darkMode }) {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        ],
        scale: Math.random() * 0.5 + 0.1
      });
    }
    return temp;
  }, [count]);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.001;
      groupRef.current.rotation.y += 0.001;
    }
  });
  
  const dotColor = darkMode ? "#38bdf8" : "#0ea5e9";
  
  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshBasicMaterial color={dotColor} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function AnimatedGradient({ darkMode }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });
  
  // Create a custom gradient texture
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    const gradient = context.createLinearGradient(0, 0, 0, 256);
    
    if (darkMode) {
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.5, "#075985");
      gradient.addColorStop(1, "#0c4a6e");
    } else {
      gradient.addColorStop(0, "#f0f9ff");
      gradient.addColorStop(0.5, "#e0f2fe");
      gradient.addColorStop(1, "#7dd3fc");
    }
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, [darkMode]);
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={gradientTexture} />
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
        <Particles darkMode={darkMode} count={50} />
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
