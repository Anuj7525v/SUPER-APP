import React, { useEffect, useState } from "react";
import styles from './NotesWidget.module.css';


export default function NotesWidget() {
    const [note, setNote] = useState();

    useEffect(() => {
        setNote(localStorage.getItem("note", note));

    }, []);

    useEffect(() => {
        if (note) {
            localStorage.setItem("note", note.trim());
        }


    }, [note]);

    return (
        <div className={styles.NotesWidget}>
            <h1 className={styles.header}>All Notes</h1>
            <textarea className={styles.input} value={note}
                onChange={(e) => setNote(e.target.value)}
                type="text" />
        </div>
    );
}