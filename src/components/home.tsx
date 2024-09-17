"use client";

import Top from "@/components/top/top";
import Main from "@/components/main/main";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { basePath } from "../../next.config";

export const BASE_PATH = basePath ? basePath : "";

export const StateContext = createContext({} as {
    state: { open: boolean }
    setState: Dispatch<SetStateAction<{ open: boolean }>>
});

export default function HomePage() {
    const [state, setState] = useState({open: false});

    return (
        <>
            <StateContext.Provider value={{ state, setState }}>
                <header>
                    <Top />
                </header>
                <main>
                    <Main />
                </main>
            </StateContext.Provider>
        </>
    );
}