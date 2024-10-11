

import styles from "./page.module.css";
import Winners from "@/components/Winners/Winners";

export default function page() {
    return (
        <div className={styles.winners}>
            <h1 className="main-header">Переможці минулого хакатону:</h1>
            <Winners/>
        </div>
    )
}