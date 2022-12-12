import React from 'react';
import Article from './Article.js';

function ArticleList(props){
      console.log(props.posts)
    const posts = props.posts
    // console.log(posts)
const showPosts = posts.map(prop => <Article key={prop.id} title={prop.title} date={prop.date} preview={prop.preview} /> )


return( <main > {showPosts} </main>)  
    

}
export default ArticleList 
// 