import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "./horizontal-scroll";
import "./index.css";
import header1 from "./Images/header-1.jpeg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #efefef;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  text-align: center;
  background-color: #efefef;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

function Page2() {
  return <div class="header page" id="header-1">
            <img src={header1} alt=""/>
            <h2>What's up with thought leadership?</h2>
          </div>
}

const App = () => (
  <>
    <GlobalStyle />
    <Main>
      <BumperSection>
      <div class="gradient">
        <div class="column-align">
            <h3>Thought leadership is everywhere.</h3>
            <h4>(SCROLL)</h4>
        </div>
        <div>
            <h3>It's too long, too academic, and asks too much of its audience.</h3>
        </div>
        <div id="gradient-3">
            <h3>It's everything and nothing; a dinosaur about to be wiped out by the AI meteorite.</h3>
        </div>
        <div id="gradient-4">
            <h3>Right?</h3>
        </div>
    </div>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <div class="page" id="page1">
              <h1>The content (r)evolution</h1>
            </div>
            <Page2 />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
        <div class="body">
            <p>
                It’s been thirty years since that term
                was coined by Joel Kurtzman, the
                founding editor of strategy+business,
                who declared thought leaders had
                “distinctively original ideas, unique
                points of view and new insights.”
            </p>
            <p>
                Seen much of that lately?
            </p>
        </div>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <div class="body page" id="body-end">
              <p>
                Thought leadership seems
                everywhere and published by
                everyone, making it difficult for even
                truly distinctive insights to break
                through. And while it has evolved into
                an increasingly popular form of
                content marketing, thought
                leadership clings stubbornly to
                several core beliefs.
              </p>
            </div>
            <div class="header" id="page-2">
                <div>
                    <h2>It’s a different form of marketing that
                        doesn’t seek to overtly sell anything.
                    </h2>
                    <h2>
                        It requires a lot of words because it deals with complex issues.
                    </h2>
                </div>
                <div>
                    <h2>
                        Its sophisticated audience of top executives is willing to read all those words.
                    </h2>
                    <h2>
                        Its gravitas means it doesn’t belong on certain channels.
                    </h2>
                </div>
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
      <div class="body">
            <p>We sought to find out if any or
                all of these were true. We were
                wondering if anyone actually spends
                20 minutes reading a 5,000-word
                report. If content is truly consumed
                by CEOs and senior leaders. And if
                thought leadership is, by virtue of the
                complex ideas it often presents, a
                fundamentally different form
                of content.
            </p>
            <p>
                Our starting point? Since everyone
                is what they publish—thought
                leadership presents the public face
                of a company’s intellectual
                horsepower—we looked at content
                released in 2023 by a sample of
                major producers. Here’s what
                we found.
            </p>
            <img src="" alt=""/>
            <p>
                A decade into thought leadership’s
                evolution from niche to mass market,
                companies still love the written
                word—and produce lots of them. Yet
                the head of content at one major
                thought leadership publisher flatly
                told us: “People just don't read long
                articles.” Why does so much thought
                leadership still assume they do?
            </p>
        </div>
      </BumperSection>
    </Main>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
