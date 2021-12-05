import React from 'react';
import styled from 'styled-components';
import { /* FaFacebookSquare, */ FaLinkedin, FaGithub } from 'react-icons/fa';
// import HeroImg from '../assets/images/hero.png';
import Laptop from '../assets/images/laptop.jpg';
import PText from './PText';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

// import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    background-image: radial-gradient(purple, var(--blue), white);
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Glamore Regular';
      font-size: 7rem;
      color: var(--white);
      position: relative;
      z-index: 90;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border: 2px solid var(--black);
    position: relative;
  }
  .hero__info {
    margin-top: -18rem;
    /* background-color: rgba(17, 25, 40, 0.38); */
    /* border-radius: 12px; */
    /* border: 1px solid rgba(255, 255, 255, 0.125); */

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.23);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.2px);
    -webkit-backdrop-filter: blur(8.2px);
    border: 1px solid rgba(255, 255, 255, 0.17);

    width: 60vw;
    margin: -18rem auto 0;

    position: relative;
    bottom: -90px;
    .para {
      background: none;
      /* From https://css.glass */
      border-radius: none;
      box-shadow: none;
      backdrop-filter: none;
      border: none;
    }
    p {
      padding: 1rem;
      margin-top: 1rem;
    }
    .button-wrapper {
      padding-bottom: 1rem;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    position: absolute;
    margin-left: 5px;
    /* bottom: 500px; */
    width: 50px;
  }
  .hero__social {
    left: -10px;
    bottom: 500px;
  }
  .hero__scrollDown {
    right: 5px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 3.6rem;
          transform: rotate(360deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
          :hover {
            box-shadow: 0px 0px 100px 0px rgba(128, 0, 128, 1);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 50%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.5rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 2.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      bottom: 5%;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, my name is </span>
            <span className="hero__name">Shamika</span>
          </h1>
          <div className="hero__img">
            <img src={Laptop} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am a web designer and developer. I have a passion for web design
              and I love creating new web experiences for people. I create cloud
              architecture solutions. Sky's the limit.
            </PText>
            <Button btnText="See My Work" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                {/* <li>
                  <a
                    href="http://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li> */}
                <li>
                  <a
                    href="http://github.com/shamikae"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shamikaearle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
