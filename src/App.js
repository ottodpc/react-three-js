import "./styles.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./components/Iphone";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          {/* <Box /> */}
          <Model />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;
