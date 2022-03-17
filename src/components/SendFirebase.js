import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { db } from '../firebase/firebaseConfig';

const SendFirebase = () => {
  const api = "https://recipe-rissoto.vercel.app/recipe";
  console.log(api);
  const getApi = async(api) => {
    const res = await fetch(api);
    const data = await res.json()
    const dbIngredients = data.ingredients;
    // console.log(data)
    // console.log(ingredients)
    // sendData(data, dbIngredients)
  }

  const sendData = (data, dbIngredients) =>{
    let dbData = Object.fromEntries(
      Object.entries(data).map( ([key, value]) => [key, value]
      )
    );
    
    const {name, shippingConst, currency } = dbData;
    const sendDBApi = {
      name,
      shippingConst, 
      currency
}

    dbIngredients.forEach(ing => {
      const {product, brand, items, quantity, price} = ing
    
      const sendApi = {
              product, 
              brand,
              items,
              quantity, 
              price
            
      }
      console.log(sendApi);
      // addDoc(collection(db, "DishApi"),sendApi )
      // .then(res => {
      //   console.log("carga exitosa...")
      // })
      // .catch(error => {
      //   console.log(error)
      // })

    })
  }
  
 

  getApi(api);
  return (
    <div>
       Envio de data 
    </div>
  )
}

export default SendFirebase
