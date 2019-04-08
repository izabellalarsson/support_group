import React from 'react';
import qs from 'query-string';
import fetch from 'isomorphic-unfetch';

const fbpage = ({events}) => {
    console.log(events)
    return (
        <div>
            <h1>Fbpage</h1>
            {events.map(event => (
                <li key={event.id}>{event.message}</li>
            ))}
        </div>
    );
};

fbpage.getInitialProps = async ({ props }) => {
    
    const query = {
        access_token: process.env.FB_ACCESS_TOKEN
    }
    const res = await fetch(
        `https://graph.facebook.com/v3.2/SupportRestadGard/posts?${qs.stringify(
            query
        )}`)

    const json = await res.json();
   
    return { events: json.data };
}

export default fbpage;