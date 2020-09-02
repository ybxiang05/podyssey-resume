import React from "react";
import styled from "styled-components";

const StyledWritingSamples = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2%;
  padding: 5%;
  .ws-anchor {
    text-decoration: underline;
  }
`;
const WritingSample = () => {
  return (
    <StyledWritingSamples>
      <h1>Writing Samples</h1>
      <h5>
        Technical Writing (client-facing):
        <a className="ws-anchor" href="https://github.com/ybxiang05/harness-docs">
          {" "}
          Harness App Instructions
        </a>
      </h5>

      <h5>
        Editorial Writing:
        <a
          className="ws-anchor"
          href="https://docs.google.com/document/d/1N6W7eAXR514zB0hlLcw93AeaWOxSb4l5cxkxFSigjZ0/edit?usp=sharing"
        >
          {" "}
          Finding Agency in Resilience (Chinatown Stories Foreword)
        </a>
      </h5>

      <h5>
        Academic Writing:
        <a className="ws-anchor" href="https://canlit.ca/article/diasporic-belongings/">
          {" "}
          Diasporic (Be)longings
        </a>
      </h5>
    </StyledWritingSamples>
  );
};

export default WritingSample;
