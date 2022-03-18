import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { google } from "../../firebase/firebaseConfig";
import { types } from "../types/types";



export const loginEmailPassword = (email, password) => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(actionLogin(user.uid, user.displayName))
            console.log('¡Bienvenidos....!')
            window.location.href= '/dashboard';
        })
        .catch(e => {
            console.log('El usuari no fue encontrado  o no existe')
        })
    }
}

export const actionLogout = () => {
    return (dispatch) => {
     const auth = getAuth();
     signOut(auth)
     .then(resp => {
         console.log(resp)
     })
     .catch(e => {
         console.log(e)
     })
     dispatch(actionLogoutSync)
    }
    
 }

 export const actionLogoutSync = () => {
    return {
        type: types.logout
    }
    
}
export const loginGoogle = () => {
    
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(actionLogin(user.uid, user.displayName))      
        })
        .catch(e => {
            console.log(e)
        })
    }
}
export const actionLogin = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id, 
            displayName
        }
    }
}
