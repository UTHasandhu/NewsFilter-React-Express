import React from "react";

//Simple list to render all posts given to it.
export default function PostList (props) {
    const posts = props.posts;
    if (posts.length === 0) return <p>No matching posts found.</p>;
    //return a basic list with title and body
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </li>
        ))}
      </ul>        
    );
}