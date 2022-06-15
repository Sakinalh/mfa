import React, {useState, useEffect} from 'react';
import { Book } from 'models/Models';
import AppBar from '@mui/material/AppBar';
import { IconButton, Badge } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { StoreProvider, store, useStore } from "store/StoreApp";
import { Toolbar, Button, Typography } from '@mui/material';
import CustomAutocomplete from '../components/AutoComplete';
import Autocomplete from '@mui/material/Autocomplete';

export const CustomAppBar = () =>  {
    const { books, setProducts, useGetBooksQuery,addToCart, cart } = useStore();

    const {cart: cartItems} = cart;

    const navigate =  useNavigate();
    const onNavigate = (route: string) => {
        navigate(route);
    }
    const [totalCartIem, setTotalCartIem] = useState(0);

    const countTotalItems = () => {
        let total: number = 0;
        cartItems.forEach((item: typeof Book) => total = total + item.qty);
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

        const results = books.products.filter((book: typeof Book) => book.title.includes(value));
     
        // it is supposed to re render ProductList with filtered books    
        setProducts(results);

    }

    return (
        
        <AppBar position="static">

        <Toolbar>
            <IconButton onClick={() => onNavigate('products')} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuBookIcon />
                </IconButton>
            <Badge sx={{marginRight: 5}} onClick={() => onNavigate('basket')}  badgeContent={totalCartIem} color="secondary">
                <ShoppingCartIcon />
            </Badge>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Henri Potier Boutique
           </Typography>
           <Autocomplete
                disablePortal
                id="combo-box-demo"
                onInputChange={onSearchValueChange}     
                options={convertedBook()}
                sx={{ width: 300 }}
                renderInput={(book) => <TextField {...book} placeholder="Rechercher" />}
            /> 

          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    )
}
