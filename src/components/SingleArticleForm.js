import React from "react";
import { AddCircle, FormEdit, Basket } from "grommet-icons";
import "../Styled/SingleArticleForm.css";
import { Link } from "react-router-dom";
import {
  deleteAsync,
} from "../redux/actions/actionArticle";
import { useDispatch } from "react-redux";

export function SingleArticleForm({ singleArticle, articleIndex }) {
  const dispatch = useDispatch();
  if (!Array.isArray(singleArticle.ingredients))
    return (
      <>
        <p>
          <b>no hay ingredientes</b>
        </p>
      </>
    );
  const deleteIngredient = (ingredientIndex) => {
    dispatch(deleteAsync({ name:singleArticle.name, ingredientIndex, singleArticle }));
  };
  return (
    <>
      {singleArticle.ingredients.map((art, index) => (
        <div key={index} className="ingredients">
          <div className="ingredient-check">
            <input
              type="checkbox" 
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
            <span>$</span>
            {art.price}
          </div>
          <div className="ingredient-actions">
            <Link to="/addArticle">
              <span>
                <AddCircle />
              </span>
            </Link>
            <Link to={`/EditArticle/${articleIndex}/${index}`}>
              <span>
                <FormEdit
                />
              </span>
            </Link>
            <div onClick={() => deleteIngredient(index)}>
              <span>
                <Basket
                />
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="article-footer">
        <div className="mb-3">
          <label>Gastos de envío</label>
          <label>{singleArticle.shippingCost}</label>
        </div>
        <span style={{ color: "green", fontSize: "2rem" }}>+</span>
        <div className="mb-3">
          <button type="submit">Comprar Ingredientes</button>
        </div>
      </div>
    </>
  );
}
