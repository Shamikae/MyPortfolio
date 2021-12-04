import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Refs from '../assets/data/Refs';

const RefSectionStyles = styled.div`
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;
  background-color: blue;
  .Ref__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .Ref__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: rgba(0, 0, 0, 0.05);
    /* background-color: var(--deep-dark); */
    border-radius: 12px;
    margin-top: 5rem;
  }
  .Ref__desc {
    .para {
      text-align: center;
    }
  }
  .Ref__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .Ref__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      /* background-color: var(--deep-dark); */
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;

      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.23);
      /* border-radius: 16px; */
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8.2px);
      -webkit-backdrop-filter: blur(8.2px);
      border: 1px solid rgba(255, 255, 255, 0.17);
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

export default function RefsSec() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = Refs[activeIndex];

  function handleNext() {
    if (activeIndex >= Refs.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(Refs.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <RefSectionStyles>
      <div className="container">
        <SectionTitle subheading="" heading="References" />
        <div className="Ref__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="Ref__info">
                <div className="Ref__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="Ref__name">{activeSlide.name}</h2>
                <p className="Ref__title">
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </RefSectionStyles>
  );
}
