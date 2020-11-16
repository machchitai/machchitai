import React, { useState } from 'react';


const LogoBanner = (props) => {

    const title_edit= useState(props.title_logo);

    return (
        <div>
            <h1><a href="index.html">{title_edit}</a></h1>
        </div>
    );
};

export default LogoBanner;