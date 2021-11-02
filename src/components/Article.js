import { useState, useEffect } from "react";
function Article(props) {
  const [title, setTitle] = useState("");
  {
    props.items.map((item) => <div key={item.id} title={item.title}></div>);
  }
  return <div>{title}</div>;
}

export default Article;
