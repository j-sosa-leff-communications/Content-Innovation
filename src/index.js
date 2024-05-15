import React from "react";
import ReactDOM from "react-dom/client";
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "./horizontal-scroll";
import Accordion from "./Accordion/accordion";
import "./index.css";
import "./animations.css";


import header1 from "./Images/header-1.jpeg";
import header2 from "./Images/header-2.png";
import header3 from "./Images/header-3.jpeg";
import header4 from "./Images/header-4.png";
import conclusion from "./Images/Conclusion.png";

import voice1 from "./Images/VisualVoice/Build Momentum.png"
import voice2 from "./Images/VisualVoice/Change perspective.png"
import voice3 from "./Images/VisualVoice/Clarify complexity.png"
import voice4 from "./Images/VisualVoice/Convey meaning.png"
import voice5 from "./Images/VisualVoice/Create excitement.png"
import voice6 from "./Images/VisualVoice/Elevate brands.png"
import voice7 from "./Images/VisualVoice/Establish leadership.png"
import voice8 from "./Images/VisualVoice/Foster understanding.png"
import voice9 from "./Images/VisualVoice/Gain support.png"
import voice10 from "./Images/VisualVoice/Generate energy.png"
import voice11 from "./Images/VisualVoice/Illuminate intelligence.png"
import voice12 from "./Images/VisualVoice/Move mountains.png"
import voice13 from "./Images/VisualVoice/Shift thinking.png"
import voice14 from "./Images/VisualVoice/Solidify trust.png"
import voice15 from "./Images/VisualVoice/Touch hearts.png"
import voice16 from "./Images/VisualVoice/Transmit belief.png"
import titleImage from "./Images/gradient-title.png";

import chart1 from "./Images/charts/visual.png";
import chart2 from "./Images/charts/short-form-text.png";
import chart3 from "./Images/charts/multimedia.png";
import chart4 from "./Images/charts/long-form-text.png";


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);



const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #ffffff;
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
  background-color: #ffffff;
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
  return <div className="header page" id="header-1">
            <img loading="eager" src={ header1 } alt=""/>
            <h2>What's up with thought leadership?</h2>
          </div>
}

const App = () => (
  <>
    <GlobalStyle />
    <Main>
      <BumperSection>
        <div className="voices-container">
          <img className="voice" id="voice1" src={ voice1 } alt="" />
          <img className="voice" id="voice2" src={ voice2 } alt="" />
          <img className="voice" id="voice3" src={ voice3 } alt="" />
          <img className="voice" id="voice4" src={ voice4 } alt="" />
          <img className="voice" id="voice5" src={ voice5 } alt="" />
          <img className="voice" id="voice6" src={ voice6 } alt="" />
          <img className="voice" id="voice7" src={ voice7 } alt="" />
          <img className="voice" id="voice8" src={ voice8 } alt="" />
          <img className="voice" id="voice9" src={ voice9 } alt="" />
          <img className="voice" id="voice10" src={ voice10 } alt="" />
          <img className="voice" id="voice11" src={ voice11 } alt="" />
          <img className="voice" id="voice12" src={ voice12 } alt="" />
          <img className="voice" id="voice13" src={ voice13 } alt="" />
          <img className="voice" id="voice14" src={ voice14 } alt="" />
          <img className="voice" id="voice15" src={ voice15 } alt="" />
          <img className="voice" id="voice16" src={ voice16 } alt="" />
        </div>
      <div className="gradient">
        

        

        <div className="column-align" id="gradient-1">
            <h3>Thought leadership is everywhere.</h3>
            <h4>(SCROLL)</h4>
        </div>
        <div id="gradient-2">
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
            <div className="page column-align" id="page1">
              <h1>The content (r)evolution</h1>
            <img className="titleImage" src={ titleImage } alt="hands holding an open book" />
            </div>
            <Page2 />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
        <div className="body">
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
            <div className="body page" id="body-end">
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
            <div className="header" id="page-2">
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
      <div className="body">
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
            
            <img loading="eager" src="" alt=""/>
        </div>
        <div className="charts">
          <div className="chartContainer">
            
          <img id="chart1" className="chart active" src={ chart1 } alt="" />
          <img id="chart2" className="chart" src={ chart2 } alt="" />
          <img id="chart3" className="chart" src={ chart3 } alt="" />
          <img id="chart4" className="chart" src={ chart4 } alt="" />
          </div>
          <div className="chartSelector">
            <h3 id="chart1text" className="active" onClick={ open1 }>Visual (1.2%)</h3>
            <h3 id="chart2text" onClick={ open2 }>Short-form text (17.4%)</h3>
            <h3 id="chart3text" onClick={ open3 }>Multimedia (24.1%)</h3>
            <h3 id="chart4text" onClick={ open4 }>Long-form text (53%)</h3>

          </div>
        </div>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <div className="body page" id="body-end">
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
            <div className="header page" id="header-2">
              <img loading="eager" src={ header2 } alt=""/>
              <h2>Why innovate?</h2>
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
        <div className="body">
          <p>
            Consumers have embraced an
            attention economy, moving away
            from slow, deep consumption toward
            quick dopamine hits. That’s how
            newspapers lost ground to newsfeeds
            to X (Twitter). Albums to singles to
            TikToks. Films to videos to reels. Yet
            more than half of all thought
            leadership is text-based and runs
            more than 1,000 words; a quarter of
            those are reports running to several
            thousands of words. So, what gives?
          </p>
          <p>
            McKinsey & Company’s global
            editorial director, Lucia Rahilly, told us.
            “Many companies and thought leaders
            think they need to follow those genre
            conventions, which—for better or
            worse—has come to affect both how
            thought leadership is created and
            how it is assessed.”
          </p>
          <p>
            Those conventions are easily
            identifiable: thought leadership
            should be long, analytical, aimed
            squarely at senior leaders, and reflect
            the seriousness of the subject matter
            and its authors. To be fair, that’s often
            justified and even demanded: 46% of
            respondents to
            a content marketing
            survey in 2022
            said research reports
            produced the best business results,
            closely followed by 43% citing
            e-books and books.
          </p>
        </div>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <div className="body page" id="body-end">
              <p>
                The challenge for organizations isn’t
                that these conventions should be
                rejected—the default format for
                thought leadership emerged for good
                reason. It’s about reconciling the
                ongoing need for relatively lengthy,
                text-based thought leadership with
                both the changing demands of
                audiences and the evolving objectives
                of the content itself. That’s a tension
                many struggle with. One industry
                leader told us peers remained “a bit
                precious” about thought leadership:
                protective about how it looked, its
                tone, and where it appeared. Yet the
                reality is thought leadership is today
                about much more than a content-
                based demonstration of an author’s
                knowledge or a company’s expertise.
              </p>
            </div>
            <div className="header page" id="header-3">
              <div className="title">
              <h2>“You can have really good editorially driven, audience-focused thought leadership. It’s still marketing. What are the three reasons to create content?</h2>
              <h2>
              To drive revenue.
              </h2><h2>
To drive relationships.
</h2><h2>
To drive your reputation.
</h2><h2>
All of those are marketing.”
              </h2>
              <h4>GLOBAL HEAD OF CONTENT</h4>
              </div>
              <img loading="eager" src={ header3 } alt=""/>
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>

      <HorizontalSection>
        <HorizontalScroll>          
          <CardsContainer>
            <div className="page">
            
            </div>
            
            <div className="header page" id="header-4">
              <img loading="eager" src={ header4 } alt=""/>
              <h2>Where to now?</h2>
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
        <div className="body">
          <p>
            From something of a cottage
            industry a decade ago, the world of
            thought leadership has exploded.
            The sheer volume of content
            published is staggering—when we
            sought to analyze content published
            by ten organizations in 2023, we
            quickly realized we had to use a
            random sample of around 100 pieces
            of content published by each.
            That’s because just one of those
            organizations alone published
            more than 1,000 pieces of content
            last year.
          </p>
          <p>
            This thought leadership arms race
            risks being accelerated exponentially
            by the advent of AI and its ability to
            make the crafting of serviceable
            content so much easier. Yet we
            believe AI could have a different,
            more positive impact by elevating the
            impact and value of truly distinctive
            content—the kind of content AI
            currently can’t create on its own. Our
            content innovation research identified
            four clear steps for how organizations
            can continue evolving their thought
            leadership efforts.
          </p>
        </div>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>          
          <CardsContainer>
            <div className="page">
              <Accordion></Accordion>
            </div>
            <div className="header page" id="conclusion">
              <img loading="eager" src={ conclusion } alt=""/>
              <div className="title">
                <h2>The world’s getting faster and attention spans shorter. While longer thought leadership has its place, more needs to be done to provide users with sharper, innovative content. “I think the intro and two, three paragraphs—that’s all you’re going to get a lot of the time,” one content leader said. “And if that’s all someone reads, you need give them enough to walk away with the impression, ‘They’re on it, and I learned something.’”</h2>
              </div>
              
            </div>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
    </Main>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



function open1() {

  var chart1img = document.getElementById("chart1");
  var chart2img = document.getElementById("chart2");
  var chart3img = document.getElementById("chart3");
  var chart4img = document.getElementById("chart4");
  
  var charttext1 = document.getElementById("chart1text");
  var charttext2 = document.getElementById("chart2text");
  var charttext3 = document.getElementById("chart3text");
  var charttext4 = document.getElementById("chart4text");

  chart1img.classList.add("active");
  chart2img.classList.remove("active");
  chart3img.classList.remove("active");
  chart4img.classList.remove("active");
  charttext1.classList.add("active");
  charttext2.classList.remove("active");
  charttext3.classList.remove("active");
  charttext4.classList.remove("active");
}
function open2() {
  
var chart1img = document.getElementById("chart1");
var chart2img = document.getElementById("chart2");
var chart3img = document.getElementById("chart3");
var chart4img = document.getElementById("chart4");

var charttext1 = document.getElementById("chart1text");
var charttext2 = document.getElementById("chart2text");
var charttext3 = document.getElementById("chart3text");
var charttext4 = document.getElementById("chart4text");


  chart1img.classList.remove("active");
  chart2img.classList.add("active");
  chart3img.classList.remove("active");
  chart4img.classList.remove("active");

  
  charttext1.classList.remove("active");
  charttext2.classList.add("active");
  charttext3.classList.remove("active");
  charttext4.classList.remove("active");
}
function open3() {
  
var chart1img = document.getElementById("chart1");
var chart2img = document.getElementById("chart2");
var chart3img = document.getElementById("chart3");
var chart4img = document.getElementById("chart4");

var charttext1 = document.getElementById("chart1text");
var charttext2 = document.getElementById("chart2text");
var charttext3 = document.getElementById("chart3text");
var charttext4 = document.getElementById("chart4text");
  chart1img.classList.remove("active");
  chart2img.classList.remove("active")
  chart3img.classList.add("active")
  chart4img.classList.remove("active")
  charttext1.classList.remove("active");
  charttext2.classList.remove("active");
  charttext3.classList.add("active");
  charttext4.classList.remove("active");
}
function open4() {
  var chart1img = document.getElementById("chart1");
  var chart2img = document.getElementById("chart2");
  var chart3img = document.getElementById("chart3");
  var chart4img = document.getElementById("chart4");
  
  var charttext1 = document.getElementById("chart1text");
  var charttext2 = document.getElementById("chart2text");
  var charttext3 = document.getElementById("chart3text");
  var charttext4 = document.getElementById("chart4text");
  chart1img.classList.remove("active");
  chart2img.classList.remove("active")
  chart3img.classList.remove("active")
  chart4img.classList.add("active")

  charttext1.classList.remove("active");
  charttext2.classList.remove("active");
  charttext3.classList.remove("active");
  charttext4.classList.add("active");
  
};
