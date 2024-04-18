import React, {useState , useEffect} from "react";
import styles from './DashBoard.module.css';
import UserWidget from "../../components/UserWidget";
import NotesWidget from "../../components/NotesWidget";
import CountDownWidget from "../../components/CountDownWidget";
import { json } from "react-router-dom";



export default function Dashboard(){
    const [user,setUser] = useState();

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    
    }, []);
    

     
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.UserWidget}>
              
                   {/* {user && <UserWidget user={user} />} */}
                </div>
                <div className={styles.WeatherWidget}></div>
                <div className={styles.TimerWidget}>
                    <CountDownWidget />
                </div>
                <div className={styles.NotesWidget}>
                    <NotesWidget />
                </div>
                <div className={styles.NewsWidget}></div>
            </div>
        </div>
    )
}