import './App.css';

import PlaceholderJumbotron from './components/PlaceholderJumbotron/PlaceholderJumbotron';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ActivityCard from './components/ActivityCard/ActivityCard';

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<ProfileCard/>
				<ActivityCard/>
				<ActivityCard/>
				<ActivityCard/>
				<ActivityCard/>
				<ActivityCard/>
				<ActivityCard/>
			</div>
    	</div>
	);
}

export default App;
