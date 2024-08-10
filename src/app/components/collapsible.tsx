"use client";

import { useState } from "react";

export default function Collapsible({header}: {header: string}) {
    const [open, setOpen] = useState(false);
    const content = <div>Content</div>

    return (
        <div>
            <button onClick={() => {
                setOpen(true);
            }}>
                <h2>{header}</h2>
            </button>
            {open? content : ""}
        </div>
    );
}