"use client";

import styles from "./page.module.css";
import Hackathon from "@/components/Hackathons/Hackathon/Hackathon";

export default function page({params}) {
    const id = parseInt(params.id);


    return (
        <div className={styles.page_wrapper}>
            <Hackathon id={id}/>
        </div>
    )
}