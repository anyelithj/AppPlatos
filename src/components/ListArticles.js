import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import {ListAsyn } from "../redux/actions/actionArticle";
import { SingleArticleForm } from "./SingleArticleForm";

const ListArticles = () => {
  const dispatch = useDispatch()
  let [values] = useForm({      
    name: '',
    shippingCost: '',
    currency: '',
    ingredients:[],
  })


  useEffect(() => {
    dispatch(ListAsyn(values))
 
  }, []);
  
  
  const { article } = useSelector((store) => store.article);
  console.log("article", article);
  

  return (
    <>
      {article &&
        article.length > 0 &&
        article.map((singleArticle, index) => (
          <>
            <div key={index + Math.random()}>
              <h6>INGREDIENTES</h6>
              <h3>{singleArticle?.name}</h3>
              <SingleArticleForm singleArticle={singleArticle} articleIndex={index}/>
            </div>
          </>
        ))}
        <div>
        </div>
    </>
  );
};

export default ListArticles;
