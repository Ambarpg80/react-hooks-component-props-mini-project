import React from 'react';



function About(props){
//    console.log(props)
  function picture(){
    return (props.image ? props.image : "https://via.placeholder.com/215" )}
    return(
        <aside>
            <img src={picture()} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}
export default About