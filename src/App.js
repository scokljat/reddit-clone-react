import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Reddit from "./pages/Reddit";
import HackerNews from "./pages/HackerNews";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
function App() {
  return (
    <Wrap>
      <GlobalStyle />

      <BrowserRouter>
        <header>
          <SideBar />
        </header>
        <main>
          <Routes>
            <Route path="/" />
            <Route path="/reddit" element={<Reddit />} />
            <Route path="/hn" element={<HackerNews />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Wrap>
  );
}

export default App;
