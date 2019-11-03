import React from 'react';
import './App.css';

import Canvas from '../../src/Canvas'
import Line from '../../src/Line'
import Rect from '../../src/Rect'
import Path from '../../src/Path'
import Arc from '../../src/Arc'
import Pie from '../../src/Pie'
import Img from '../../src/Img'

function App() {

  // Demo data for Pie
  let cx = 150, cy=120, r=100
  let circleCenter = {x:cx, y:cy}
  let data = [
    { name: 'React', share: 42, color: '#C2B', angle:{start:180,end:330} },
    { name: 'Vue', share: 33, color: '#FA0', angle:{start:330,end:450} },
    { name: 'Angular', share: 25, color: '#BFF', angle:{start:450,end:540} },
  ]

  return (
    <div className="App">
      <header className="App-header1">
        <h2>canvas-components demos</h2>
      </header>
      <article>
          <h3>1. 同一Canvas中不同图形分别带各自阴影样式</h3>
        <p>
          <Canvas>
            <Line from={{x: 190,y:20}} to={{x:290, y:130}} stroke='darkblue' shadow={{color:'#FF00FF', blur:2, offsetX:10,offsetY:0}}></Line>
            <Rect x='20' y='20' width='150' height='100' stroke='blue' fill='yellow' shadow={{color:'#00eeee', blur: 5, offsetX: 10, offsetY: 10}}></Rect>
          </Canvas>
        </p>
        <h3>2. 带阴影的Line与Arc</h3>
        <p>
          <Canvas width={500} height={220}>
            <Path>
              <Line from={{x: 50,y:50}} to={{x:150, y:150}} stroke='green' shadow={{color:'orange', blur:1,offsetX:20,offsetY:0}}></Line>
              <Line from={{x: 50,y:150}} to={{x:150, y:50}} stroke='blue' shadow={{color: 'pink',blur:1, offsetX:20,offsetY:0}}></Line>
              <Arc cx={200} cy={180} radius={150} startAngle={270} endAngle={360} stroke={'orange'} shadow={{color:'gray', blur:2,offsetX:10,offsetY:-10}}></Arc>
            </Path>
          </Canvas>
        </p>

        <h3>3. 画一个饼图</h3>
        <p>
          <Canvas width={500} height={300}>
            {
              data.map((item,index)=>{
                return (
                  <Pie key={index+item} angle={item.angle} radius={r} center={circleCenter} stroke='#FF0000' fill={item.color}></Pie>
                )
              })
            }
          </Canvas>
        </p>

        <h3>4. 显示图片</h3>
        <div>
          <ul>
            <li>显示原始图片<br/>
              <Canvas width={800} height={600}>
                <Img src='/examples/src/clover.png'></Img>
              </Canvas>
            </li>
            <li>图片拉伸(stretch='fill')+灰化(filter='gray/yellow/blackWhite' or function)滤镜效果<br/>
              <Canvas width={400} height={300}>
                <Img src='/examples/src/clover.png' stretch='fill' filter='gray'></Img>
              </Canvas>
            </li>
          </ul>
        </div>
      </article>
      <footer className="App-footer">@CopyRight CoderMonkie 2019</footer>
    </div>
  );
}

export default App;
