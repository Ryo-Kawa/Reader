import Collapsible from "./components/collapsible";

export default function Home() {
  return (
    <main>
      <h1>開成学園天文気象部 音声読み上げ機能</h1>
      <Collapsible header="説明1" file="1.mp3"/>
      <Collapsible header="説明2" file="2.mp3"/>
    </main>
  );
}