import './index.css';
import React, { useState } from 'react';


// ICONS //
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";




const App = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Concert', date: '2024-10-15', location: 'City Square' },
    { id: 2, title: 'Antanas', date: '2024-10-20', location: 'Art Gallery' },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    const newEvent = { id: Date.now(), title, date, location };
    setEvents([...events, newEvent]);
    setTitle('');
    setDate('');
    setLocation('');
  };

  const selectEvent = (event) => {
    setSelectedEvent(event);
    setComments([]);
  };

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const goBackToEventList = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <nav>
        <ul>
          <li><h1><a href='/'><FaHome />Home</a></h1></li>
          <li><h2><a href='/'><MdEvent />Events</a></h2></li>
          <li></li>
        </ul>
      </nav>

      <div className="main-content">
        <h1 className="mid">City Events App</h1> 

        {selectedEvent ? (
          <div>
            <button className='view3'   onClick={goBackToEventList}>Back to Events</button> 
            <h2>{selectedEvent.title}</h2>
            <p>Date: {selectedEvent.date}</p>
            <p>Location: {selectedEvent.location}</p>

            <h3>Comments</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <input type="text" placeholder="Add a comment"value={newComment} onChange={(e) => setNewComment(e.target.value)}  //comment write
            />
            <button className='view3'  onClick={addComment}>Submit Comment</button>
          </div>
        ) : (
          <>
            <div>
              <form className='formafter' onSubmit={addEvent}>
                <div>
                  <label>Event Title: </label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                  <label>Date: </label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                  <label>Location: </label>
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <button className='view2' type="submit">Add Event</button>
              </form>
            </div>
<br></br>
            <div>       <br></br><br></br><br></br><br></br>
              <h1 className="mid">Upcoming Events</h1>
    
              <ul>
                {events.map((event) => (
                  <li  key={event.id}>
                    <h3>{event.title}</h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    <button className='view2' onClick={() => selectEvent(event)}>View Details</button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
