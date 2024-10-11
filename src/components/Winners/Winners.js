"use client";

import styles from "./Winners.module.css";
import dynamic from "next/dynamic";
import {useToggle} from "@/hooks/useToggle";

export default function Winners() {
    const [showTasks, toggleTasks] = useToggle(false);
    const SolvedTaskListComp = dynamic(
        () => import("./SolvedTasksList/SolvedTasksList"),
        {
            loading: () => <div className={styles.loading}>Loading...</div>
        }
    )

    return (
        <div className={styles.photo_wrapper}>
            <img src="/winners.jpg" alt="winners"/>

            {showTasks ?
                <SolvedTaskListComp/> :
                <button className="button-2" onClick={toggleTasks}>Показати список вирішених
                    задач?</button>}


        </div>
    )
}