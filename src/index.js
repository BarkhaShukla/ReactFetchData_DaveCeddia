import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
/* import axios from "axios"; */
function Reddit() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json").then(async response => {
      //const newPosts = JSON.parse(response);
      //setPosts(newPosts)
      const a = await response.json();
      response = a.data.children;
      const result = response.map(obj => obj.data);
      //console.log(result);
      setPosts(result);
    });
    /*      .then(data => {
        console.log(data);
      }); */
  }, []);
  /* useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);

      setPosts(newPosts);
    });
  }, []);
 */
  return (
    <div>
      <h1>Reddit Example using fetch() instead of axios</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Reddit />, document.getElementById("root"));
