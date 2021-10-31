import React, { useState, useEffect } from "react";

function Main() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState(" ");
  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [subreddit]);
  return <div></div>;
}

export default Main;
