import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Book } from 'models/Models';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Badge } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useCartComputer from '../hooks/useCartComputer';
import { StoreProvider, store, useStore } from "store/StoreApp";

interface CartModal {
    products: any[];
    open: boolean;
    onClose: () => void;
    anchorEl: null | HTMLElement;
    deleteProduct: (book: typeof Book) => void;
}


export default function CartModal({products, open, onClose, anchorEl, deleteProduct}: CartModal) {

    const {total}: any = 0 < products.length ? useCartComputer(products) : 0;

    const removeProduct = (book: typeof Book) => {
        let items = [];
        
        items = products.map((item: typeof Book) =>  { 
            if(book.isbn === item.isbn){

                return {...book, qty: (item && item?.qty )? item.qty - 1 : 0}
            }

            return item;
        
        }).filter((item: typeof Book) =>  0 < item.qty);

        deleteProduct(items);
    }
    
    return (
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => onClose()}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          { 0 < products.length && products.map((book: any) => (
            <TableRow
              key={book.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell component="th" scope="row" > {book.title}</TableCell>
              <TableCell align="right">{book.qty}</TableCell>
              <TableCell align="right">{book.price}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => removeProduct(book)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <DeleteIcon />
                </IconButton>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          

        <MenuItem >Total: { (typeof total === 'number') ? new Intl.NumberFormat("fr-FR",{
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
         }).format(total) : 0}</MenuItem>
      </Menu>
    )
}
