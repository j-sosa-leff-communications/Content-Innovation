import React, { useRef, useState } from "react";
import "./accordion.css";
import { useEffect } from "react";



export default function Accordion() {
    
  useEffect(() => {

    var choiceArray = document.querySelectorAll(".choice");

    choiceArray.forEach((card) => {
        card.addEventListener("click", () => {
            choiceArray.forEach((element) => {
                element.classList.remove("expand", "unset")
                element.classList.add('small')
            }
            )
            card.classList.remove("small")
            card.classList.add('expand')
              }
            );
          }
        )
      }
    );

  return (
    <div className="container horizontal-accordion">

<div class="card choice expand bg-primary text-white mx-2">
  <div className="card-title">
    <h2>Driving revenue</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
      For a long time, many of those involved with thought
      leadership simply denied it was content marketing,
      arguing it was designed to showcase knowledge
      and it was merely a bonus if business resulted from
      its publication. Those day are gone. No one today
      denies thought leadership’s fundamental purpose is
      to drive work, even if it’s difficult to draw a straight
      line between <a href="https://g8s1dbg5ak9.typeform.com/to/IrQpsLHN?typeform-source=www.google.com" target="_blank">what’s published and the return on that
      investment</a>.
    </p>
    <p className="card-text">
      “My key metric is client conversations,” said Josselyn
      Simpson, vice president and global editorial director at
      Heidrick & Struggles. “That’s actually really powerful
      because it gives a shape to what we do. And I think for
      a lot of firms, thought leadership is meant to be the
      solution to all the intractable problems of our brand, of
      our conversations, of increasing market share. But we
      are not trying to be all things to all people.”
    </p>
    <p className="card-text">
      So what kind of thought leadership works best
      for moving users down the marketing funnel from
      awareness to consideration? It’s complicated given
      its myriad formats, channels, and audiences. Clients
      and potential clients fundamentally look to thought
      leadership for answers to specific business problems.
      For organizations with distinct products and solutions,
      a single article may be all that’s needed to convince
      someone. Yet for others, the moment they decide they
      need a company’s help may actually be the culmination
      of a long process of consuming insightful thought
      leadership, with the final tipping point nothing more
      than a social-media post hitting the right individual at
      the right moment.
    </p>
  </div>
</div>

<div class="card choice small bg-secondary text-dark mx-2">
<div className="card-title">
    <h2>Driving relationships</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
      Push most authors about why they want to publish
      thought leadership, and the fundamental reason
      usually comes down to some variation of “I just want
      something to send to clients.” In the business-tobusiness world, where what’s being sold is knowledge
      and expertise—not widgets—authors use thought
      leadership as a calling card that both opens new
      doors and provides an excuse to reopen old ones. The
      problem? Companies haven’t cracked it.
    </p>
    <p className="card-text">
      “It depends on the agility, the capability, the breadth
      of the partners, and their ability to play that kind
      game, that jujitsu sort of process,” the head of thought
      leadership at a professional-services firm told us. “That
      is not a capability that exists across the board. Thought
      leadership requires a whole bunch of stuff downstream
      and capabilities partners often just don’t have.”
    </p>
    <p className="card-text">
      One thing is certain: poor thought leadership doesn’t
      cut it. Driving relationships through being seen as a
      trusted counsel to help a client navigate difficult and
      sometimes seemingly intractable problems requires
      deep insights in specific domains. Earning the right to
      be considered within a user’s decision-making journey
      can be communicated through a traditional article
      but is increasingly able to be conveyed through sharp,
      smart commentary via blog posts, op-eds, or even
      podcasts and video. The key, though, is quality.
    </p>
  </div>
</div>

<div class="card choice small bg-secondary text-dark mx-2">
<div className="card-title">
    <h2>Driving reputation</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
    One big shift in thought leadership in recent years has
been an effort by companies to tie it more explicitly to
broader objectives around what they want to be known
for. That’s a good example of the discipline imposed
by marketing professionals: having distinctive insights
isn’t enough; those insights need to clearly align to
efforts to push an organization’s reputation in a specific,
clearly defined direction.
    </p>
    <p className="card-text">
    “We all started doing thought leadership because it felt
like it was a good idea,” another global head of content
told us of the long disconnect between what was being
published and its relevance to a company’s marketing
goals. “I felt like our business partners were doing it
already and doing it badly, and they just brought us in
to help them do it better. So that wasn’t really starting
from a strategic perspective or an objective driven
perspective.”
    </p>
    <p className="card-text">
    Driving awareness of, altering, and burnishing the
reputation of an organization requires more than
traditional articles. It demands distinctive, insightful
thought leadership that’s elevated and amplified
through multiple channels, from earned media to
events, social channels, and everything in between.
And it needs to be done in a coordinated, strategic
fashion.
    </p>
  </div>
</div>
</div>
  );
  
};


export function Accordion2() {
    
  useEffect(() => {

    var choiceArray = document.querySelectorAll(".choice2");

    choiceArray.forEach((card) => {
        card.addEventListener("click", () => {
            choiceArray.forEach((element) => {
                element.classList.remove("expand", "unset")
                element.classList.add('small')
            }
            )
            card.classList.remove("small")
            card.classList.add('expand')
              }
            );
          }
        )
      }
    );

  return (
    <div className="container horizontal-accordion">

<div class="card choice2 expand bg-primary text-white mx-2">
  <div className="card-title">
    <h2>1. Diagnose: Know where you are</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
    Every journey has a starting point. Organizations
publishing no thought leadership are a blank slate.
Many companies publish some content, but it’s
opportunistic without an underlying strategy. Still
more publish a lot but lack clear strategy, quality
guidelines, or governance around how it drives
revenue, relationships, and reputation. The first step
in evolving a company’s thought leadership efforts
is understanding where it currently stands, which
requires analysis across multiple dimensions.
“Whether it’s marketing-driven or tech-driven, we are
now held to a higher standard of accountability for the
quality of what we publish as well as the impact of
what we publish,” said Melissa Cavanaugh, the head
of content strategy at Morgan Stanley. “I think we’ve
all finally moved on from measuring the quantity of
what we publish, which was the primary metric for a
long time.”
    </p>
  </div>
</div>

<div class="card choice2 small bg-secondary text-dark mx-2">
<div className="card-title">
    <h2>2. Strategize: Pick your path</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
    An organization’s thought leadership strategy
depends on both where it starts and what it wants to
achieve. But two factors stand out above all others.
First, determining the purpose of thought leadership
efforts. Are they fundamentally about driving revenue,
relationships, or reputation? And if they are about
advancing more than one of those objectives, what’s
the order of importance? Understanding that balance
helps determine not only the critical themes of content
to be pursued but also the most effective routes for
optimizing its effectiveness.
    </p>
    <p className="card-text">
    Second, quality, quality, quality. Thought leadership
must be fundamentally distinctive and insightful if it’s
to have value for clients and potential clients—and
protect a company’s reputation. Organizations may
still have 10 pieces of content spread across formats
and channels—but it’s more effective to have those
flow from a single strong piece of thought leadership.
“Marketers understand the argument for atomized
content, and they think it can be a useful tactic,” one
head of content told us. “But, ultimately, they want a
big centerpiece. That’s what makes us credible: not
10 separate and different little things but one big thing
at the core.”
    </p>
  </div>
</div>

<div class="card choice2 small bg-secondary text-dark mx-2">
<div className="card-title">
    <h2>3. Execute: Make it happen</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
    Realizing strategic objectives around thought
leadership and driving quality are increasingly
necessary for standing out in a crowded thought
leadership environment. And both result from taking
countless actions, including creating an effective intake
process that interrogates the purpose and audience
for content, using a governance model that ensures
thought leadership aligns to broader marketing
objectives, having the editorial expertise to tease out
distinctive insights and present them in an engaging
and compelling way, and deploying the right formats
in the right channels. And everything needs to be
wrapped in a clear strategy of using thought leadership
to define, advance, and sustain conversations on
critical issues—not one-off pieces.
    </p>
    <p className="card-text">
    “I always want to be really clear about how users get
to that next step down the funnel if they want to,”
Morgan Stanley’s Cavanaugh told us. “It’s not just
about an individual piece of content. It’s about asking
where does this fall in the overall user journey? How
is somebody getting to it? Where do I want them to
go from there? We’re thinking a lot about evolving
metrics from what people do with content—the traffic,
the engagement—to what are people doing after
consuming content. Because that’s really, in the long
term, the reason we do all this in the first place.”
    </p>
  </div>
</div>

<div class="card choice2 small bg-secondary text-dark mx-2">
<div className="card-title">
    <h2>4. Measure: Track and adjust</h2>
  </div>
  <div className="card-body">
    <p className="card-text">
    Distinctive insights have been identified. Desired
results defined. The critical audience pinpointed.
Content carefully crafted, shaped for specific formats
and channels. It has been released carefully and
methodically, hewing to a campaign plan. Even with
the best of intentions, planning, development, and
execution, content often fails to perform as desired.
That’s why measuring against priority metrics is critical,
as is being willing and able to adjust to maximize the
odds of success (we’ll have more on that in the months
ahead).
    </p>
    <p className="card-text">
    “You have to be able to demonstrate that you’re
reaching an audience,” said Richard Murphy, the editor
in chief and director of global brand thought leadership
at ServiceNow. “You need conversion data; to show
where people go. We’re ultimately in the business of
using research and reporting and analysis to build trust
in our brand, in an audience that the company cares
about. That’s how you justify your budget, at the end of
the day.”
    </p>
  </div>
</div>

</div>

  );
  
};