import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import FantasyBook from "./modelComponents/FantasyBook";



function App() {

  const sheet = getProject('Fly Through').sheet('Scene')


  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  )
}

export default App


///
///
function Scene() {

  const sheet = useCurrentSheet()
  const scroll = useScroll()

  //our callback will run on every animation frame
  useFrame(() => {

    //the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length)

    //update the "position" of trhe playhead in the  sequence as a fraction of the whole length
    sheet.sequence.position = scroll.offset * sequenceLength

  })
  return (
    <>
      <color attach='background' args={['skyblue']} />
      <ambientLight intensity={0.75} />
      <FantasyBook />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 5]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  )
}
