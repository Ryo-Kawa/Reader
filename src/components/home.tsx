"use client";

import Main from "@/components/main/main";
import { basePath } from "../../next.config";

export const BASE_PATH = basePath ? basePath : "";

export const experiment_list = [
    {title: "...", url: ""},
    {title: "...", url: ""},
    {title: "...", url: ""},
    {title: "...", url: ""},
    {title: "...", url: ""},
    {title: "...", url: ""},
    {title: "...", url: ""},
    {title: "終わりに", url: "/finally"},
]

export default function HomePage() {
    return (
        <main>
            <Main />
        </main>
    );
}