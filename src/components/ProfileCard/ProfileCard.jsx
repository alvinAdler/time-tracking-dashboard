import React from 'react'

import './ProfileCard_master.css'

const ProfileCard = ({changeSelectedTime}) => {
    return (
        <div className="profile-card-container">
            <div className="profile">
                <img className="profile-picture" src="/images/image-jeremy.png" alt="Not available"/>
                <p>Report for</p>
                <p style={{fontWeight: 200}}>Jeremy <br></br> Robson</p>
            </div>
            <div className="time-navigation">
                <p onClick={() => changeSelectedTime("daily")}>Daily</p>
                <p onClick={() => changeSelectedTime("weekly")}>Weekly</p>
                <p onClick={() => changeSelectedTime("monthly")}>Monthly</p>
            </div>
        </div>
    )
}

export default ProfileCard
