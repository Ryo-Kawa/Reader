"use client";

import Image from "next/image";
import styles from "./top.module.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { StateContext } from "../home";

export default function Top() {
    const state = useContext(StateContext).state;
    const setState = useContext(StateContext).setState;

    return (
        <div className={styles.top}>
            <button className={styles.bars} onClick={() => setState({...state, open: !state.open})}><FontAwesomeIcon icon={state.open? faXmark : faBars} /></button>
            <div className={styles.logoWrapper}><Image src="" alt="" className={styles.logo} /></div>
            <h1 className={styles.header}>天文気象部</h1>
        </div> 
    );
}