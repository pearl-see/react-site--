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
  return(
    <div id="sliderZone">
                <div id="sub_photo_bg">
                    <ul className="slider_panel"
                    style={{left:`-${currentIndex*100}%`}}>
                      {/* 슬라이스를 왼쪽으로 100%씩 움직인다 ex) 1번 슬라이스 = 0*100 = 0% 면 2번 슬라이스는 1*100 = 100%가 되어
                      왼쪽으로 100%만큼 움직임 */}
                        <li className="slider_image"><img src={slider1} alt=""/></li>
                        <li className="slider_image"><img src={slider2} alt=""/></li>
                        <li className="slider_image"><img src={slider3} alt=""/></li>
                         {/* <li className="slider_image"><img src="img/1.jpg" alt=""></li>
                        <li className="slider_image"><img src="img/2.jpg" alt=""></li>
                        <li className="slider_image"><img src="img/3.jpg" alt=""/></li> */}
                    </ul>
                    <div className="control_panel">
                        <div className="control_btn active"  data-index="0"></div>
                        <div className="control_btn" data-index="1"></div>
                        <div className="control_btn" data-index="2"></div>
                    </div>
                    <div className="direct_btn">
                        <div className="left_btn" onClick={()=>handleArrowClick(-1)}><img src={left_btnImg} alt=""/></div>
                        <div className="right_btn" onClick={()=>handleArrowClick(+1)}><img src={right_btnImg} alt=""/></div>
                    </div>
                </div>
            </div>
  );
}