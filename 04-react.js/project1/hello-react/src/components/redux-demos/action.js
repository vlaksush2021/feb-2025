export const increment = () => ({type:"INCREMENT"});
export const decrement = () => ({type:"DECREMENT"});

// redux thunk
export const incrementIfNotMax = () => {
    return(dispatch,getState) => {
        const {count} = getState();
  
        console.log(getState())
        if(count<10){
            dispatch(increment())
        }
        else{
            console.log("You reached max count")
        }
    }
}