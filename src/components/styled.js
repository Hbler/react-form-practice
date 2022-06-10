import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { mq } from "../globalComponents";

export const Header = styled.header`
  margin: 2rem 0;

  ${mq[3]} {
    margin: 4rem 0;
  }

  h1 {
    font-size: 5rem;
    font-family: "Bebas Neue", cursive;

    ${mq[3]} {
      font-size: 7rem;
    }
  }

  small {
    ${mq[3]} {
      font-size: 1.3rem;
    }
  }

  p {
    max-width: 330px;
    margin: 0.6rem 0;
    padding: 0.3rem;

    text-align: center;
    line-height: 2rem;

    ${mq[3]} {
      max-width: 460px;
      font-size: 1.4rem;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;

  position: relative;
  z-index: 3;

  ${mq[3]} {
    font-size: 1.3rem;
  }

  &:hover {
    color: var(--text);

    border-radius: 2px;
    background-color: var(--highlight);

    :disabled {
      color: #444;

      background-color: #fff4;
      cursor: not-allowed;
    }
  }
`;

export const FloatingForm = styled.form`
  inset: 3%;

  border-radius: 2px;
  border: 1px solid var(--text);
  background-color: var(--background);
  position: absolute;
  z-index: 3;

  ${mq[1]} {
    inset: 3% 20%;
    padding-top: 1rem;
  }

  ${mq[2]} {
    inset: 3% 25%;
  }

  ${mq[3]} {
    inset: 5% 27%;
    padding-top: 1%;
  }

  h3 {
    margin: 0.5rem 0;
    text-align: center;
  }

  fieldset {
    max-width: 350px;
    margin: 0.2rem;
    border: none;

    ${mq[1]} {
      max-width: 400px;
    }

    input {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.5rem;

      color: var(--text);

      border: none;
      border-bottom: 2px solid var(--text);
      background-color: var(--slidingBackground);

      ::placeholder {
        color: var(--text);
      }

      ${mq[1]} {
        padding: 0.7rem;
      }
    }

    small {
      color: #d62828;
      font-size: 0.7rem;
      text-align: center;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > input {
      margin: 0.5rem 0;
      transform: scale(1.5);
    }

    label {
      margin: 0.3rem 1rem;

      font-size: 0.8rem;

      ${mq[1]} {
        margin: 0.7rem 1rem;
        font-size: 1rem;
      }
    }
  }
`;

export const CloseBtn = styled(MdClose)`
  top: 0.5rem;
  right: 0.5rem;
  color: var(--text);
  font-size: 1.6rem;

  position: absolute;
  cursor: pointer;

  :hover {
    color: var(--highlight);
  }
`;

export const Info = styled.header`
  h1 {
    font-size: 3rem;
    font-family: "Bebas Neue", cursive;
  }

  p {
    max-width: 400px;

    font-size: 1.2rem;
    text-align: center;
  }
`;

export const Canvas = styled.div`
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 70vw;
    height: 70vw;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;

    div {
      width: 50vw;
      height: 50vw;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 30px;

      div {
        width: 30vw;
        height: 30vw;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 30px;

        div {
          width: 20vw;
          height: 20vw;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 30px;
          border: 1px solid;
          background-color: transparent;

          div {
            width: 10vw;
            height: 10vw;

            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 30px;

            div {
              width: 5vw;
              height: 5vw;

              border-radius: 50%;
              background-color: #222;
            }
          }
        }
      }
    }
  }
`;
