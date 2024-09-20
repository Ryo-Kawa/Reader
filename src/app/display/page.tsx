"use client";

import Display from "@/component/main/page/component/display/display";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

export default function Home() {
    return (
        <Suspense>
            <HomePage />
        </Suspense>
    );
}

function HomePage() {
    const searchParams = useSearchParams();

    const index = Number(searchParams.get("index"));

    return (
        <Display index={index} />
    )
}
