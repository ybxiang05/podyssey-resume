import React from "react";
import styled from "styled-components";

const StyledReadMe = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2%;
  padding: 5%;

  span {
    font-style: italic;
  }

  .traditional-resume {
    text-decoration: none;
    color: ${props => props.theme.color.wrongHordak};
    display: flex;
    border: 5px solid ${props => props.theme.color.podysseyPink};
    border-radius: 15px;
    justify-content: center;
    width: fit-content;
    padding: 10px;
    margin: auto;
    background-color: ${props => props.theme.color.podysseyPink};
  }
  .traditional-resume:hover {
    color: ${props => props.theme.color.mermista};
  }
`;
const ReadMe = () => {
  return (
    <StyledReadMe>
      <span className="readme0-text">README.md</span>
      <h1>
        Brooke Xiang: React (Native) Developer, Writer, Editor, Podcast Enthusiast, Connoisseur of
        Bad Puns
      </h1>
      <hr />

      <h2>Installation Instructions</h2>
      <p>
        To ensure Brooke.exe functions optimally, please install Brooke.exe in the Podyssey app as a
        Front-End Developer. While Brooke.exe will function well in this role, they also come with
        capabilities such as writing, editing, copywriting, curating, and technical writing.
      </p>

      <a
        className="traditional-resume"
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/document/d/1igM6Yf56JBBfnSGJcrbeprVnmpS3VH6jGbqC-RDT2Lg/edit?usp=sharing"
      >
        Looking for a traditional resume? Click here
      </a>
      <h2>Current Version</h2>
      <hr />
      <p>Brooke.exe is an app 28 years in the making. </p>
      <p>
        This version of Brooke.exe is the co-editor of <span>Chinatown Stories</span>, an annual
        publication that, as its title implies, features the voices of NGOs, community elders,
        artists, and other folks for whom Chinatown is home, culturally, emotionally, and literally.
        Along with their co-editor, Brooke.exe is responsible for the curation of community stories
        of resilience in Chinatown in spite of the tragedies of COVID-19 and the racism in its wake.
        Brooke.exe is also also responsible for the overall design of the publication, and is
        developing its fully interactive digital version.
      </p>
      <h2>Previous versions</h2>
      <hr></hr>
      <ul>
        <li>
          <h5>
            Front-end developer, Harness App <span> (Apr 2020 - Jun 2020)</span>
          </h5>
          <p>
            A Toronto-based startup whose management app helps construction companies take care of
            health and safety paperwork
          </p>
          <p>Technology Stack:</p>
          <ul>
            <li>React</li>
            <li>Material-UI</li>
            <li>styled components</li>
            <li>WordPress backend</li>
          </ul>
          <p>Responsibilities:</p>
          <ul>
            <li>
              Work with agile team to develop, test, and maintain web components for the Harness V2
              app
            </li>
            <li>
              Design, develop, and unit test applications, and participate in peer-reviews of
              solution designs and related code
            </li>
            <li>Analyze and resolve technical and application problems</li>
          </ul>
        </li>
        <li>
          <h5>
            Taxpayer Services Agent, Canada Revenue Agency
            <span> (Feb 2019 - Aug 2019)</span>
          </h5>
          <p>
            Having you ever phoned in to the CRA about your tax information? You would have spoken
            to a Taxpayer Services Agent like this version of Brooke.exe.
          </p>
          <p>Responsibilities:</p>
          <ul>
            <li>
              Interpret and communicate the complex content of legal documents such as the Income
              Tax Act for Canadian taxpayers seeking clarification and assistance from coast to
              coast
            </li>
            <li>
              Provide technical support to taxpayers seeking assistance with CRA’s online portal by
              analyzing, troubleshooting, and applying appropriate solutions
            </li>
            <li>
              Update the CRA Workplace Inclusion Handbook and advised the Regional Director on best
              practices in approaching gender and racial identities in the workplace
            </li>
          </ul>
        </li>
        <li>
          <h5>
            Post-secondary educator, UBC Department of Language and Literatures
            <span> (Sep 2016 - Dec 2018)</span>
          </h5>
          <p>Responsibilities:</p>
          <ul>
            <li>
              Design and deliver lessons on academic writing and critical thinking to 20+ students,
              mark assignments, and hold weekly office hours
            </li>
            <li>
              Anticipate, prevent, and manage classroom conflicts as influenced by personality and
              intersections of race, gender, culture, and socio-economic status
            </li>
            <li>
              Exercise discretion, confidentiality, and diplomacy in oral and written communications
              with instructors and students
            </li>
          </ul>
        </li>
        <li>
          <h5>
            Naval Musician and Combat Officer <span> (Jun 2009 – Oct 2016)</span>
          </h5>
          <p>Responsibilities:</p>
          <ul>
            <li>
              Design and distribute communications material for events and concerts on social media;
              increase concert attendance by up to 300% and increased online engagement with the
              general public by 500%
            </li>
            <li>
              Take charge of 30+ junior officers during week-long military exercises, leading
              platoon to successful completion of all taskings and duties under simulated combat
              situations
            </li>
            <li>
              Be the face and PR of the Royal Canadian Naval Reserves by helping to unite Canadians
              through the power of music
            </li>
          </ul>
        </li>
      </ul>
      <h2>Dependencies (Education)</h2>
      <hr></hr>
      <h5>RED Academy</h5>
      <p>Diploma in Web and App Development</p>
      <h5>The University of British Columbia</h5>
      <p>MA; English Language and Literatures</p>
      <p>
        Thesis: "We Don't Talk About This": Reticence, Cultural Identity, and Queerness in Alice
        Wu's Saving Face and Kim Fu's For Today I Am A Boy
      </p>
      <h5>University of Toronto</h5>
      <p>BA Honours; Specialist in English, Minor in Biological Anthropology</p>
    </StyledReadMe>
  );
};

export default ReadMe;
