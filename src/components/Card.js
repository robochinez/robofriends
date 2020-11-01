import React from 'react';

const Card = ( {name,username,email,id} ) => {
   
    return (
      <div className='bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5 '>
             <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
         <div className='tc'>
            <h2>{username}</h2>
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
          </div>
    );
}

export default Card;