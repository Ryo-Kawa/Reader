import { Cloud } from "./cloud";

export default function MeteorologyPage() {
    return (
        <div>
            <Cloud experience="竜巻" top="100px" left="100px" />
            <Cloud experience="前線" top="100px" left="1000px" />
            <Cloud experience="カルマン渦" top="500px" left="600px" />
        </div>
    );
}