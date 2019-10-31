/* eslint no-unused-expressions:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import SEO from './SEO';
import theme from '../../config/Theme';
import { media } from '../utils/media';

import FoamLayer from './Foam';
import Bubbles from './Bubbles';
import Clip from './Clip';

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
  }
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body, html {
    background: ${theme.colors.landingBg};
    color: ${theme.default};
    font-display: swap;
    @media ${media.phone} {
      font-size: 14px;
    }
    width: 100vw;
    height: 100vh;
    overflow: hidden;

  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Contents = styled.div`
  position: absolute;
  z-index: 40;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  padding-top: 5vh;

  h2 {
    font-weight: 100;
    text-align: center;
    font-size: 1.3rem;
    width: 350px;
    // margin-top: 1rem;
  }
`;

const Logo = styled.div`
  background: #fff;
  width: 190px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 3px dotted #999;
  img {
    width: 110px;
    margin: 0;
  }
`;

const Sticker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    margin-bottom: 0.5rem;
    font-weight: normal;
  }
`;

const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  // justify-self: flex-end;
`;

const LandingLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LandingLayoutQuery {
        site {
          buildTime(formatString: "DD.MM.YYYY")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <SEO />
          <GlobalStyle />
          <FoamLayer />
          <Bubbles />
          <Contents>
            <Middle>
              <Sticker>
                <Logo>
                  <img src="/social/beerjs.svg" alt="BeerJS logo" />
                </Logo>
                <h1>BeerJS</h1>
              </Sticker>
              <h2>Собир за ентузијасти за пиво и JavaScript</h2>
              {children}
            </Middle>
            <Footer>
              <a href="/info/about-beerjs">За настанот</a> | <a href="/events">Претходни</a> | <a href="/blog/">Блог</a> | <a href="/contact">Контакт</a>
            </Footer>
            <Clip />
          </Contents>
        </>
      </ThemeProvider>
    )}
  />
);

export default LandingLayout;

LandingLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
