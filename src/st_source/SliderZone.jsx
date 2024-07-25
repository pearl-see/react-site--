import { useState,useEffect } from "react";
import "../st_style/SliderZone.css"
import left_btnImg from '../img/left_btn.png';
import right_btnImg from '../img/right_btn.png';
import slider1 from '../img/1.jpg';
import slider2 from '../img/2.jpg';
import slider3 from '../img/3.jpg';

export function SliderZone(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliders = [slider1,slider2,slider3];
  const handleArrowClick=(direction) =>{
    let _index= currentIndex + direction;
    if (_index<0){_index = 0;}else if(_index>sliders.length-1){_index = sliders.length-1}
  setCurrentIndex(_index);
  }
  //자동으로 움직여봅시다
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((idx)=>(idx+1)% sliders.length)
  },3000);
  return()=>clearInterval(interval);
  },[sliders.length]);
  return(
    <div id="sliderZone">
                <div id="sub_photo_bg">
                    <ul className="slider_panel"
                    style={{left:`-${currentIndex*100}%`}}>
                      {/* /* 슬라이스를 왼쪽으로 100%씩 움직인다 ex) 1번 슬라이스 = 0*100 = 0% 면 2번 슬라이스는 1*100 = 100%가 되어
                      왼쪽으로 100%만큼 움직임 */ 
                      sliders.map(
                            (slider,index)=>(
                              <li key={index} className="slider_image"><img src={slider} alt="" /></li>
                             ) //이미지를 단순하게 정리, key는 반복할 때 필요함요
                          )}
                      
                    </ul>
                    <div className="control_panel">
                       {
                        sliders.map((slider,index)=>{
                          return(
                            <div className={`control_btn ${currentIndex === index? 'active':''}`} onClick={()=>{setCurrentIndex(index);}}/>
                          )
                        })
                       }
                    </div>
                    <div className="direct_btn">
                        <div className="left_btn" onClick={()=>handleArrowClick(-1)}><img src={left_btnImg} alt=""/></div>
                        <div className="right_btn" onClick={()=>handleArrowClick(+1)}><img src={right_btnImg} alt=""/></div>
                    </div>
                </div>
            </div>
  );
}