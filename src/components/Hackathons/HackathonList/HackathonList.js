import styles from "./HackathonList.module.css";
import Hackathon from "@/components/Hackathons/hackathonComp/Hackathon";
import {hackathons} from "@/app/data";

export default function HackathonList() {
    return (
        <div className={styles.hackathons}>
            {hackathons.map((hck) =>
                <Hackathon key={hck.id} {...hck}/>)}
        </div>
    )
}