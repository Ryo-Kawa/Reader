"use client";

import Top from "@/components/header/top";
import Main from "@/components/main/main";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { basePath } from "../../next.config";

export const BASE_PATH = basePath ? basePath : "";

export const StateContext = createContext({} as {
    state: { kind: string, open: boolean }
    setState: Dispatch<SetStateAction<{ kind: string, open: boolean }>>
});

export default function Page() {
    const [state, setState] = useState({kind: "0", open: false});

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