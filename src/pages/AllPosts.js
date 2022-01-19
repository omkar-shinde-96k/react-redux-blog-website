import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardHeader, Button, Avatar, CardContent, Typography, IconButton, CardMedia, CardActions, Collapse } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePost } from "../actions/postActions";

export const AllPosts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.PostReducer) || [];
    let { catId } = useParams();
    console.log("cat id", catId);
    console.log("allposts", allPosts);

    if (catId) {
        var mypost = allPosts.filter(post => {
            if (post.category == catId) {
                return post
            }
        })
    } else {
        var mypost = allPosts;
    }

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="outlined" style={{ width: '90%' }}>
                    {catId ? `${catId}` : `All Posts`}
                </Button>
            </div>

            <br />

            {mypost.map((curpost, index) => (
                <>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Card style={{ width: '90%' }} sx={{ boxShadow: 10 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        O
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Omkar Shinde"
                                subheader="Today"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://www.wallpapertip.com/wmimgs/134-1348233_wallpaper-code-programming-it-technology-1080p-programming-backgrounds.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {curpost.title}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <DeleteIcon onClick={() => dispatch(deletePost(curpost.id))} />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        {curpost.discription}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>

                    <br />
                    <br />
                </>
            ))
            }
        </>
    )
}
