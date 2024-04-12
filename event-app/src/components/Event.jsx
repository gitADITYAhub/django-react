import React from 'react';

const Event = ({ event, toggleLike }) => {
  const handleLikeClick = () => {
    toggleLike(event.id);
  };

  return (
    <div>
      <h3>{event.event_name}</h3>
      {/* Add other event details here */}
      <button onClick={handleLikeClick}>
        {event.is_liked ? "❤️" : "♡"}
      </button>
    </div>
  );
};

export default Event;
// import React, { useState, useEffect } from 'react';
// import { fetchRootMessage } from '../services/api';

// const Event = () => {
//   const [rootMessage, setRootMessage] = useState('');

//   useEffect(() => {
//     const getRootMessage = async () => {
//       const message = await fetchRootMessage();
//       setRootMessage(message);
//     };

//     getRootMessage();
//   }, []);

//   return (
//     <div>
//       <h1>Root Message:</h1>
//       <p>{rootMessage}</p>
//       {/* Rest of your event component */}
//     </div>
//   );
// };

// export default Event;