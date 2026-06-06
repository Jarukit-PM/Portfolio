"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Environment,
  Float,
  Sparkles,
  Stars,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { getImagePath } from "@/app/lib/utils";

type HeroSceneProps = {
  reducedMotion?: boolean;
};

const ACCENT = "#ef4444";
const ACCENT_SOFT = "#f87171";
const MODEL_URL = getImagePath("/models/helmet.glb");

/**
 * Showcase glTF model (Khronos "Damaged Helmet"). It is auto-centered and
 * normalized to a consistent on-screen size, then gently floats and spins.
 */
function ShowcaseModel({ reducedMotion }: { reducedMotion?: boolean }) {
  const spin = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  const { object, scale } = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    cloned.position.sub(center); // re-center on origin
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return { object: cloned, scale: 3.4 / maxDim };
  }, [scene]);

  useFrame((_, delta) => {
    if (!spin.current || reducedMotion) return;
    spin.current.rotation.y += delta * 0.25;
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.1}
      rotationIntensity={0.35}
      floatIntensity={1.2}
      position={[2.8, 0.4, 0.5]}
    >
      <group ref={spin} rotation={[0.15, -0.5, 0]}>
        <group scale={scale}>
          <primitive object={object} />
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload(MODEL_URL);

/** Slow parallax group that subtly follows the pointer. */
function ParallaxRig({
  children,
  reducedMotion,
}: {
  children: React.ReactNode;
  reducedMotion?: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.28;
    // Frame-rate independent smoothing toward the pointer target.
    const lerp = 1 - Math.pow(0.001, delta);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      lerp,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      lerp,
    );
  });

  return <group ref={group}>{children}</group>;
}

/** A drifting dust/particle field built from a raw buffer geometry. */
function DustField({ reducedMotion }: { reducedMotion?: boolean }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!points.current || reducedMotion) return;
    points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={ACCENT_SOFT}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene({ reducedMotion }: HeroSceneProps) {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 24]} />

      {/* image-based lighting gives the PBR model crisp reflections */}
      <Environment preset="city" environmentIntensity={0.9} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#ffffff" />
      <pointLight position={[-6, -2, -4]} intensity={2.6} color={ACCENT_SOFT} />
      <pointLight position={[6, 4, 2]} intensity={1.8} color={ACCENT} />
      <spotLight
        position={[6, 6, 6]}
        angle={0.5}
        penumbra={0.8}
        intensity={3.5}
        color="#ffffff"
      />

      <Stars
        radius={60}
        depth={40}
        count={2200}
        factor={4}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.6}
      />

      <ParallaxRig reducedMotion={reducedMotion}>
        <DustField reducedMotion={reducedMotion} />

        <ShowcaseModel reducedMotion={reducedMotion} />

        <Sparkles
          count={60}
          scale={[12, 6, 6]}
          size={2.6}
          speed={reducedMotion ? 0 : 0.4}
          opacity={0.7}
          color={ACCENT_SOFT}
        />
      </ParallaxRig>

      <AdaptiveDpr pixelated />
    </>
  );
}
