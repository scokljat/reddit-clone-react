import { differenceInHours, getHours } from "date-fns";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 15px;
  color: #3f3351;
`;
const Title = styled.div`
  font-size: 25px;
  padding: 10px 0;
`;

function Reddit() {
  const [articles, setArticles] = useState([]);
  let [list, setList] = useState([]);

  useEffect(async function fetchData() {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const articles = await response.json();
    const article = articles.data.children;

    setList(article);
  }, []);
  return (
    <Container>
      <h1>Reddit</h1>{" "}
      {list.map((item) => {
        let end = item.data.created_utc * 1000;

        return (
          <>
            <Title> {item.data.title}</Title>
            <div>
              Reddit {item.data.ups} ups by {item.data.author}{" "}
              {item.data.num_comments} comments about{" "}
              {differenceInHours(new Date(), new Date(end))} hours ago
            </div>
          </>
        );
      })}
    </Container>
  );
}

export default Reddit;
