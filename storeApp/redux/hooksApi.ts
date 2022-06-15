import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GET_BOOKS, GET_OFFERS } from '../api/routes';
import { Book } from '../models/Product';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({baseUrl: GET_BOOKS}),
    endpoints: (builder) => ({
        getBooks: builder.query<any, Book[]>({
            query: () => "books"
        }),
    }),
});

export const offersApi = createApi({
    reducerPath: 'offersApi',
    baseQuery: fetchBaseQuery({baseUrl: GET_OFFERS}),
    endpoints: (builder) => ({
        getOffers: builder.query({
            query: (bookId) => ({ url: `/${bookId}/commercialOffers`}),
        }),
    }),
});

export const { useGetBooksQuery } = bookApi;
export const { useGetOffersQuery } = offersApi;
