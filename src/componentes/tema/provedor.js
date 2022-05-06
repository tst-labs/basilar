import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import temaTST from './tema-tst';

const ProvedorTemaTST = (props) => {
    return <ThemeProvider theme={temaTST} > {props.children} </ThemeProvider>;
};

export default ProvedorTemaTST;