import { typesArticle } from "../types/types"
import {addDoc,collection, doc, getDocs} from 'firebase/firestore'
import {db} from '../../firebase/firebaseConfig';



//listar 
export const ListSyn = (article) => {
    return {
        type: typesArticle.list,
        payload: article
    }
}

export const ListAsyn = () => {
    return async (dispatch) => {
        const getdb = await getDocs(collection(db, 'DishApi'))
        console.log("file: actionArticle.js ~ line 19 ~ return ~ getdb", getdb)
        
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
