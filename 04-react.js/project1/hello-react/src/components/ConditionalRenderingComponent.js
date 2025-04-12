import React, { useEffect, useState } from 'react'

export default function ConditionalRenderingComponent() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts') // mounting
                .then((response) => response.json())
                .then((jsonRes) => {
                    setData(jsonRes)
                    setLoading(false)
                }
                )

                .catch((err) => console.log('Error ' + err))

            return () => { //unmounting / 
                setData([]) //reset the data
            }
        }, 2000)
    }, [])




    return (
        <div>
            <h3>Fetching Demo</h3>
            {
                loading 
                ? 
                (
                    <p>Loading.....</p>
                ) 
                : 
                (
                    data.map((user) => (
                        <p key={user.id}>
                            {user.userId} - {user.title}
                        </p>
                    ))
                )
            }
        </div>
    )
}
