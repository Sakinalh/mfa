import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Book } from 'models/Models';

export default function CustomAutocomplete({books}:any){

    const _onInputChange = (e: React.SyntheticEvent, value: any, reason: string) => {
        console.log("new value", value)
    }

    const _onChange = (e: React.SyntheticEvent, value: any, reason: string) => {
    
        console.log("Onchnaeg ", value)
    }

    
    return (
                <Autocomplete
                    onInputChange={_onInputChange}
                    onChange={(event: any, newValue: string | null) => {
                        console.log(newValue);
                      }}                    
                    id="combo-box-demo"
                    options={books}
                    sx={{ width: 300 }}
                    renderInput={(book) => <TextField {...book} label="Books" />}
                /> 
          
    )
}


