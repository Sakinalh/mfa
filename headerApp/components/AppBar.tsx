import React, {useState, useEffect} from 'react';
import { Book } from 'models/Models';
import AppBar from '@mui/material/AppBar';
import { IconButton, Badge } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useStore } from "store/StoreApp";
import { Toolbar, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CartModal from './CartModal';

export const CustomAppBar = () =>  {
    const { books, setSearchParam, cart, removeFromCart } = useStore();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const {cart: cartItems} = cart;

    const navigate =  useNavigate();
    const onNavigate = (route: string) => {
        navigate(route);
    }
    const [totalCartIem, setTotalCartIem] = useState(0);

    const countTotalItems = () => {
        let total: number = 0;
        (cartItems && cartItems.length > 0) ? cartItems.forEach((item: typeof Book) => total = total + item.qty) : 0;
        return total;
    }

    useEffect(() => {
        if(cart){
            setTotalCartIem(countTotalItems())
        }
     });

     const convertedBook = (): {label: string, id: number}[] => {
        return  books.products.length > 0 ?  books.products.map((book: typeof Book) => ({ label: book.title, id: book.isbn})) : [];
    }

    const onSearchValueChange = (e: React.SyntheticEvent, value: any, reason: string) => {
        const searchParam = typeof value === 'string' ? value : value.label.toLowerCase();
        setSearchParam(searchParam);
    }

    const deleteProductFormCart = (books: typeof Book[] )=> {
        removeFromCart(books)
    }

    return (
        
        <AppBar position="static">

        <Toolbar>
            <IconButton onClick={() => onNavigate('products')} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuBookIcon />
            </IconButton>
           
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Henri Potier Boutique
           </Typography>
           <Autocomplete
                disablePortal
                id="combo-box-demo"
                onInputChange={onSearchValueChange} 
                onChange={onSearchValueChange}    
                options={convertedBook()}
                sx={{ width: 300, marginRight: 50 }}
                renderInput={(book) => <TextField {...book} placeholder="Rechercher" />}
            /> 


            <Badge sx={{marginRight: 5}} onClick={handleClick}  badgeContent={totalCartIem} color="secondary">
                <ShoppingCartIcon  />

            </Badge>

            <CartModal open={open} onClose={handleClose} anchorEl={anchorEl} products={cartItems} deleteProduct={deleteProductFormCart}/>

        </Toolbar>
        </AppBar>
    )
}
