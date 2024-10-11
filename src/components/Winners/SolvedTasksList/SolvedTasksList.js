import ToggleButton from "@/components/AdditionalComponents/ToggleButton/ToggleButton";
import styles from "./SolvedTasksList.module.css"
import {useState} from "react";
import {useLocStor} from "@/hooks/useLocStor";

export default function SolvedTasksList() {
    const taskList = [
        {task: "N-digit numbers", solved: true},
        {task: "\"Mirror prime\" numbers", solved: true},
        {task: "Knight and pawn", solved: false},
        {task: "Triangles from Matches\n", solved: true},
        {task: "The number of ones", solved: false},
        {task: "The Parquet of the Triangles", solved: true},
    ];

    const [showUnsolvedTask, setShowUnsolvedTasks] = useLocStor("showUnsolvedTasks", true);
    const handleShowUnsolvedTasksChange = (newValue) => {
        setShowUnsolvedTasks(newValue);
    }
    function checkTask(task) {
        if (showUnsolvedTask)
            return true;
        else if (task.solved)
            return true;
        else
            return false;
    }

    return (
        <div className={styles.solved_task_list}>
            <div className={styles.toggle}>
                <div>Показувати невирішені задачі:</div>
                <ToggleButton initialVal={true} onValueChange={handleShowUnsolvedTasksChange} saveName="showUnsolvedTasks"/>
            </div>
            <div className={styles.task_list}>
                {taskList.map((task, i) => {
                    if (checkTask(task))
                        return <div key={i} className={styles.task}>
                            {i + 1}. {task.task} {task.solved && "✔"}
                        </div>;
                    else return null;
                })}
            </div>
        </div>

    )
}