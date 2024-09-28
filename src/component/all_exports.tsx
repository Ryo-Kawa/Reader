import Ruby from "./ruby/ruby";
import { basePath } from "../../next.config";
import { Front, KarmanVortexStreet, _3DWeatherChart, ConstellationModel, Model, GalacticRadio, SunObservation, Telescope,Tornado, Finally } from "./all_displays/all_displays";

export const BASE_PATH = basePath ? basePath : "";

export const display_list = [
    {title: "前線", content: (<Front />)},
    {title: (<>カルマン<Ruby text="渦" ruby="うず" /></>), content: (<KarmanVortexStreet />)},
    {title: "立体天気図", content: <_3DWeatherChart />},
    {title: "星座模型", content: (<ConstellationModel />)},
    {title: "模型", content: (<Model />)},
    {title: "銀河電波", content: <GalacticRadio />},
    {title: "太陽観測", content: <SunObservation />},
    {title: "望遠鏡", content: <Telescope />},
    {title: (<Ruby text="竜巻" ruby="たつまき" />), content: <Tornado />},
    {title: "終わりに", content: <Finally />},
]

export const display_num = display_list.length;