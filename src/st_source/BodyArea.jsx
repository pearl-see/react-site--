import "../st_style/BodyArea.css"
import { ContentsZone } from "./ContentsZone";
import { LeftmenuZone } from "./LeftMenuZone";
import { LeftMenuZone_1 } from "./LeftMenuZone_1";
import { LeftMenuZone_2 } from "./LeftMenuZone_2";
import { LeftMenuZone_3 } from "./LeftMenuZone_3";
import { LeftMenuZone_4 } from "./LeftMenuZone_4";
import { LeftMenuZone_5 } from "./LeftMenuZone_5";
import { LeftMenuZone_6 } from "./LeftMenuZone_6";


export function BodyArea({leftMenu}){
  const leftMenuPage = ()=>{
    console.log('leftMenu =>'+ leftMenu);
    switch(leftMenu){
      case 1:
      return <LeftMenuZone_1/>;
      
      case 2:
      return <LeftMenuZone_2/>;
      
      case 3:
      return <LeftMenuZone_3/>;
    
      case 4:
      return <LeftMenuZone_4/>;
  
      case 5:
      return <LeftMenuZone_5/>;

      case 6:
      return <LeftMenuZone_6/>;
      default:
        return <LeftMenuZone_1/>;
    }
  };
  return(
    <div id="bodyArea">
      {/* <LeftmenuZone/> */}
      {leftMenuPage()}
      <ContentsZone/>

    </div>
  );
}