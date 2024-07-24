import { MenuZone } from "./MenuZone";
import { SliderZone } from "./SliderZone";
import { TitleZone } from "./TitleZone";

export function TopArea(){
  return(
    <div id = "topArea">
    <TitleZone/>
    <MenuZone/>
    <SliderZone/>
    </div>
  );
}