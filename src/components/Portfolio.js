import React from "react";
import styled from "styled-components";

const StyledReadMe = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2%;
  padding: 5%;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${props => props.theme.color.mermistaLight};
  }
  span {
    font-style: italic;
  }
  ul {
    line-height: 1.75rem;
  }
`;
const Portfolio = () => {
  return (
    <StyledReadMe>
      <h1>
        Brooke Xiang: React (Native) Developer, Writer, Editor, Podcast Geek, Connaiseur of Bad Puns
      </h1>
      <hr />
      <h2>Current Version</h2>
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
      <h2>Previous versions of Brooke.exe</h2>
      <ul>
        <li>
          <h5>
            Front-end developer with Harness <span> (Apr 2020 - Jun 2020)</span>
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
            <span>(Sep 2016 - Dec 2018)</span>
          </h5>
          <li>
            <p>Responsibilities:</p>
            <ul>
              <li>
                Work with agile team to develop, test, and maintain web components for the Harness
                V2 app
              </li>
              <li>
                Design, develop, and unit test applications, and participate in peer-reviews of
                solution designs and related code
              </li>
              <li>Analyze and resolve technical and application problems</li>
            </ul>
          </li>
        </li>
        <li>
          <h5>
            {" "}
            A Naval Musican and Combat Officer <span> (Jun 2009 – Oct 2016)</span>
          </h5>
        </li>
        <li></li>
      </ul>

      <li>
        A hungry and sleep-deprived graduate student <span>(Sep 2015 - Nov 2018)</span>
      </li>
    </StyledReadMe>
  );
};

export default Portfolio;
