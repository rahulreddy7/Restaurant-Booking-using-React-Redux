import * as ActionTypes from './ActionTypes'

export const InitialFeebback={
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};
export const InitialFeedback=(state={
        InitialFeebback, errMess:null,
    },action)=>{
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK :
            var newfeedback = action.payload;
            return { ...state, feedback: state.InitialFeebback.concat(newfeedback)};
    }
};