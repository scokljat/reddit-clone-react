import { useState, useEffect } from "react";
function Article(props) {
  const [title, setTitle] = useState("");
  const [ups, setUps] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState("");
  {
    props.items.map((item) => (
      <div
        key={item.id}
        title={item.title}
        ups={item.ups}
        author={item.author}
        comments={item.num_comments}
      ></div>
    ));
  }
  return (
    <div>
      {title}
      {ups}
      {author}
    </div>
  );
}

export default Article;
