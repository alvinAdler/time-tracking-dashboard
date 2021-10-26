import { useState } from 'react';

import './App.css';
import {ReactComponent as IconExercise} from './icons/icon-exercise.svg'
import {ReactComponent as IconPlay} from './icons/icon-play.svg'
import {ReactComponent as IconCare} from './icons/icon-self-care.svg'
import {ReactComponent as IconSocial} from './icons/icon-social.svg'
import {ReactComponent as IconStudy} from './icons/icon-study.svg'
import {ReactComponent as IconWork} from './icons/icon-work.svg'

import ProfileCard from './components/ProfileCard/ProfileCard';
import ActivityCard from './components/ActivityCard/ActivityCard';

const activityInfo = {
	work: {
		headerColor: "hsl(15, 100%, 70%)",
		title: "Work",
		timeframes: {
			daily: {
				current: 5,
				previous: 7
			},
			weekly: {
				current: 32,
				previous: 36
			},
			monthly: {
				current: 103,
				previous: 128
			}
		}	
	},
	play: {
		headerColor: "hsl(195, 74%, 62%)",
		title: "Play",
		timeframes: {
			daily: {
			  current: 1,
			  previous: 2
			},
			weekly: {
			  current: 10,
			  previous: 8
			},
			monthly: {
			  current: 23,
			  previous: 29
			}
		}
	},
	study: {
		headerColor: "hsl(348, 100%, 68%)",
		title: "Study",
		timeframes: {
			daily: {
			  current: 0,
			  previous: 1
			},
			weekly: {
			  current: 4,
			  previous: 7
			},
			monthly: {
			  current: 13,
			  previous: 19
			}
		}
	},
	exercise: {
		headerColor: "hsl(145, 58%, 55%)",
		title: "Exercise",
		timeframes: {
			daily: {
			  current: 1,
			  previous: 1
			},
			weekly: {
			  current: 4,
			  previous: 5
			},
			monthly: {
			  current: 11,
			  previous: 18
			}
		}
	},
	social: {
		headerColor: "hsl(264, 64%, 52%)",
		title: "Social",
		timeframes: {
			daily: {
			  current: 1,
			  previous: 3
			},
			weekly: {
			  current: 5,
			  previous: 10
			},
			monthly: {
			  current: 21,
			  previous: 23
			}
		}
	},
	care: {
		headerColor: "hsl(43, 84%, 65%)",
		title: "Self Care",
		timeframes: {
			daily: {
			  current: 0,
			  previous: 1
			},
			weekly: {
			  current: 2,
			  previous: 2
			},
			monthly: {
			  current: 7,
			  previous: 11
			}
		}
	}
}

function App() {

	const [selectedTime, setSelectedTime] = useState("daily")

	const handleTimeChange = (newTime) => {
		setSelectedTime(newTime)
	}

	return (
		<div className="App">
			<div className="main-container">
				<ProfileCard changeSelectedTime={handleTimeChange}/>
				<ActivityCard CurrentIcon={IconWork} activityInfo={activityInfo.work} selectedTime={selectedTime}/>
				<ActivityCard CurrentIcon={IconPlay} activityInfo={activityInfo.play} selectedTime={selectedTime}/>
				<ActivityCard CurrentIcon={IconStudy} activityInfo={activityInfo.study} selectedTime={selectedTime}/>
				<ActivityCard CurrentIcon={IconExercise} activityInfo={activityInfo.exercise} selectedTime={selectedTime}/>
				<ActivityCard CurrentIcon={IconSocial} activityInfo={activityInfo.social} selectedTime={selectedTime}/>
				<ActivityCard CurrentIcon={IconCare} activityInfo={activityInfo.care} selectedTime={selectedTime}/>
			</div>
    	</div>
	);
}

export default App;
