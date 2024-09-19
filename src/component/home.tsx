"use client";

import Main from "@/component/main/main";
import { basePath } from "../../next.config";

export const BASE_PATH = basePath ? basePath : "";

export const display_list = [
    {title: <>カルマン<ruby>渦<rp>(</rp><rt>うず</rt><rp>)</rp></ruby></>, content: "/karman_vortex_street"},
    {title: <>星座<ruby>模型<rp>(</rp><rt>もけい</rt><rp>)</rp></ruby></>, content: "/constellation_model"},
    {title: <ruby>模型<rp>(</rp><rt>もけい</rt><rp>)</rp></ruby>, content: "/model"},
    {title: "前線", content: "/front"},
    {title: "望遠鏡", content: "/telescope"},
    {title: <ruby>竜巻<rp>(</rp><rt>たつまき</rt><rp>)</rp></ruby>, content: "/tornado"},
    {title: "立体天気図", content: "/3d_weather_chart"},
    {title: "終わりに", content: "/finally"},
]

export const display_num = display_list.length;

export default function HomePage() {
    return (
        <main>
            <Main />
        </main>
    );
}