import React from 'react'
import BookCard from "../BookCard";
import GridContainer from '../GridContainer';
import { Box, Skeleton } from '@mui/material';
import { useStore } from "store/StoreApp";


export interface Book {
    isbn: string;
    price: number;
    cover: string;
    synopsis: string[];
    title: string;
    qty?: number;
}

export default function ProductList() {
    const { books, setProducts, useGetBooksQuery,addToCart, cart } = useStore();

    const { data, error, isLoading, isSuccess } = useGetBooksQuery(null,  {
        pollingInterval: 90000,
        refetchOnMountOrArgChange: false,
        skip: false,
      });

    if(isSuccess && 0 === books.products.length) {
        setProducts(data);
    }

    return (
        <GridContainer>

            <GridContainer>
                {(isLoading ? Array.from(new Array(6)) :  data).map((book: Book, index: number) => { return book ? <BookCard key={index} book={book} /> :
                            <>
                                <Box>
                                    <Skeleton variant="rectangular" width={210} height={118} />
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>            
                            </>}
                 )}
            </GridContainer>
        </GridContainer> 
    )
}
