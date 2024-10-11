"use client";

import styles from "./Hackathon.module.css";
import {hackathons} from "@/app/data";
import {useToggle} from "@/hooks/useToggle";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import {useRef} from "react";
import {useLocStor} from "@/hooks/useLocStor";

export default function Hackathon({id}) {
    const [isReg, setReg] = useLocStor(`hackathon_${id}`, false);
    const hackathon = hackathons.find(i => i.id === id);

    const [toggleForm, toggle] = useToggle(false);

    const regForm = useRef(null);
    function showForm() {
        toggle();
        setTimeout(() => {
            regForm.current.scrollIntoView({
                behavior: 'smooth',
            });
        }, 1);
    }

    function formSubmit() {
        toggle();
        setReg(true);
    }

    function registrationForm() {
        if (isReg)
            return <div className={styles.registered}>
                <div>Ви зареєстровані на {hackathon.name} ✔</div>
                <button onClick={() => setReg(false)}>Видалити реєстрацію</button>
            </div>;
        if (toggleForm)
            return <RegistrationForm onFormSubmit={formSubmit} name={hackathon.name}/>;
        return <button className="button-3" onClick={showForm}><span>Зареєструватися на {hackathon.name}</span></button>;
    }

    return (
        <div className={styles.page}>
            <h1 className="main-header">
                {hackathon.name}
            </h1>
            <img src={"/" + hackathon.img}/>
            <div className={styles.text}>
                {hackathon.desc}
            </div>
            <div ref={regForm}>
                {registrationForm()}
            </div>
        </div>
    )
}