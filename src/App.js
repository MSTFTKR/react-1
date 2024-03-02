import logo from './logo.svg';
// import './App.css';
import { useState,useEffect } from 'react';

function App() {
  useEffect(()=>{
    if(count===15){
      alert(`Max Sayaç Sayısına Ulaştın: Sayaç:${count}`)
    }
    else if(count===-15){
      alert(`Min Sayaç Sayısına Ulaştın: Sayaç:${count}`)
    }



  })
  const [count,setCount]=useState(0)

  return (


    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
        <h1>SAYAÇS</h1>
          <h1>Sayaç:{count}</h1>
          <button style={{width:"100px"}} onClick={()=>{if(count<15)setCount(count+1)}}>Arttır </button>
          <button style={{width:"100px"}}  onClick={()=>{if(count>-15)setCount(count-1)}}>Azalt</button>


    </div>
  );
}

export default App;
