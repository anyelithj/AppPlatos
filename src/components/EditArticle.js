import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editAsyn } from "../redux/actions/actionArticle";
import "../Styled/EditArticle.css";


const EditArticle = ({ sendArt }) => {
  const { ingredientIndex, articleIndex } = useParams();
  console.log({ ingredientIndex, articleIndex });
  const { article } = useSelector((store) => store.article);
  const ingredient = article[articleIndex]?.ingredients[ingredientIndex];
  const { brand, items, price, product, quantity } = ingredient;


  const {
    register,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();


  const onSubmit = (ingredient) => {
    dispatch(editAsyn({
      article:article[articleIndex],
      name:article[articleIndex]?.name,
      ingredient,
      ingredientIndex      
    }))
    window.history.back();    
  };

  return (
    <div className="form-agregar">
      <h1>Editar Información</h1>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={brand} placeholder="brand" {...register("brand")} />
        <input defaultValue={items} placeholder="items" {...register("items")} />
        <input defaultValue={price} placeholder="price" {...register("price")} />
        <input defaultValue={product} placeholder="product" {...register("product")} />
        <input
          defaultValue={quantity}
          placeholder="quantity"
          {...register("quantity")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EditArticle;
