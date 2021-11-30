import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function ResumeButton({
  btnText = 'Download Resume',
  btnLink = 'https://farmingdale-my.sharepoint.com/:b:/g/personal/earls_farmingdale_edu/ERSSlL2Gv11Mr4utKM9NRMMBq0036ZZDbBzB9RueCVxO6A',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <a
        className="button"
        href={btnLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {btnText}
      </a>
    </ButtonStyle>
  );
}
