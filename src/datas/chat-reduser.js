const NEW_MESSAGE = "NEW_MESSAGE";
const CHANGE_MESSAGE = "CHANGE_MESSAGE";


let initialState = {
    users: [
        {id: 1 , email: "Rustam" , status: "Ohirgi Martda 7.10"},
        {id: 2 , email: "Alibek" , status: "Ohirgi Martda 6 dec"},
        {id: 3 , email: "Samat" , status: "1 jun"},
        {id: 4 , email: "Charos" , status: "Siz uchun oldin "},
    ],
    messages: [
        {userID : 1 , message: "salom bugun nima ish qildingiz"},
        {userID : 2 , message: "salom bugun nima ish qildingiz"},
        {userID : 3 , message: "salom bugun nima ish qildingiz"},
        {userID : 4 , message: "salom bugun nima ish qildingiz"},
        {userID : 5 , message: "salom bugun nima ish qildingiz"},
    ],
    new_message: ""
   }

   const ChatReduser = (state = initialState, action) => {
    if (action.type === NEW_MESSAGE) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const randoms = (array) => {
            return array[Math.floor(Math.random() * array.length)];
        };
        const random_code = randoms(numbers) + randoms(numbers) + randoms(numbers) + randoms(numbers);
        const newMessage = {
            userID: random_code,
            message: state.new_message, 
        };
        return {
            ...state,
            messages: [...state.messages, newMessage], 
        };
    } else if (action.type === CHANGE_MESSAGE) {
        return {
            ...state,
            new_message: action.message, 
        };
    }
    return state;
};

export const newMessageBody = () => ({
    type: NEW_MESSAGE,
});

export const changeMessage = (message) => ({
    type: CHANGE_MESSAGE,
    message: message,
});

export default ChatReduser;
