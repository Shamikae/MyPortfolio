import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Shamika E</h1>
          <PText>A freelance web designer and developer from New York.</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'Phone',
                path: 'tel:+1(***)***-****',
              },
              {
                title: 'Email',
                path: 'mailto:e.shamika@yahoo.com',
              },
              {
                title: ' New York, NY',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'GitHub',
                path: 'http://github.com/shamikae',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/shamikaearle/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="cc">
            <PText>
              Copyright ©2021 Shamika Earle | Made By{' '}
              <a target="_blank" rel="noopener noreferrer" href="http://.com">
                Meek{' '}
                <span role="img" aria-labelledby="panda1">
                  💙
                </span>
              </a>{' '}
            </PText>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
