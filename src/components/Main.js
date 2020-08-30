import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'

//TODO:
// 1. figure out what sections I need to write:
// - about me; DONE
// - work experience/journey;
// - why I want to work with Podyssey;
// - why Podyssey would want to work with me;

const StyledDiv = styled.div`
  margin-left: 30%;
  padding: 5%;
  h3 {
    color: ${props=>props.theme.color.mermista}
  }
  ol{
    list-style-type: lower-alpha;
  }
  a {
    text-decoration: none;
  }
  a:link,
  a:visited {
    color: ${props => props.theme.color.podysseyPink}
  }
  a:hover {
    color: ${props => props.theme.color.mermista}
  }  
  a
  .intro {
    border: 5px solid ${props => props.theme.color.podysseyPink};
    padding: 5%;
    border-radius: 20px;
  }
  .react-player {
    margin: auto;
    justify-self: center;
    max-width: 700px;
  }
  @media(max-width: 1024px) {
    margin-left: 0;
    .react-player {
      max-width: 300px;
      max-height: 200px;
    }
  }
  
`;
const CoverLetter = () => {
  return (
    <StyledDiv>
      <div className="intro">
      <p>
        Hi Melody and Danny, 
        </p>
        <p>Thanks for taking the time to read my application. I thought about
        submitting a traditional resume like you asked, but I wanted to create an opportunity where
        I can show you the thoughts, values, and skills that make up who I am without the
        constraints of a tired and clichéd form. More importantly, I wanted a chance to tell you my
        story. </p>
        <p>After all, half the intrigue of a good podcast is in its storytelling.
      </p>
      <p>I also made an audio recording of this resume if you want to hear me talk about why you want to work with me instead of reading about it. I figured the best way to get through to people who love podcasts is through the ear. Happy reading/listening!
      </p>
      <ReactPlayer className="react-player" url="https://soundcloud.com/brass_xavier/podyssey_resume"/>
      <p>Still want to read a traditional resume? <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1igM6Yf56JBBfnSGJcrbeprVnmpS3VH6jGbqC-RDT2Lg/edit?usp=sharing">Click here</a>.</p>
      </div>
      <h3>About Me</h3>
      <p>
        Language has always been one of my deepest obsessions. I'm endlessly fascinated by the ways
        in which words and the worlds we build with them can bring us together, drive us apart, and,
        in its unique paradoxical logic, elicit the very emotions in us that we'd experience
        differently if we didn't have the language with which to name them. This fascination resulted in my
        pursuit of an undergraduate degree in English Literature at the University of Toronto
        (2014), followed by a masters degree in English Language and Literatures at the University
        of British Columbia (2018). More importantly, it fuels my love of podcasts.
      </p>
      <h3>Why I want to work for Podyssey</h3>
      <p>       
        I want to work for Podyssey for a lot of different reasons, but a big one is simply that I want to work with people who not only conceptualized something like GoodReads for podcasts, but have the skills to bring it to life. One can derive from the idea and functionalities of Podyssey that the creators must:
        </p>
        <ol>
          <li>really like podcasts</li>
          <li>care about the dissemination of knowledge, ideas, and good storytelling</li>
          <li>have a passion for wanting to bring like-minded people together through the power of language</li>
        </ol>
<p>
        These, in addition to wanting to work in an environment that reflects these values, are all things I value. 
        </p>
        <h3>Work Experience</h3>
        <p> 
 I voluntarily left a developer position in June amidst the chaos of the pandemic and the waves of rightful outrage against the white supremacist oppression of BIPOCs. I wanted to take some time off to give myself the space to reconnect with myself and the things I value, as well as figure out how I can do more to help shape the tomorrow I want to see.</p>
 <p>In late July, I became co-editor for Chinatown Stories, an annual publication that, as its title implies, features the voices of NGOs, community elders, artists, and other folks for whom Chinatown is home, culturally, emotionally, and literally. Along with my co-editor, I'm responsible for the curation of community stories of resilience in Chinatown in spite of the tragedies of COVID-19 and the racism in its wake. I'm also responsible for the overall design of the publication, as well as programming its digital version.</p>
       <p>In addition to my degrees in English language and literatures, I have almost 10 years (January 2011 - present) of writing, editing and copy-editing experience. Humanities courses are graduation requirements for all undergraduate students at most universities, and freelance editing work has served me well.</p>
       <p>I spent seven years in the Royal Canadian Naval Reserves (June 2009 - October 2016), five of which as a naval musician. Here, I dabbled as the naval band's communications specialist, and convinced my commanding officer to allow me to promote the band's events and concerts through social media channels. As result of my work, HMCS YORK band's online engagement grew by 500% within 6 months, and event attendance more than doubled.</p>
       <p>I carried what I learned with the military to my work as the Graduate Career Development Assistant (Sept 2018 - Feb 2019) at UBC, where I continued to use social media as well as UBC's internal communications channels to promote services and programs to students, staff, and community stakeholders. My work resulted in a 300% growth for attendance at Career Centre events.</p>
       <p>This might be the point where you're wondering where my 2-3 years of digital marketing experience is. Truth be told, I've never actually worked in a position that's solely dedicated to digital marketing. But this only means that I'll need some time to get used to its vocabulary. Whether it's copy-writing, research, project management, report-writing, online engagement, or other communications experience that you're looking for, I've done it all. I just haven't held positions that call these experiences, collectively, "digital marketing".</p>
       <p>I've begun to listen to podcasts and read books about design and digital marketing to make sure I remain competitive as a candidate. By the time October 1st rolls around, you can bet I'll be ready to intensify my learning.</p>
        
      <h3>Why I made this React App instead of writing you a resume</h3>
      <p>
        I wanted to create my resume like this to demonstrate to you that:</p>
        <ul>

<li>I want to stretch my existing skill-sets, do work that I find meaningful, and grow with groups of like-minded people through the process</li>

<li>When I choose to do something, I choose to do so with 100% effort and 200% thoughtfulness. I didn't want to submit just any application, because I don't want to work for Podyssey like I want to work for just any other organization</li>

<li>I have the creativity to see beyond the box, and the matching capability to execute my vision</li>

<li>Working for something like Podyssey is a long game for me. I chose to complete and submit this application in spite of certain rejection to make sure you remember me not only for my talent and skills, but also for my tenacity and work ethic.</li> 
        </ul>
        <p>Thanks for reading and/or listening. I'll be sure to be ready for your next round of hiring! <span aria-label="smiley face" role="img">😁</span>
</p>

      
    </StyledDiv>
  );
};

export default CoverLetter;
