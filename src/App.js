import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import Article from "./components/Article";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
const Wrap = styled.div`
  background-color: #e9a6a6;
  height: 100%;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
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
      console.log(article);
    },
    [subreddit]
  );

  return (
    <Wrap>
      <GlobalStyle />
      <Wrapper>
        <SideBar />
        <Container>
          <h1>All in One</h1>{" "}
          {list.map((item) => {
            console.log(item);
            return (
              <>
                <Title> {item.data.title}</Title>
                <div>
                  Reddit {item.data.ups} ups by {item.data.author}{" "}
                  {item.data.num_comments} comments
                </div>
              </>
            );
          })}
        </Container>
      </Wrapper>
    </Wrap>
  );
}
export default App;
