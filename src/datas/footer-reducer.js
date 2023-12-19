const NEW_AUTHOR = "NEW_AUTHOR";
const NEW_DATA = "NEW_DATA";



let initialState = {
    music: [
        { id: 1, name: "Rustam" , description: "The End"},
        { id: 2, name: "Aliber" , description: "Sad bo"},
        { id: 3, name: "Alibek" , description: "Queen"},
        { id: 4, name: "Jalol" , description: "Sevmayman Dushanbadan"},
        { id: 5, name: "Enshteyn" , description: "Iddinaxuy"},
        { id: 6, name: "Kimdir" , description: "Iddinaxuy"},
        { id: 7, name: "Rinat" , description: "San va Man"},
    ],
    albums: [
        { id: 1,  nameAuthor: "Diyora" , nameMusic: "We dont talk anymore"},
        { id: 2,  nameAuthor: "Sevinch" , nameMusic: "Sevinch zor zor"},
        { id: 3,  nameAuthor: "Samat" , nameMusic: "Ranki takdin"},
        { id: 4,  nameAuthor: "Charos" , nameMusic: " Jakh Khalib Docha"},
        { id: 5,  nameAuthor: "Marat" , nameMusic: "7-Qavat"},
        { id: 6,  nameAuthor: "Bekzat" , nameMusic: "If u can my talk "},
    ],
    newText: "Salom rustam",
    newName: "Alone",
}



const FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_AUTHOR: {
            const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const randoms = (array) => String(array[Math.floor(Math.random() * array.length)]);
            const random_code = numbers.map(() => randoms(numbers)).join('');
            const newData = {
                id: random_code,
                name: state.newText,
                description: state.newName
            };
            return { ...state, music: [...state.music, newData] };
        }
        case NEW_DATA: {
            return { ...state, newText: action.newText, newName: action.newName };
        }
        default:
            return state;
    }
};


export const NewAuthor = () => ({
    type: NEW_AUTHOR,
});

export const newDescription = (newText, newName) => ({
    type: NEW_DATA,
    newText: newText,
    newName: newName
});

export default FooterReducer;
