import React from 'react'

import './ActivityCard_master.css'

const timeMapping = {
    "daily": "Yesterday",
    "weekly": "Last Week",
    "monthly": "Last Month"
}

const ActivityCard = ({CurrentIcon, activityInfo, selectedTime}) => {
    return (
        <div className="activity-card-container">
            <div className="activity-header" style={{backgroundColor: activityInfo.headerColor}}>
                <CurrentIcon/>
            </div>
            <div className="activity-desc">
                <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                    <span>{activityInfo.title}</span>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg>
                </div>
                <p>{`${activityInfo.timeframes[selectedTime].current}hrs`}</p>
                <p>{timeMapping[selectedTime]} - {`${activityInfo.timeframes[selectedTime].previous}hrs`}</p>
            </div>
        </div>
    )
}

export default ActivityCard
