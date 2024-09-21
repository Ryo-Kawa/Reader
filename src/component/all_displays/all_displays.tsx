import styles from "./all_displays.module.css";
import Ruby from "../ruby/ruby";
import Video from "../video/video";
import _Image from "../image/image";

export function Front() {
    return (
        <section>
            <p className={styles.paragraph} >&emsp;前線とは、暖かい空気と冷たい空気が混ざらずにぶつかっている場所の境目のことで、降水や風向・風速の変化を<Ruby text="伴" ruby="ともな" />う、私たちの生活に大いに<Ruby text="影響" ruby="えいきょう" />を与えるものです。<Ruby text="梅雨" ruby="つゆ" />もこの前線のあるところで起こっています。
                <br />&emsp;この展示では、暖かい水と冷たい水をぶつけることで前線を再現しています。
                <br />&emsp;暖気が寒気の上にのし上がっていく温暖前線、寒気が暖気の上に潜り込んでいく寒冷前線の形を再現することができた一方、容器との<Ruby text="摩擦" ruby="まさつ" />の<Ruby text="影響" ruby="えいきょう" />が実際よりも大きいため、実際はどちらの前線もこの実験より<Ruby text="尖" ruby="とが" />った形になると考えられます。
            </p>
            <Video path="./video/front.mp4" title="前線の実験の様子" />
            <_Image path="./image/front.webp" title="前線の模造紙" />
        </section>
    );
}

export function KarmanVortexStreet() {
    return (
        <section>
            <Video path="./video/karman_vortex_street.mp4" title={(<>カルマン<Ruby text="渦" ruby="うず" />の実験の様子</>)} />
            <p>&emsp;カルマン渦とは、空気の流れの中に障害物があるときに、障害物の後方に<Ruby text="渦" ruby="うず" />ができる現象です。<Ruby text="縄跳" ruby="なわと" />びの「ヒュンッ」やバットの「ヒュッ」という風切り音などもこの現象によるものです。空気の流れの中に障害物があると、その障害物の後ろは周りと比べると空気の流れの速さが<Ruby text="遅" ruby="おそ" />くなるので、周りの空気が障害物の後ろに回り込むように入ってくるので、その流れが<Ruby text="渦上" ruby="かじょう" />に見えます。
                <br />&emsp;この展示では、カルマン<Ruby text="渦" ruby="うず" />を実際に目視で見ることができる冬の<Ruby text="韓国" ruby="かんこく" />の沖合のチェジュ島と呼ばれる島の後方で見られるカルマン<Ruby text="渦" ruby="うず" />を参考にし、実際に<Ruby text="渦" ruby="うず" />になる様子を展示で実演しています。
            </p>
            <_Image path="./image/karman_vortex_street.webp" title={(<>カルマン<Ruby text="渦" ruby="うず" />の模造紙</>)} />
        </section>
    );
}

export function _3DWeatherChart() {
    return (
        <section>
            <p className={styles.paragraph} >&emsp;立体天気図は、天気図が表すものをさらに視覚的に分かりやすくするために<Ruby text="透明" ruby="とうめい" />の弁当の<Ruby text="蓋" ruby="ふた" />を用いて立体化し、気圧の高低を高さで表現したものを製作して展示しています。
                <br />&emsp;立体天気図では、気圧の低い部分が台風や低気圧の<Ruby text="影響" ruby="えいきょう" />が及ぶ<Ruby text="範囲" ruby="はんい" />が一目でわかります。また、等圧線は4hPaごとに書かれており、低気圧の周りは<Ruby text="幅" ruby="はば" />が<Ruby text="狭" ruby="せま" />く、<Ruby text="傾" ruby="かたむ" />きが急になっているので、ボールが急速に転がるように、風が強くなっていることがイメージしやすいと思います。
                <br />&emsp;立体天気図では立体として表していますが、気圧は地表で計測された気圧の値に基づく空気の重さを表す物で、高度を示す物ではありません。上空ほど気圧が高いわけではないという点に留意して見ていただけると幸いです。
                <br />&emsp;天気図にはいろいろな構成要素がありますが、それぞれ見る人にわかりやすく伝えるために工夫が<Ruby text="施" ruby="ほどこ" />されています。<Ruby text="普段" ruby="ふだん" />の天気予報に出てくる天気図をいつもより少し<Ruby text="真剣" ruby="しんけん" />にみると面白いかもしれません。
            </p>
            <_Image path="./image/3d_weather_chart_picture.webp" title="実際の立体天気図" />
            <_Image path="./image/3d_weather_chart.webp" title="立体天気図の模造紙" />
        </section>
    );
}

export function ConstellationModel() {
    return (
        <section>
            <p>&emsp;Coming soon...</p>
            <_Image path="./image/constellation_model1.webp" title="星座模型の模造紙 1ページ目" />
            <_Image path="./image/constellation_model2.webp" title="星座模型の模造紙 2ページ目" />
            <_Image path="./image/constellation_model3.webp" title="星座模型の模造紙 3ページ目" />
        </section>
    );
}

export function Model() {
    return (
        <section>
            <p>&emsp;今年の天文気象部の模型の展示ではH-IIAロケット47号機の1/33模型を作成しました。H-IIAロケットは、日本の人工衛星打ち上げ用液体燃料ロケットで、人工衛星の打ち上げを2001年から担っています。H-IIAロケットは2024年の50号機の打ち上げを最後に退役予定となっており、それ以降はH3ロケットに引き<Ruby text="継" ruby="つ" />がれる予定です。特に47号機はSLIMなどの多数の衛星を打ち上げ日本の宇宙産業に<Ruby text="貢献" ruby="こうけん" />しました。
                <br />&emsp;模型の特に力を入れた部分について<Ruby text="紹介" ruby="しょうかい" />します。今回の模型は実際のロケットが大きいことから、全長161cmと大きな模型となりました。できるだけホンモノに近づけるため縮尺比をほとんど変えずロケットの配管や発射台からの接続部まで細かい部分や、ロケットの細かな色の違い、実物の表面の<Ruby text="荒" ruby="あら" />さは模型の素材の特性を使い、<Ruby text="塗装" ruby="とそう" />されているマークや給油口はシールを<Ruby text="貼" ruby="は" />って再現しました。
                <br />&emsp;また、強度の関係で文化祭間近に<Ruby text="壊" ruby="こわ" />れるというハプニングもあり最後まで<Ruby text="波乱万丈" ruby="はらんばんじょう" />でしたが、個人的にはとても良い出来になったと思います。ぜひ実際のH-IIAロケット47号機の写真と比べながら見てみてください。
            </p>
            <_Image path="./image/model.webp" title="模型の模造紙" />
        </section>  
    );
}

export function GalacticRadio() {
    return (
        <section>
            <p className={styles.paragraph} >&emsp;我々がいる天の川銀河からは、私たちが見ている可視光だけでなく目に見えない電波というものを発しています。さらに、天の川銀河は回転しているため、その電波の周波数もドップラー効果によって変わるはずです。そこで今回私たちは、事前に国立天文台などの天文家の方々からアドバイスをいただき、自分たちの手で天の川からの電波をパラボラアンテナで受信し、その周波数を調べることで天の川銀河が本当に回転しているのかどうかを検証することにしました。
                <br />&emsp;具体的には、21cm線(周波数1420.40575MHz) という種類の電波を受信します。
            </p>
            <_Image path="./image/galactic_radio_picture.webp" title="観測の様子" />
            <p className={styles.paragraph} >&emsp;観測の結果、見事銀河から出たと思われる仮説通りの電波(周波数約1420MHz)を受信することができました。また、受信した電波の周波数からドップラー効果を考えると、天の川銀河は地球の北極側から見て 時計回りに回転していることがわかり、全ての検証に成功しました。<Ruby text="詳" ruby="くわ" />しくは観測データや天の川銀河の構造を示した図をご覧ください。</p>
            <_Image path="./image/galactic_radio_figure.webp" title="天の川銀河の構造" />
            <_Image path="./image/galactic_radio_data1.webp" title="観測データ１" />
            <_Image path="./image/galactic_radio_data2.webp" title="観測データ２" />
            <_Image path="./image/galactic_radio_data3.webp" title="観測データ３" />
            <_Image path="./image/galactic_radio_data4.webp" title="観測データ４" />
            <_Image path="./image/galactic_radio_data5.webp" title="観測データ５" />
            <_Image path="./image/galactic_radio_data6.webp" title="観測データ６" />
            <p>&emsp;今後の展望として、<Ruby text="解析" ruby="かいせき" />を進めて具体的な数値を求めたり、学校内でも新しいデータを得ようと考えています。</p>
            <_Image path="./image/galactic_radio1.webp" title="銀河電波の模造紙 1ページ目" />
            <_Image path="./image/galactic_radio2.webp" title="銀河電波の模造紙 2ページ目" />
            <_Image path="./image/galactic_radio3.webp" title="銀河電波の模造紙 3ページ目" />
        </section>
    );
}

export function SunObservation() {
    return (
        <section>
            <p className={styles.paragraph} >&emsp;私たちは、晴れた日に毎日高校<Ruby text="棟" ruby="とう" />屋上のドームで太陽観測を行っています。 
                <br />&emsp;まず、望遠鏡で太陽を<Ruby text="投影" ruby="とうえい" />し、黒点・<Ruby text="白斑" ruby="はくはん" />をスケッチします。次に、望遠鏡にカメラを接続して太陽の写真を<Ruby text="撮影" ruby="さつえい" />します。最後に、Hα線という<Ruby text="特殊" ruby="とくしゅ" />な光のみを通す望遠鏡にC-MOSカメラをつけてプロミネンス・ダークフィラメント・<Ruby text="彩層" ruby="さいそう" />の<Ruby text="撮影" ruby="さつえい" />を行います。実際の観測データも併せてご覧ください。
            </p>
            <_Image path="./image/sun_observation_sketch.webp" title="実際のスケッチ" />
            <_Image path="./image/sun_observation_picture.webp" title={(<>2024年8月10日に<Ruby text="撮影" ruby="さつえい" />された太陽(iso400 <Ruby text="露出" ruby="ろしゅつ" />1/90s)</>)} />
            <_Image path="./image/sun_observation_prominence.webp" title={(<>2023年11月22日<Ruby text="撮影" ruby="さつえい" /> プロミネンスの様子</>)} />
            <_Image path="./image/sun_observation_dark_filament.webp" title={(<>同日<Ruby text="撮影" ruby="さつえい" /> ダークフィラメントの様子</>)} />
            <p className={styles.paragraph} >&emsp;また、展示のタイムラプスビデオは、カメラ観測で得た1月13日から8月23日までの太陽の写真を<Ruby text="繋" ruby="つな" />ぎ合わせたものです。実は太陽も地球と同じように自転しており、それによる黒点の動きがよくわかると思いますので、ぜひ注目してご覧ください。</p>
            <Video path="./video/timelapse.mp4" title="タイムラプス" />
            <_Image path="./image/sun_observation1.webp" title="太陽観測の模造紙 1ページ目" />
            <_Image path="./image/sun_observation2.webp" title="太陽観測の模造紙 2ページ目" />
        </section>
    );
}

export function Telescope() {
    return (
        <_Image path="./image/telescope.webp" title="望遠鏡の模造紙" />
    );
}

export function Tornado() {
    return (
        <section>
            <_Image path="./image/tornado.webp" title={(<><Ruby text="竜巻" ruby="たつまき"/>の実験器具</>)} />
            <p className={styles.paragraph} >&emsp;この装置は下のブロワーから風を送り出し、八本のパイプに空気が送り込まれます。このパイプには同じ角度に穴が空いていて、そこから空気が放出されます。これらがぶつかり合うことで<Ruby text="渦" ruby="うず" />が出来ます。これが上についてあるサーキュレーターの上昇気流により引き延ばされます。
                <br />&emsp;これは（非スーパーセル）<Ruby text="竜巻" ruby="たつまき" />における地表付近の<Ruby text="渦" ruby="うず" />を再現しています。
                <br />&emsp;装置の上のサーキュレーターが空気を吸い上げ、これは積乱雲による上昇気流を再現しています。
                <br />&emsp;また、手で<Ruby text="桶" ruby="おけ" />を下げていることで、<Ruby text="竜巻" ruby="たつまき" />が引き<Ruby text="伸" ruby="の" />ばされていることを再現しています。
                <br />&emsp;一方、パイプで人工的に渦を作っていることが実際とは異なります。
                <br />&emsp;また、<Ruby text="桶" ruby="おけ" />を動かしていることは、実際の<Ruby text="竜巻" ruby="たつまき" />では地面が動くこととなり、そこも異なる点です。
                <br />&emsp;また、<Ruby text="竜巻" ruby="たつまき" />は移動しますが、この実験では移動しません。
            </p>
            <Video path="./video/tornado.mp4" title={(<><Ruby text="竜巻" ruby="たつまき"/>の実験の様子</>)} />
            <_Image path="./image/tornado.webp" title={(<><Ruby text="竜巻" ruby="たつまき" />の模造紙</>)} />
        </section>
    );
}

export function Finally() {
    return (
        <section>
            <p>&emsp;最後までご覧いただきありがとうございました。
                <br />&emsp;もしよろしければ、参団グランプリに投票してくれると幸いです。投票場所は２つ下のB<Ruby text="棟" ruby="とう" />１階にあります。
                <br />&emsp;また、コメントの送信は<a href="https://docs.google.com/forms/d/e/1FAIpQLSc_PUmAJzD7k6CzKiXGOr6RrGRJsSO_x2Z7rZxUHo7sbmfPbQ/viewform?usp=sf_link">こちら</a>から、オンラインの部誌の閲覧は<a href="https://drive.google.com/file/d/1SZyjIK-c53WSN8EaBqHOhJbgEJKxxX1g/view?usp=drivesdk">こちら</a>からできます。
            </p>
        </section>
    )
}
