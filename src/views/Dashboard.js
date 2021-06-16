import React, {useState, useEffect} from 'react'

function Dashboard() {
    const getAffirmation = async ()=> {
        const data = await fetch('https://www.affirmations.dev/');
        console.log(data)
    }
    return (
        <div>
            

        
        </div>
    )
}

export default Dashboard
