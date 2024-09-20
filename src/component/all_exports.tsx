import Ruby from "./ruby/ruby";
import { basePath } from "../../next.config";
import { Front, KarmanVortexStreet, _3DWeatherChart } from "./all_displays/all_displays";

export const BASE_PATH = basePath ? basePath : "";

export const display_list = [
    {title: "前線", content: (<Front />)},
    {title: (<>カルマン<Ruby text="渦" ruby="うず" /></>), content: "/karman_vortex_street"},
    {title: "立体天気図", content: "/3d_weather_chart"},
    {title: (<>星座<Ruby text="模型" ruby="もけい" /></>), content: "/constellation_model"},
    {title: (<Ruby text="模型" ruby="もけい" />), content: "/model"},
    {title: "銀河電波", content: ""},
    {title: "太陽", content: ""},
    {title: "望遠鏡", content: "/telescope"},
    {title: (<Ruby text="竜巻" ruby="たつまき" />), content: "/tornado"},
    {title: "終わりに", content: "/finally"},
]

export const display_num = display_list.length;