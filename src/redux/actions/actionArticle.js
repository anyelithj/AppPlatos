import { typesArticle } from "../types/types"
import {addDoc,collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig';
import { async } from "@firebase/util";


//editar
export const editAsyn = ({name, ingredient, ingredientIndex, article}) => {
    return async (dispatch) => {
        const getdb = collection(db, 'DishApi')
        const resQuery = query(getdb, where("name", "==", name))
        const getInfo = await getDocs(resQuery)
        let id = "";     
        getInfo.forEach(async (dat) => {
            id = dat.id
        })
        console.log(id)
        const docRef = doc(db, 'DishApi', id)     
        const articleClone = {...article};
        articleClone.ingredients[ingredientIndex] = ingredient;
        await updateDoc(docRef, articleClone) 
        .then(() => ListAsyn())
        .then(() => dispatch(ListAsyn()))
    }
}
//eliminar
export const deleteAsync = ({name, ingredientIndex, singleArticle}) => {
    return async (dispatch) => {
        const getdb = collection(db, 'DishApi')
        const resQuery = query(getdb, where("name", "==", name))
        const getInfo = await getDocs(resQuery)
        let id = "";     
        getInfo.forEach(async (dat) => {
            id = dat.id
        })
        console.log(id)
        const docRef = doc(db, 'DishApi', id)     
        const articleClone = {...singleArticle};
        articleClone.ingredients.splice(ingredientIndex,1);
        await updateDoc(docRef, articleClone) 
        .then(() => ListAsyn())
        .then(() => dispatch(ListAsyn()))
    }
}


export const editSyn = (name, article) => {
    return {
        type: typesArticle.edit,
        payload: article
    }
}
//eliminar
export const deleteAsyn = (name) => {
    return async(dispatch) => {
        const getdb = collection(db, 'DishApi')
        const resQuery = query(getdb, where("name", "==", name))
        console.log(resQuery);
        const getInfo = await getDocs(resQuery)
        getInfo.forEach((data => {
            deleteDoc(doc(db, 'DishApi', data.id ))
        }))
        dispatch(deleteSyn(name))
    }   
}

export const deleteSyn = (name) => {
    return {
        type: typesArticle.delete,
        payload: name
    }
}

//listar 
export const ListSyn = (payload) => {
    return {
        type: typesArticle.list,
        payload
    }
}

export const ListAsyn = () => {
    return async (dispatch) => {
        const getdb = await getDocs(collection(db, 'DishApi'))
        
        const articles = []
        getdb.forEach((doc) => {
            articles.push({
                ...doc.data()
            })
        })
        dispatch(ListSyn(articles))
    }
}

//agregar closure

export const addAsyn = (newArticle) => {  
    return(dispatch) => {
        for (const key in newArticle){
            if (!newArticle[key]) return
        }
        addDoc(collection(db, 'DishApi'), newArticle)
        .then(resp => {
            dispatch(addSyn(newArticle))
            dispatch(ListAsyn())
        })
        .catch(error=> {
            console.log(error)
        })
    }
}


export const addSyn = (article) => {
    return {
        type: typesArticle.add,
        payload: article
    }
}
