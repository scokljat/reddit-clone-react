import { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import Article from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState(" ");
  let [list, setList] = useState([]);

  useEffect(
    async function fetchData() {
      const response = await fetch("https://www.reddit.com/r/popular.json");
      const articles = await response.json();
      const article = articles.data.children;
      setList(article);
    },
    [subreddit]
  );

  return (
    <div>
      <SideNav />
      <h1>Articles</h1>
      {list.map((item) => {
        console.log(item);
        return <div>{item.data.title}</div>;
      })}
    </div>
  );
}
export default App;
