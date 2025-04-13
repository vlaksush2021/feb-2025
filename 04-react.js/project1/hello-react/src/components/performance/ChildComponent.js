import React from 'react'

function ChildComponent() {
    
    console.log("ChildComponent rendered!")
  return (
    <div>ChildComponent</div>
  )
}
export default React.memo(ChildComponent)
