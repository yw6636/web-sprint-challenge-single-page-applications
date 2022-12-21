import React from 'react'

function Order({details}) {
    if(!details) {
        return <h3> Working on your orders....</h3>
    }
    return (
        <div className = 'pizza container'>
            <h2>{details.username}</h2>
            <h2>{details.size}</h2>
            <h2>{details.sauce}</h2>
            <h2>{details.specialins}</h2>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}