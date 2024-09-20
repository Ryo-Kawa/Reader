import styles from "./all_displays.module.css";
import Ruby from "../ruby/ruby";
import Video from "../video/video";

export function Front() {
    return (
        <section>
            <p style={{paddingBottom: "20px"}} >&emsp;前線とは、<Ruby text="暖" ruby="あたた" />かい空気と冷たい空気が混ざらずにぶつかっている場所の境目のことで、降水や風向・風速の変化を<Ruby text="伴" ruby="ともな" />う、私たちの生活に大いに<Ruby text="影響" ruby="えいきょう" />を与えるものです。<Ruby text="梅雨" ruby="つゆ" />もこの前線のあるところで起こっています。
                <br />&emsp;この展示では、暖かい水と冷たい水をぶつけることで前線を再現しています。
                <br />&emsp;暖気が寒気の上にのし上がっていく<Ruby text="温暖" ruby="おんだん" />前線、寒気が暖気の上に潜り込んでいく寒冷前線の形を再現することができた一方、容器との<Ruby text="摩擦" ruby="まさつ" />の<Ruby text="影響" ruby="えいきょう" />が実際よりも大きいため、実際はどちらの前線もこの実験より<Ruby text="尖" ruby="とが" />った形になると考えられます。
            </p>
            <Video path="./video/front.mp4" title="前線の実験の様子" />
        </section>
    );
}

export function KarmanVortexStreet() {
    return (
        <section>
            <Video path="./video/karman_vortex_street.mp4" title="カルマン渦の実験の様子" />
        </section>
    );
}

export function _3DWeatherChart() {
    return (
        <section>
            <p>&emsp;立体天気図は、天気図が表すものをさらに視覚的に分かりやすくするために透明の弁当の蓋を用いて立体化し、気圧の高低を高さで表現したものを製作して展示しています。
                <br />&emsp;立体天気図では、気圧の低い部分が台風や低気圧の影響が及ぶ範囲が一目でわかります。また、等圧線は4hPaごとに書かれており、低気圧の周りは幅が狭く、傾きが急になっているので、ボールが急速に転がるように、風が強くなっていることがイメージしやすいと思います。
                <br />&emsp;立体天気図では立体として表していますが、気圧は地表で計測された気圧の値に基づく空気の重さを表す物で、高度を示す物ではありません。上空ほど気圧が高いわけではないという点に留意して見ていただけると幸いです。
                <br />&emsp;天気図にはいろいろな構成要素がありますが、それぞれ見る人にわかりやすく伝えるために工夫が施されています。普段の天気予報に出てくる天気図をいつもより少し真剣にみると面白いかもしれません。</p>
        </section>
    );
}

export function ConstellationModel() {
    return (
        <section>
            <p>Coming soon...</p>
        </section>
    );
}

export function Model() {
    return (
        <section>
            <p>Coming soon...</p>
        </section>  
    );
}

export function GalacticRadio() {
    return (
        <section>
            
        </section>
    );
}

export function SunObservation() {
    return (
        <section>

        </section>
    );
}