"use client";

import { ReactElement } from "react";
import { display_list } from "@/components/home";

export default function Display({ index, content }: { index: number, content: ReactElement }) {
    return (
        <section>
            <h1>{display_list[index].title}</h1>
            <audio src={`./audio/display/${index}.mp3`} controls></audio>
            {content}
        </section>
    );
}