import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(2500 * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 12;
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
    const { x, y } = state.pointer;
    ref.current.rotation.y += x * delta * 0.1;
    ref.current.rotation.x += -y * delta * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#5fd0e0" size={0.018} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function FloatingOrb() {
  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#056777"
          emissive="#056777"
          emissiveIntensity={0.4}
          wireframe
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#5fd0e0" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#181739" />
          <ParticleField />
          <FloatingOrb />
        </Suspense>
      </Canvas>
    </div>
  );
}
