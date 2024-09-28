import React from 'react'


const Participant = ({participant}) => {
  return (
    
    <div className='event'>
            <h3 className="title title_participant">{participant.name}</h3>
            <p4 className="description">{participant.email === 'undefined' ? 'Email not specified' : participant.email}</p4>
    </div>
    
  )
}

export default Participant
