import ToggleButton from "@/components/AdditionalComponents/ToggleButton/ToggleButton";
import styles from "./ToggleTheme.module.css"
import {useEffect} from "react";

export default function ToggleTheme() {
    function setTheme() {
        setTimeout(() => {
            const themeStr = localStorage.getItem("lightTheme");
            console.log(themeStr);

            let lightTheme = true;
            if (themeStr)
                lightTheme = JSON.parse(themeStr);

            if (lightTheme) {
                document.documentElement.style.setProperty("--color-main", "white");
                document.documentElement.style.setProperty("--color-main-2", "yellow");
                document.documentElement.style.setProperty("--color-main-reverse", "black");
                document.documentElement.style.setProperty("--color-shadow", "rgba(0, 0, 0, 0.35)");
            } else {
                document.documentElement.style.setProperty("--color-main", "#212121");
                document.documentElement.style.setProperty("--color-main-2", "#121212");
                document.documentElement.style.setProperty("--color-main-reverse", "white");
                document.documentElement.style.setProperty("--color-shadow", "rgba(255, 255, 255, 0.35)");
            }
        }, 10);

    }

    useEffect(() => {
        setTheme();
    }, []);

    return (
        <div className={styles.toggle_theme}>
           <div>
               Світла тема:
           </div>
            <ToggleButton initialVal={true} onValueChange={setTheme} saveName="lightTheme"/>
        </div>
    )
}