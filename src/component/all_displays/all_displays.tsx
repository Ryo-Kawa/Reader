import styles from "./all_displays.module.css";
import Ruby from "../ruby/ruby";
import Video from "../video/video";

export function Front() {
    return (
        <section>
            <p style={{paddingBottom: "20px"}} className={styles.paragraph}>&emsp;前線とは、<Ruby text="暖" ruby="あたた" />かい空気と冷たい空気が混ざらずにぶつかっている場所の境目のことで、降水や風向・風速の変化を<Ruby text="伴" ruby="ともな" />う、私たちの生活に大いに<Ruby text="影響" ruby="えいきょう" />を与えるものです。<Ruby text="梅雨" ruby="つゆ" />もこの前線のあるところで起こっています。
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

        </section>
    );
}

export function _3DWeatherChart() {

}