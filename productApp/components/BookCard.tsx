import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { Book } from './Products/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { useStore, RootState } from "store/StoreApp";


interface BookCard {
  book: Book;
}

export default function BookCard({book}: BookCard) {
    const dispatch = useDispatch();
    const { books, fetchProducts, useGetBooksQuery,addToCart, cart } = useStore();
    const {cart: itemsInCart} = cart;


    const [open, setOpen] =  useState(false);

    const onAddToCart = () => {
     
      let cartItems = itemsInCart;
      const exist = cartItems.find((item: Book) => item.isbn === book.isbn)
      if(exist){
        cartItems = cartItems.map((item: Book) => item.isbn === book.isbn ? {...item, qty: item.qty +1} : item)
      
      }else{
        cartItems = [...cartItems, {...book, qty: 1}];
      }
      addToCart(cartItems);
      setOpen(true);
    }
    
    const handleClose = () => {
      setOpen(false);
    }

    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={book.cover}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography noWrap variant="body2" color="text.secondary">
              {book.synopsis}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onAddToCart()}>Add to cart</Button>
            <Button size="small"> {book.price} euros</Button>
          </CardActions>
      </Card>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={(handleClose)}
        message="Livre ajouté au pannier"
      />
    </>
    )
}
