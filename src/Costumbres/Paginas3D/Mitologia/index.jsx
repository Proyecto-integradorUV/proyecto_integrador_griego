import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [100, 100, 105]
}

root.render(
    <Canvas camera={cameraSettings} shadows={true}>
        <Experience />
    </Canvas>
)