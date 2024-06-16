import React, { useEffect } from 'react'
import { useState} from 'react';
import styles from "./para.module.css";

const BlinkParagraph = () => {

    const paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    const words=paragraph.split(' ');
 

    const getRandomColor=()=>{
        const letters='0123456789ABCDEF';
        let color='#';   
        for(let i=0;i<6;i++){
            color+=letters[Math.floor(Math.random()*16)]
        }
        return color;
    }


    const [colors,setColors]=useState(words.map(()=>getRandomColor()));

    useEffect(()=>{
        const interval=setInterval(()=>{
            setColors(colors.map(()=>getRandomColor()));
        },1000);

        return ()=> clearInterval(interval);
    },[colors]);


  return (
    <div className={styles.main}>
        <p>{words.map((word,index)=>(
            <span key={index} style={{color:colors[index]}}>{word}{' '}</span>
        ))}</p>
    </div>
  )
}

export default BlinkParagraph;