// store.js fayl
import { combineReducers, createStore } from "redux";
import FooterReducer from "./footer-reducer";
import ChatReducer from "./chat-reduser";



export const toastrSettings = {
    toastrSettings(toastr){
        toastr.options = {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-right",
            timeOut: 4300,
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          };
          toastr.success("Yaratildi")
         
    },
}

let reducers = combineReducers({

    footerPage: FooterReducer,
    ChatPage: ChatReducer
});

const store = createStore(reducers);

export default store;
