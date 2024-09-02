"use client";

import TopBar from "@/components/top_bar";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import MeteorologyPage from "@/components/meteorology_page";
import AstronomyPage from "@/components/astronomy_page";

export const KindContext = createContext({} as {kind: string, setKind: Dispatch<SetStateAction<string>>});

export default function Home() {
  const [kind, setKind] = useState("meteorology");

  return (
    <>
      <header>
        <KindContext.Provider value={{kind, setKind}}>
          <TopBar />
        </KindContext.Provider>
      </header>
      {kind === "meteorology" ? <MeteorologyPage /> : <AstronomyPage />}
      <footer>

      </footer>
    </>
  );
}