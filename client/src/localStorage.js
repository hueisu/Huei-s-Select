//store state to localstorage
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cartState", serializedState);
    }
    catch (error) {
        console.log("Something went wrong", error)
    }
}


//load state from localstorage

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("cartState");
        if (serializedState === null) {
            return { cartItem: [] };
        } else {
            return JSON.parse(serializedState);
        }
    }
    catch (error) {
        console.log("something went wrong", error);
        return undefined;
    }
}

