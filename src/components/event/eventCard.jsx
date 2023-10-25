import React from 'react'

const EventCard = () =>{
    const eventObject = {
        eventName:"Interaction With Rajesh on Future Prospects",
        eventDescription:"The massive technology conference Techweek references past attendees and sponsors to illustrate how popular and illustrious the event is. If you don’t have big names to reference you can include testimonials and reviews from past attendees to create the same effect.",
        eventDate: new Date("October 27, 2023 11:13:00"),
        eventDuration:600000 ,
        speakers:[{speakerName:"Rajesh"}]
    }

    return(
        <div className="event-card">
            <h2 className="event-heading">
                {eventObject.eventName}
            </h2>
            <p className="event-desciption">
                {eventObject.eventDescription}
            </p>
        </div>
    )
}
export default EventCard;