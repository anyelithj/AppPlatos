import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { types } from "../types/types"

export const registroEmailPassAsyn = (email, password, nombre) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user}) => {
            await updateProfile(auth.currentUser, {displayName: nombre})
            dispatch(actionRegister(user.email, user.uid, user.displayName))
            console.log(user)
        })
        .catch(e => {
            console.log(e)
        })

    }
}

export const actionRegister = (email, password, nombre) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            nombre
        }
    }
}