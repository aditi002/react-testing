import React, { useEffect, useState } from 'react'

export  function Skills({skills}) {
    const [LoggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoggedIn(true)
        }, 1001)
    }, [])
  return (
    <div>
        <h2>List of Skills</h2>
        <ul>
            {skills.map(skill => (
                <li key={skill.id}>{skill.name}</li>
            ))}
        </ul>
        {
            LoggedIn 
            ? (<button>start working</button>)
            :(<button onClick ={() =>setLoggedIn(true)}>login</button>)

        }
    </div>
  )
}
