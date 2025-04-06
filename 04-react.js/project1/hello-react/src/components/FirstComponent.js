// function FirstComponent () {

//   const data = "React.js"
//   const styles = {color:'green'}
//     return(
//         <h2 style={{color:styles.color}}>Welcome to {data}</h2>
//     )
// }
// export default FirstComponent

// const FirstComponent = () => {
//     const name="Reat"

//     return(
//         <h2>Welcome to {name}</h2>
//     )
// }

// export default FirstComponent

import React from 'react'

export default function FirstComponent({name,org}) {
   
    return (
        <div>
            <h2>Welcome to {name} by {org}</h2>
        </div>
    )
}




