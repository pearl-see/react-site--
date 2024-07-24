import "../st_style/BodyArea.css"
import { ContentsZone } from "./ContentsZone";
import { LeftMenuZone } from "./LeftMenuZone";


export function BodyArea(){
  return(
    <div id="bodyArea">
      <LeftMenuZone/>
      <ContentsZone/>

    </div>
  );
}