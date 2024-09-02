"use client";

import TopBar from "@/components/top_bar";
import { useState } from "react";
import MeteorologyPage from "@/components/meteorology_page";
import AstronomyPage from "@/components/astronomy_page";

export default function Home() {
  const [kind, setKind] = useState("meteorology");

  return (
    <>
      <header>
        <TopBar kind={kind} setKind={setKind} />
      </header>
      {kind === "meteorology" ? <MeteorologyPage /> : <AstronomyPage />}
      <footer>

      </footer>
    </>
  );
}