"use client";

import Display from "@/component/main/page/component/display/display";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();

    const index = Number(searchParams.get("index"));

    return (
        <Display index={index} />
    )
}