import { useState, useEffect } from "react";
import axios from "axios";
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
const getStory = async (id) => {
  const post = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return post;
};
function HackerNews() {
  const [story, setStory] = useState([]);
  const [articlesId, setArticlesId] = useState([]);
  let [list, setList] = useState([]);

  useEffect(async function fetchData() {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/beststories.json"
    );
    const story = await response.json();
    console.log(story);
    setList(story);
  }, []);

  return (
    <Container>
      <h1>Hacker News</h1>
    </Container>
  );
}

export default HackerNews;
