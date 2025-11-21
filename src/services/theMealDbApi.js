import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const theMealDbApi = createApi({
    reducerPath:'theMealDbApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://www.themealdb.com/api/json/v1/1/'}),
    endpoints: builder => ({
        getRecipesBySearch : builder.query({
            query : (search)=>`search.php?s=${search}`
        }),
        getRecipesByCategory : builder.query({
            query: (category)=>`filter.php?c=${category}`
        }),
        getRecipeById : builder.query({
            query: (id)=>`lookup.php?i=${id}`
        }),
        getCategories : builder.query({
            query: ()=>`categories.php`
        })
    })
})

export const {useGetRecipesBySearchQuery, useGetRecipesByCategoryQuery, useGetRecipeByIdQuery, useGetCategoriesQuery} = theMealDbApi