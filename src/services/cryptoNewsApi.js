import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd6b6f0456amsh8570ba78770a9cap1bd391jsn880aba1780ad'
  };

  const baseUrl= 'https://bing-news-search1.p.rapidapi.com';

  const CreateRequest=(url)=>({url,headers:cryptoNewsApiHeaders});

  export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews:builder.query({
            query:({newsCategory,count}) => CreateRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)

            
        })
    })
    
    });
    
   export const{useGetCryptoNewsQuery}=cryptoNewsApi;
