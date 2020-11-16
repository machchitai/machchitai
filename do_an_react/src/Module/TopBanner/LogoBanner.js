import React from 'react';

const LogoBanner = (props) => {
    return (
        <div>
            <h1><a href="index.html">{props.title_logo}</a></h1>
        </div>
    );
};

export default LogoBanner;