import styled, { createGlobalStyle, keyframes } from "styled-components";

const breakpoints = [576, 768, 992, 1200];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Readex Pro', sans-serif;
    transition: 0.3s;

   
}

html{
    scrollbar-width: none;
}


body {
    overflow: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }
}

.App {
    min-height: 100vh;

    overflow: hidden;
    
    color: var(--text);

    background-color: var(--background);
}

ul,ol{
    list-style: none;
}

button{
    font-weight: 600;
    border: none;
    cursor: pointer;
}

.container{
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: auto;
    padding: 0.8rem;

    overflow: scroll;
    position: relative;
    z-index: 2;
}
`;

export const ThemeDark = createGlobalStyle`
:root{
    --text: #eee;
    --highlight: #560bad;
    --background: #222;
    --slidingBackground: #fff2;
}
`;

export const FlexBox = styled.section`
  padding: 0.5rem;
  height: 85%;

  display: flex;
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};

  gap: ${(props) => props.gap || "0.5rem"};
`;

const slide = (x, y, x1, y1) => keyframes`
 0% {
    
    background-position: ${x} ${y};
  }
  100% {
    background-position: ${x1} ${y1};
  }
`;

export const SlidingBackground = styled.div`
  width: 100%;
  height: 100%;

  animation: ${(props) => slide(props.x, props.y, props.x1, props.y1)} infinite
    30s linear;

  background-image: linear-gradient(
      90deg,
      var(--slidingBackground) 0.1em,
      transparent 0.1em
    ),
    linear-gradient(var(--slidingBackground) 0.1em, transparent 0.1em);
  background-size: 2em 2em;

  position: absolute;
  z-index: 1;
`;
