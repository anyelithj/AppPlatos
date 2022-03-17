import React from "react";
import "./SingleArticleForm.css"

export function SingleArticleForm({ singleArticle }) {
    if (!Array.isArray(singleArticle.ingredients)) return (
        <>
            <p>
                <b>no hay ingredientes</b>
            </p>
        </>
    )
  return (
    <>
      {singleArticle.ingredients.map((art, index) => (
        <div key={index} className="ingredients">
          <div className="ingredient-check">
            <input
              type="checkbox" // label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
          </div>
          <div className="ingredient-quantity">
            <input type="text" name="cant" value={art.items} />
          </div>
          <div className="ingredient-info">
            <h4>{art.product}</h4>          
            <p>{art.brand}</p>
            <p>{art.quantity}</p>
          </div>    
        
          <div className="ingredient-price">
             <span>$</span>{art.price}
          </div>
          <div className="ingredient-actions">      
            <span style={{color:'red'}}>-</span>
            <span style={{color:'blue'}}>/</span>
          </div>       
        </div>
      ))}

      <div className="article-footer">
        <div className="mb-3">
          <label>Gastos de envío</label>
          <label>{singleArticle.shippingCost}</label>
        </div>
        <span style={{color:'green', fontSize: '2rem'}}>+</span>
        <div className="mb-3">
          <button type="submit">Comprar Ingredientes</button>
        </div>
      </div>
    </>
  );
}
