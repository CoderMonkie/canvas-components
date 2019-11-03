# canvas-components

Canvas Components using react, supplies common canvas components, make it easier to draw canvas graphics.

# Installation

```
npm install canvas-components
```

# Usage

```
import React from 'react';
import { Canvas, Line, Rect } from 'canvas-components'

function App() {
    return (
        <Canvas>
            <Line from={{x: 190,y:20}} to={{x:290, y:130}} stroke='darkblue' shadow={{color:'#FF00FF', blur:2, offsetX:10,offsetY:0}}></Line>
            <Rect x='20' y='20' width='150' height='100' stroke='blue' fill='yellow' shadow={{color:'#00eeee', blur: 5, offsetX: 10, offsetY: 10}}></Rect>
        </Canvas>
    )
}
```

# API (v0.0.2)

- Arc
- Canvas
- Img
- Line
- Path
- Pie
- Rect
