import styled from "styled-components";

export const AppContainer = styled.div``;

export const PageContainer = styled.div`
  min-height: 87vh;
  padding: 0 0;

  &#sportspage {
    display: flex;
    flex-direction: row;
    & div.sportInfo {
      border-right: 1px solid lightgrey;
      width: 45vw;
      margin: 5vh 0vw 1vh 2vw;
      padding: 0 2vw 0 0;
      height: 72vh;
      font-size: 2rem;
      text-align: center;
      & > p.sportsBlurb {
        padding: 0 5vw;
      }
      & h1.chooseASport {
        margin: 10vh 0 0 0;
      }
      & .carouseloptions {
        margin: 5vh 5vw;
        padding: 0 10vw 0 0;
        border: none;
        width: 40vw;
        height: 12vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        & h2 {
          font-size: 3rem;
        }

        & h2:hover {
          text-decoration: underline;
        }
        & h2.active {
          font-size: 6rem;
          text-decoration: underline;
        }
      }
    }
    & div.carousel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 72vh;
      width: 55vw;
      margin: 5vh 2vw 0 2vw;
      padding: 0 0 0 2vw;
      border: none;
      position: relative;
      & .photoDesc {
        height: 10vh;
        border-right: none;
      }
      & .photocontainer {
        border-right: none;
        display: flex;
        align-items: center;
        height: 40vh;
        /* justify-content: center; */
      }
      & img {
        min-height: 40vh;
        height: 50vh;
        max-width: 90%;
        margin: 10vh auto;
      }
      & h1 {
        text-transform: uppercase;
      }

      & div.carouselicon {
        position: absolute;
        top: 15vh;
        font-size: 24px;
        & svg {
          font-size: 24px;
        }
      }
    }

    & p {
      font-size: 2rem;
      text-align: start;
      text-indent: 2rem;
    }
    & h1 {
      font-size: 5rem;
      margin: 1vh 0;
      /* text-align: start; */
    }
  }
`;

export const FooterContainer = styled.div`
  @media only screen and (min-width: 1224px) {
    /* height: 26vh; */
    border-top: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    margin: 2vh 0;
    padding: 4vh 0 2vh 0;
    text-align: start;
    /* & div {
      padding: 0 2vw;
    } */
    & .one {
      width: 15%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 24px;
        margin: 0.5vh 0;
      }
      & :first-child {
        margin: 1vh 0;
      }
    }
    & .two {
      width: 7%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 24px;
        margin: 0.5vh 0;
      }
      & :first-child {
        margin: 1vh 0;
      }
    }
    & .three {
      width: 7%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 24px;
        margin: 0.5vh 0;
      }
      & :first-child {
        margin: 1vh 0;
      }
    }
    & .four {
      width: 20%;
      display: flex;
      flex-direction: column;
      & h1 {
        margin: 1vh 0;
      }
      & input {
        height: 2.5vh;
        border-radius: 2px;
      }
    }
    & .five {
      margin: 1vh 0;
      width: 25vw;
      display: flex;
      flex-direction: column;
      & div {
        width: 20vw;
        display: flex;
        /* justify-content: center; */
        align-items: center;

        & h2:first-child {
          border-right: 1px solid lightgrey;
          padding: 0 1vw 0 0;
        }
        & h2:last-child {
          padding: 0 0 0 1.5vw;
        }
      }
      
      & .icons {
        width:20vw;
        font-size: 56px;
        justify-content:space-between;
        & * {
          margin: 0 0.5vw 1vh 0;
          color: black;
          font-size: 24px;
        }
        & svg {
          font-size:4rem;
        }
      }

      & div.disclaimers {
        align-self:flex-start;
        width: 20vw;
        display: flex;
        flex-direction: column;
        align-items:flex-start;

        & p {
          font-size: 24px;
        }

      & div.policies {
        align-self:flex-end;
        width: 20vw;
        display: flex;
        flex-direction: column;
        align-items:flex-start;

      }
    }
  }
`;

export const StyledHeader = styled.div`
  @media only screen and (min-width: 1224px) {
    display: flex;
    padding: 1vh 0;
    border-bottom: 1px solid lightgrey;
    align-items: center;
    height: 12vh;
    & nav {
      width: 20vw;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
      padding: 1vw 2vw 1vw 5vw;

      & img {
      height: 100%;
      }
      & .navlink {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 6vw;
        font-size: 48px;
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
        &:active {
          text-decoration: underline;
        }
        &.login {
          border-right: 1px solid lightgray;
        }
        &.cart {
          margin-left: 0.5vw;
          justify-content: center;
          width: 4vw;
          &:hover,
          :active {
            text-decoration: none;
          }
        }
        & svg {
          margin: 0 1vw;
          font-size:36px;

        }
      }
    }
    & .symmetry {
      width: 60vw;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 10vh;
      padding: 1vw 1vw;
      & .navlink {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10vw;
        font-size: 48px;
        text-decoration: none;
        color: black;
        &:hover {
          text-decoration: underline;
        }

      }
    }
    & .logoContainer {
      width: 20vw;
    }
  }
`;
