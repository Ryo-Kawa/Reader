import styles from "./top_button.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

export default function TopButton() {
    const [content, setContent] = useState((<></>));

    const onScroll = useCallback(() => {
        if(window.scrollY > 300) setContent((<button className={styles.button} onClick={() => window.scroll({ top: 0, behavior: "smooth" })}><FontAwesomeIcon icon={faArrowUp} /></button>));
        else setContent(<></>);
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <>{content}</>
    );
}