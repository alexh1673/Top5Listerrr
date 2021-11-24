import { useContext } from 'react'
import Top5Item from './Top5Item.js'
import List from '@mui/material/List';
import { Typography } from '@mui/material'
import { GlobalStoreContext } from '../store/index.js'
import { Box } from '@mui/system';
import ListBox from './ListBox.js';

function DropBox() {

    const style = {
        height: "300px"
    };

    return(<Box style = {style}>
        <ListBox/>
    </Box>)
}

export default DropBox; 