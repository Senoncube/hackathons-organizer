import Link from "next/link";
import Image from "next/image";
import Card from "@/components/AdditionalComponents/Card/Card";
import styles from "./Hackathon.module.css";

const desc_max_length = 250;

export default function Hackathon({img, name, desc, id}) {
    if (desc.length > desc_max_length)
        desc = desc.substring(0, desc_max_length) + "...";
    return (
        <Card>
            <div className={styles.hackathon}>
                <img src={"/" + img} alt={img}/>
                <h2>{name}</h2>
                <div className={styles.desc}>{desc}</div>
                <div>
                    <Link className="button-1" href={`/hackathon/${id}`}>Дізнатися більше...</Link>
                </div>

            </div>
        </Card>
    )
}