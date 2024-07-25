import { MenuZone } from "./MenuZone";
import { SliderZone } from "./SliderZone";
import { TitleZone } from "./TitleZone";

export function TopArea({setLeftMenu}){
  return(
    <div id = "topArea">
    <TitleZone/>
    <MenuZone setLeftMenu={setLeftMenu}/>
    <SliderZone/>
    </div>
  );
}