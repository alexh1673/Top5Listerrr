import { useContext } from 'react'
import Top5Item from './Top5Item.js'
import List from '@mui/material/List';
import { Typography } from '@mui/material'
import { GlobalStoreContext } from '../store/index.js'
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/system';

function CommentBox(props) {
    const {store} = useContext(GlobalStoreContext);
    console.log(props.idNamePair)
    let editItems = "";
    if(props.idNamePair){
        editItems = 
            <List sx={{ width: '50%',height : "275px", bgcolor: 'blue' }}>
                {
                    props.idNamePair.comments.map((item) => (
                        <Box style={{
                            fontSize: '48pt',
                            width: '100%',
                            height: '55px',
                            back: 'black'
                        }}>
                            {item} nice guy
                        </Box>
                    ))
                }
            </List>;
    }

    return(
        <div id="top5-CommentBox">
            {editItems}
        </div>
    )
}

export default CommentBox;