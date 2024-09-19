"use client";

import Main from "@/components/main/main";
import { basePath } from "../../next.config";

export const BASE_PATH = basePath ? basePath : "";

export const display_list = [
    {title: "カルマン渦", url: "/karman_vortex_street"},
    {title: "星座模型", url: "/constellation_model"},
    {title: "模型", url: "/model"},
    {title: "前線", url: "/front"},
    {title: "望遠鏡", url: "/telescope"},
    {title: "竜巻", url: "/tornado"},
    {title: "立体天気図", url: "/3d_weather_chart"},
    {title: "終わりに", url: "/finally"},
]

export default function HomePage() {
    return (
        <main>
            <Main />
        </main>
    );
}