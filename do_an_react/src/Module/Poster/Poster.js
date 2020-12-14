import React from 'react';
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      position:"fixed",
      bottom:"20px",
      left:"20px"
    },
    label: {
        textTransform: "capitalized"
    }
})  

const Poster = () => {
    const classes = useStyles();
    return (
        <div className="poster">
            <div className="container">
                <div className="poster-info">
                    <h3>Nunc cursus dui in metus efficitur, sit amet ullamcorper dolor viverra.</h3>
                    <p>Proin ornare metus eros, quis mattis lorem venenatis eget. Curabitur eget dui euismod,
                    varius nisl eu, pharetra lacus. Sed vehicula tempor leo. Aenean dictum suscipit magna vel
                    tempus. Aliquam nec dui dolor. Quisque scelerisque aliquet est et dignissim. Morbi magna quam,
                    molestie sed fermentum et, elementum at dolor</p>
                    <a className="hvr-bounce-to-bottom" href="reviews.html">Đọc thêm</a>
                </div>
            </div>
            <Fab variant="extended" color="primary" aria-label="add" classes={{
                root: classes.root
            }}
                className = "animation_button_mua_ngay animated tada"
            >
                Mua ngay
            </Fab>
        </div>
    );
};

export default Poster;