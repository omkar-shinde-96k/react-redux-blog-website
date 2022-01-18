import React, { useState } from 'react';
import '../App.scss'
import { Input, ariaLabel, Alert, Snackbar, Select, Button, Box, MenuItem, TextField, Container, TextareaAutosize, InputLabel, FormControl } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../actions/postActions";


export const CreatePost = () => {

    const categorystore = useSelector(state => state.CategoryData);
    const dispatch = useDispatch();

    const [state, setState] = useState({ title: "", discription: "", category: "" });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <>
            <br />
            <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ boxShadow: 4, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  marginTop: '10px' }}>
                    <br />
                    <TextField
                        id="outlined-name"
                        label="Title"
                        value={state.title || ""}
                        name="title"
                        onChange={handleChange}
                        sx={{ width: '90%' }}
                    />
                    <br />

                    <TextareaAutosize
                        maxRows={4}
                        placeholder={`  Discription`}
                        value={state.discription || ""}
                        style={{ width: ' 90%', minHeight: 200 }}
                        name="discription"
                        onChange={handleChange}

                    />

                    <br />

                    <FormControl sx={{ width: '90%' }} >
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.category || ""}
                            label="Age"
                            name="category"
                            onChange={handleChange}
                        >
                            {categorystore.map((curr) => (
                                <MenuItem key={curr.id} value={curr.category}>{curr.category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl> <br />
                    <Button
                        onClick={() => {
                            dispatch(addPost(state))
                            setState({})
                            handleClick()
                        }
                        } variant="outlined"> Submit </Button>

                    <br />

                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            New Post Created Successfully
                        </Alert>
                    </Snackbar>
                </Box>
            </Container>
        </>
    );
}

const style = {

}