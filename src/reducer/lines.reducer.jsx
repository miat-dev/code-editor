import { linesAction } from "../actionTypes";
export const initialState = {
    lines: 
       'Not A code'
    ,
    color :['#fcefdd', '#f5dded']
};
const linesReducer = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type){
        case linesAction.LINE_UPDATE:
            return{
                ...state,
                lines:payload
            }
        default:
            return state;    
	}
}
export default linesReducer;