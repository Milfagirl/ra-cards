import React from 'react';

export default function Card(props) {
    console.log(props);
    return (<React.Fragment>
        {props.children[0]}
        {props.children[1]}
    </React.Fragment>
    )
}