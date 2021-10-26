import React from 'react'

import './ProfileCard_master.css'

const ProfileCard = () => {
    return (
        <div className="profile-card-container">
            <div className="profile">
                <img className="profile-picture" src="/images/image-jeremy.png" alt="Not available"/>
                <p>Report for</p>
                <p>Jeremy <br></br> Robson</p>
            </div>
            <div className="time-navigation">
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
    )
}

export default ProfileCard
