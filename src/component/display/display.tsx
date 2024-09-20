"use client";

import Footer from "./footer/footer";
import { display_list } from "@/component/all_exports";

export default function Display({ index }: { index: number }) {
    return (
        <div>
            <h1>{display_list[index].title}</h1>
            <audio src={`./audio/display/${index}.mp3`} controls></audio>
            {display_list[index].content}
            <footer>
                <Footer index={index} />
            </footer>
        </div>
    );
}