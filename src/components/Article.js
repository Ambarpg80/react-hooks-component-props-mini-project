import React from 'react';

function Article(props){ 
   // console.log(props)
    return( 
            <article> 
                <h3>{props.title}</h3>
                <small>{props.date ? props.date : "January 1, 1970" }</small>
                <p>{props.preview}</p> 
            </article>
    )
}   

export default Article
// key={props.id}