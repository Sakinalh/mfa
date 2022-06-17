import {useState, useEffect} from 'react'
import * as React from "react";

import BookCard from "../BookCard";
import GridContainer from '../GridContainer';
import { Box, Skeleton } from '@mui/material';
import { useStore } from "store/StoreApp";
import { Book } from 'models/Models';

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
    const [booksToDisplay, setBookToDisplay] = useState<Book[] | null>(books.products);

    const { data, isLoading, isSuccess } = useGetBooksQuery(null,  {
        pollingInterval: 90000,
        refetchOnMountOrArgChange: false,
        skip: false,
      });

    if(isSuccess) {
        setProducts(data);
    }

    useEffect(() => {
        setBookToDisplay(data);
    }, [data])

    useEffect(() => {
        books && books.products && setBookToDisplay(books.products.filter((book: typeof Book)=> book.title.toLowerCase().includes(books.searchParam)));
    }, [books.searchParam])

    return (
        <GridContainer>

            <GridContainer>
                {(isLoading ? Array.from(new Array(6)) :  booksToDisplay).map((book: Book, index: number) => { 
                    return book ? <BookCard key={index} book={book} /> :
                                <Box key={index}>
                                    <Skeleton variant="rectangular" width={210} height={118} />
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>            
                            }
                 )}
            </GridContainer>
        </GridContainer> 
    )
}
