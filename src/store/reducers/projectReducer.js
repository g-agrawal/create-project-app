
const initState = {
    projects: [
        { id: '1', title: 'Fruits project', content: 'Buy some fruits' },
        { id: '2', title: 'Vegitables project', content: 'Buy some vegitable' },
        { id: '3', title: 'Books project', content: 'Buy some book' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default:
            return state;
    }
}

export default projectReducer;