import React, { Suspense, useEffect, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { VRCanvas, DefaultXRControllers, Hands } from "@react-three/xr";
import { useTexture } from "@react-three/drei";
import EquirectPng from "./diff.png";
import "./styles.css";

const Xr = () => {
  const Panorama = () => {
    const equirectTexure = useTexture(EquirectPng);
    const gRef = useRef();

    useEffect(() => {
      gRef.current.scale(-1, 1, 1);
    }, []);

    return (
      <mesh>
        <sphereGeometry args={[500, 60, 40]} ref={gRef} />
        <meshStandardMaterial map={equirectTexure} />
      </mesh>
    );
  };
  return (
    <div style={{ height: "100vh" }}>
      <VRCanvas>
        <Suspense fallback={null}>
          <Hands />
          <OrbitControls />
          <ambientLight />
          <Panorama />
          <DefaultXRControllers />
        </Suspense>
      </VRCanvas>
    </div>
  );
};

export default Xr;
