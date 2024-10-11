import styles from "./page.module.css"
import About from "@/components/About/About";

export default function page() {
    return (
        <div className={styles.about_wrapper}>
            <div className={styles.about}>
                <h1 className="main-header">SenonHack - організація по проведенню хакатонів з тисячолітньою
                    історією!</h1>

                <About/>

                <h2 className="about-last">
                    Дякуємо, що завітали на наш сайт. Сподіваємося побачити вас на нашому наступному хакатоні!
                </h2>
            </div>
        </div>
    )
}