import "../st_style/LeftMenuZone.css"

export function LeftMenuZone_1(){
  return(
    <div id="leftmenuZone">
    <div id="left_menu_box">
        <span className="left_menu_title">캠핑장소개</span>
        <ul>
            <li className="left_menu"><a href="#">인사말</a></li>
            <li className="left_menu"><a href="#">시설소개</a></li>
            <li className="left_menu"><a href="#">오시는길</a></li>
        </ul>
    </div>
    <div id="left_banner_box">
        <span className="left_banner_title">고객센터</span>
        <ul>
            <li className="left_banner">010-1234-1515</li>
            <li className="left_banner">농혐 000-00-00000<br/>홍길동</li>
        </ul>
    </div>
</div>
  );
}