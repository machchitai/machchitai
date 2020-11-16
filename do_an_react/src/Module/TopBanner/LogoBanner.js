import React, { useState } from 'react';

//dung function
const LogoBanner = (props) => {

    const [title_edit, SetTitleEdit] = useState(props.title_logo);

    setTimeout(()=>{SetTitleEdit(title_edit + ' fixed ');},5000);

    return (
        <div>
            <h1><a href="index.html">{title_edit}</a></h1>
        </div>
    );
};

export default LogoBanner;