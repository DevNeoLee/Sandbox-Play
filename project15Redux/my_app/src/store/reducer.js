
const initialState = {
    age: 22,
    message: "hello",
    history: [],
    
}
const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'AGE_UP') {
        newState.age += action.value;
        newState.history.push(newState.age);
        
    }
    if (action.type ==='AGE_DOWN') {
        newState.age -= action.value;
     
    }

    if (action.type ==='CONTACT') {
        newState.result = action.result;
    }
    return newState;
}

export default reducer;