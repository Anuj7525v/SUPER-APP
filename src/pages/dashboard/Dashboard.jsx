import React, { useEffect, useState } from "react";
import styles from "./DashBoard.module.css";
import UserWidget from "../../components/UserWidget";
import NotesWidget from "../../components/NotesWidget";
import CountDownWidget from "../../components/CountDownWidget";
import TimerWidget from "../../components/TimerWidget";
import PromotionPage from  "../promotion/promotionPage";
import WeatherWidget from "../../components/WeatherWidget";
import { useNavigate } from "react-router-dom";
import {fetchWeatherData} from '../../apis/weather';
import  NewsWidget from "../../components/NewsWidget";
import { fetchNewsData } from '../../apis/news';

function Dashboard() {
	const [user, setUser] = useState();
	const [selectedGenres, setSelectedGenres] = useState();
	const [weather, setWeather] = useState(null); 
	const [news, setNews] = useState(null);
	const navigate = useNavigate();


	useEffect(() => {
		setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
		setUser(JSON.parse(localStorage.getItem("currentUser")));
	
	  //  Fetch Weather data
	  fetchWeatherData().then((data) => {
		setWeather(data);
	  })

	  fetchNewsData().then((data) =>{
		setNews(data);
	  } )

	
	
	
	}, []);

	const goTopromotion = () => {
		navigate("/promotion");
	  };

	return (
		<>
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.UserWidget}>
					{user && selectedGenres && (
						<UserWidget
							user={user}
							selectedGenres={selectedGenres}
							type={"small"}
							
						/>
					)}
				</div>
				<div className={styles.WeatherWidget}>
                     {weather && <WeatherWidget  weather={weather} />}
				</div>
				<div className={styles.TimerWidget}>
					<CountDownWidget />
				</div>
				<div className={styles.NotesWidget}>
					<NotesWidget />
				</div>
				<div className={styles.NewsWidget}>
				{news ? <NewsWidget news={news} /> : <div>Loading news...</div>}
				</div>
			</div>
			<button className={styles.nextButton} onClick={goTopromotion}>
          Next
        </button>
		</div>
		</>
	);
}

export default Dashboard;