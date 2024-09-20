import Ruby from "./ruby/ruby";
import { basePath } from "../../next.config";
import { Front, KarmanVortexStreet, _3DWeatherChart, ConstellationModel, Model, GalacticRadio } from "./all_displays/all_displays";

export const BASE_PATH = basePath ? basePath : "";

export const display_list = [
    {title: "前線", content: (<Front />)},
    {title: (<>カルマン<Ruby text="渦" ruby="うず" /></>), content: (<KarmanVortexStreet />)},
    {title: "立体天気図", content: <_3DWeatherChart />},
    {title: (<>星座<Ruby text="模型" ruby="もけい" /></>), content: (<ConstellationModel />)},
    {title: (<Ruby text="模型" ruby="もけい" />), content: (<Model />)},
    {title: "銀河電波", content: <GalacticRadio />},
    {title: "太陽観測", content: ""},
    {title: "望遠鏡", content: "/telescope"},
    {title: (<Ruby text="竜巻" ruby="たつまき" />), content: "/tornado"},
    {title: "終わりに", content: "/finally"},
]

export const display_num = display_list.length;