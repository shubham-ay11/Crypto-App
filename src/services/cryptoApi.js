import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const cryptoApiHeader={
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'd6b6f0456amsh8570ba78770a9cap1bd391jsn880aba1780ad'
}

const baseUrl='https://coinranking1.p.rapidapi.com/';

const CreateRequest=(url) =>({url,headers:cryptoApiHeader});

export const cryptoApi=createApi({
reducerPath:'cryptoApi',
baseQuery:fetchBaseQuery({baseUrl}),
endpoints:(builder) =>({
    getCryptos:builder.query({
        query:(count) => CreateRequest(`/coins?limit=${count}`),
    })
})

});

export const{
    useGetCryptosQuery,
} = cryptoApi;