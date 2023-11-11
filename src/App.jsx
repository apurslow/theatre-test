import { Canvas } from "@react-three/fiber";
import FantasyBook from "./modelComponents/FantasyBook";
import { OrbitControls } from "@react-three/drei";


function App() {


  return (
    <Canvas camera={{ fov: 75, near: 1, far: 1000, position: [7, 15, 60] }}>
      <color attach='background' args={['skyblue']} />
      <OrbitControls />
      <ambientLight intensity={0.75} />
      <FantasyBook />

    </Canvas>
  )
}

export default App
