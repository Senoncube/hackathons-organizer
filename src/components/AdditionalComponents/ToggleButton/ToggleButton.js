import {useToggle} from "@/hooks/useToggle"
import styles from "./ToggleButton.module.css";
import {useLocStor} from "@/hooks/useLocStor";
import {useEffect} from "react";

export default function ToggleButton({saveName, onValueChange, initialVal = true}) {
    const [val, toggle] = useToggle(initialVal, saveName);

    function check() {
        toggle();
        onValueChange(!val);
    }

    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={val} onInput={check}/>
            <span className={styles.slider}></span>
        </label>
    )
}