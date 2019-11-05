export const loadLocalStorage = () => {

    try {
        const serializedData = localStorage.getItem('state');
        if(serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e);
    }
}