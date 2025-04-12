import React, { useEffect, useState } from 'react'

export default function DataFetchingComponent() {

    // //understanding dependency array of useEffect
    // const [data, setData] = useState("A");
    // const [data2, setData2] = useState("B");

    // useEffect(() => {
    //     console.log("sideeffects")
    // },[data])

    // //[] - sideeffects will call once - during componet loading (rendering))
    // // without [] - sideeffects will call  (during componet loading (rendering)), re-rendering
    // //[data] => sideeffects will call  (during componet loading (rendering)), re-rendering based on changes in data


    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((jsonRes) => setData(jsonRes))
            .catch((err) => console.log('Error ' + err))
    }, [])

    return (
        <div>
            <h3>Fetching Demo</h3>
            {
                data.map((user) => (
                    <p key={user.id}>
                        {user.name} - {user.username}
                    </p>
                ))
            }


        </div>
    )
}
