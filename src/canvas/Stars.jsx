import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
`;

const getPointCount = () => {
  if (typeof window === "undefined") return 2200;
  return window.innerWidth < 768 ? 900 : 2200;
};

const Stars = (props) => {
  const ref = useRef();
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(getPointCount()), { radius: 1.2 }),
    []
  );

  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const dpr = useMemo(() => {
    if (typeof window === "undefined") return [1, 1.5];
    return window.devicePixelRatio > 1.5 ? [1, 1.5] : [1, 1.25];
  }, []);

  return (
    <Div>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={dpr}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </Div>
  );
};

export default StarsCanvas;
