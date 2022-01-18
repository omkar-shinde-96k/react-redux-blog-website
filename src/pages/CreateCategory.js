import React, { useState } from 'react';
import '../App.scss'
import { Button, Snackbar, Alert, Box, TextField, Container, FormControl } from '@mui/material';
import { addCategory } from "../actions/categoryActions"
import { useSelector, useDispatch } from "react-redux";

export const CreateCategory = () => {
    const categorystore = useSelector(state => state.CategoryData)
    const dispatch = useDispatch();

    const [Category, setCategory] = useState({ category: "" });

    const handleChange = (e) => {
        setCategory({ ...Category, [e.target.name]: e.target.value })
    }

    console.log("curr categorystore", categorystore);

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
                <Box sx={{ boxShadow: 4 }} style={styles.box} style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px', }}>
                    <br />
                    <TextField
                        id="outlined-name"
                        label="Category"
                        value={Category.category || ""}
                        name="category"
                        onChange={handleChange}
                        sx={{ width: '90%' }}
                    />

                    <br />
                    <Button
                        onClick={() => {
                            dispatch(addCategory(Category))
                            setCategory({})
                            handleClick()
                        }
                        } variant="outlined">
                        Submit
                    </Button>

                    <br />
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            New Category Created Successfully
                        </Alert>
                    </Snackbar>

                </Box>
            </Container>
        </>
    );
}

const styles = {
    box: {
    },
};