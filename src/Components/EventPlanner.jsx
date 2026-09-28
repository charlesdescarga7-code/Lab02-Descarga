import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.
                </p>
                <button className="get-started-button">Get Started</button>
            </section>

<section className="events_categories">
    <ul>
        <h2>Social Events:</h2>
        <li>Birthday Parties</li>
        <li>Anniversary Celebrations</li>
        <li>Wedding Receptions</li>
        <li>Baby Shower</li>
        <li>Graduation Parties</li>
        <li>Family Reunion</li>
    </ul>
    <ul>
        <h2>Entertainment Events:</h2>
        <li>Concerts</li>
        <li>Music Festivals</li>
        <li>Films Screening</li>
        <li>Comedy Shows</li>
        <li>Art Exhibitions</li>
        <li>Cultural Events</li>
    </ul>
    <ul>
      <h2>Community Events:</h2>
    <li>Fundraising Events</li>
    <li>Charity Galas</li>
    <li>Volunteer Drives</li>
    <li>Neighborhood Block Parties</li>
    <li>Community Festivals</li>
    <li>Cultural Celebrations</li>
    </ul>

</section>
    <section className="features">
        <ul>
        <h2>Features:</h2>
            
        <li>Easy event creation and management</li>
        <li>Customizable event templates</li>
        <li>Guest list management</li>
        <li>Real-time collaboration</li>
        <li>Reminders and notifications</li>
         </ul>
    </section>
     <section className="testimonials">
        <h2>Testimonials:</h2>
        <div className="testimonial">
             <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
             <p className="author">- Emily Johnson.</p>
        </div>
        <div className="testimonial">
            <p>"I used Event Planner for all my corporate events. It saves me so much time and effort!"</p>
            <p className="author">- John Smith.</p>
        </div>
            </section>
                   <section className="contact">
                        <h2>Contact Us:</h2>
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </section>
                </div>
    );
};

export default EventPlanner;
