import Types from "./types";
const initialState = {
    papers: [],
    loading:false
};

const paperReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.PAPERS_LOADING: {
            console.log("create_item");
            return {...state,loading: action.payload};
        }

        case Types.GET_PAPERS: {
            return {...state,papers: action.payload};
        }

        case Types.DELETE_PAPER: {
            // eslint-disable-next-line
            return {...state, papers: state.papers.filter(paper => paper.id != action.payload)}
        }
        default:
            return state;
    }
}

export default paperReducer;