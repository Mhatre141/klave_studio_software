"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Suppress THREE.Clock deprecation warnings triggered by React Three Fiber v9 internals
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      args[0] &&
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock")
    ) {
      return;
    }
    originalWarn(...args);
  };
}

function Particles({ count = 150 }) {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 22;
      const z = (Math.random() - 0.5) * 20 - 5;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      points.current.rotation.x = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#F59E0B"
        sizeAttenuation
        transparent
        opacity={0.3}
      />
    </points>
  );
}

function FloatingSpheres() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.children.forEach((child, index) => {
        const speed = 0.3 + index * 0.05;
        const time = state.clock.getElapsedTime() * speed;
        // Low gravity float inertia
        child.position.y += Math.sin(time + index) * 0.003;
        child.position.x += Math.cos(time + index) * 0.002;
        child.rotation.y += 0.005;
        child.rotation.x += 0.003;
      });
    }
  });

  return (
    <group ref={group}>
      {/* Matte Dark / Metallic Sphere */}
      <mesh position={[-6, 3, -4]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0.15}
          metalness={0.9}
          color="#1a1a1a"
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Chrome Sphere */}
      <mesh position={[6, -4, -3]}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0.05}
          metalness={0.95}
          color="#d1d5db"
          clearcoat={1.0}
        />
      </mesh>
      {/* Glass Amber Sphere */}
      <mesh position={[3.5, 4, -5]}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0.0}
          metalness={0.1}
          color="#f59e0b"
          transmission={0.8}
          thickness={0.5}
          ior={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-50 bg-[#070707] pointer-events-none" />;
  }

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-[#070707] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, 5]} intensity={0.6} color="#f59e0b" />
        <pointLight position={[0, 0, 12]} intensity={0.8} />
        <Particles count={200} />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
}
