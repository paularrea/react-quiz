import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
  html {
    height: 100%;
  }
  body {
    background-color: black;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Varela Round', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    padding: 2rem;
    font-family: 'Varela Round', sans-serif;
    font-size: 80px;
    line-height: 80%;
    text-align: center;
    margin: 10%;
    margin-bottom:5%;
    text-decoration: none;
    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
    transition: all 0.1s;
    color: #472727;
    outline: yellow;
  -webkit-animation: neon1 1s ease-in-out infinite alternate;
  -moz-animation: neon1 1s ease-in-out infinite alternate;
  animation: neon1 1s ease-in-out infinite alternate;
  }
  h1:hover{
    color: #FF1177;
    -webkit-animation: none;
    -moz-animation: none;
    animation: none;
  }

  @-webkit-keyframes neon1 {
    from {
      text-shadow: 0 0 15px #ff74b0, 0 0 20px #ff74b0, 0 0 30px #ff74b0, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 150px #FF1177, 0 0 150px #FF1177;
    }
    to {
      text-shadow: 0 0 5px #ff74b0, 0 0 15px #ff74b0, 0 0 15px #ff74b0, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
    }
  }
  @keyframes neon1 {
    from {
      text-shadow: 0 0 15px #FF1177, 0 0 20px #FF1177, 0 0 30px #FF1177, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 150px #FF1177, 0 0 150px #FF1177;
    }
    to {
      text-shadow: 0 0 5px #FF1177, 0 0 15px #FF1177, 0 0 15px #FF1177, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
    }
  }

  .night {
    font-family: 'Satisfy', cursive;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    text-decoration: none;
    -webkit-transition: all .1s;
    -moz-transition: all .1s;
    transition: all .1s;
    color: #fff;
  -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
  -moz-animation: neon2 1.5s ease-in-out infinite alternate;
  animation: neon2 1.5s ease-in-out infinite alternate;
  }
  .night:hover{
    color: #7FFFFE;
    -webkit-animation: none;
    -moz-animation: none;
    animation: none;
  }

  @-webkit-keyframes neon2 {
    from {
      text-shadow: 0 0 10px #7FFFFE, 0 0 20px #7FFFFE, 0 0 30px #7FFFFE, 0 0 40px #0C85CF, 0 0 70px #0C85CF, 0 0 80px #0C85CF, 0 0 100px #0C85CF, 0 0 150px #0C85CF;
    }
    to {
      text-shadow: 0 0 5px #7FFFFE, 0 0 10px #7FFFFE, 0 0 15px #7FFFFE, 0 0 20px #0C85CF, 0 0 35px #0C85CF, 0 0 40px #0C85CF, 0 0 50px #0C85CF, 0 0 75px #0C85CF;
    }
  }
  @keyframes neon2 {
    from {
      text-shadow: 0 0 10px #7FFFFE, 0 0 20px #7FFFFE, 0 0 30px #7FFFFE, 0 0 40px #0C85CF, 0 0 70px #0C85CF, 0 0 80px #0C85CF, 0 0 100px #0C85CF, 0 0 150px #0C85CF;
    }
    to {
      text-shadow: 0 0 5px #7FFFFE, 0 0 10px #7FFFFE, 0 0 15px #7FFFFE, 0 0 20px #0C85CF, 0 0 35px #0C85CF, 0 0 40px #0C85CF, 0 0 50px #0C85CF, 0 0 75px #0C85CF;
    }
  }

  .start, .next {
    cursor: pointer;
    background: transparent;
    border: 2px solid #F2E524;
    color: #F2E524;
    border-radius: 10px;
    margin: 20px 0;
    padding: 5% 20%;
    font-size: 1rem;
  }
  .start {
    max-width: 200px;
  }
`;