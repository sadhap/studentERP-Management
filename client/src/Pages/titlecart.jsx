import React from 'react'
import styled from "styled-components";
// import {Helmet} from "react-helmet";
// import {title} from "./title"
// import Watch from './watch';

const Titlecart = () => {

const spans = document.querySelectorAll( '.word span');
spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
    
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
    
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+10))
});
  return (
    <>
 <Container> 

 <div className="word">
  <span>P</span>
  <span>K</span>
  <span>R</span>
  <span className='red'>C</span>
  <span>A</span>
  <span>S</span>
</div>
  </Container>
   </>
 

  )
}
const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=Anton|Roboto');
.word {
  font-family: 'Anton', sans-serif;
  perspective: 1000px; 
  display:flex;
  justify-content:center;
  font-weight:900;
  gap:0.5rem;
  padding:7px;
}
.word span.red{
  color:red;
}
.word span {
  cursor: pointer;
  display: inline-block;
  font-size: 50px;
  user-select: none;
  line-height: .8;
  color:#c4c1c6;
  -webkit-filter: drop-shadow(5px 5px 5px #222 );
  filter: drop-shadow(5px 5px 5px #222);
}

.word span:nth-child(1).active {
  animation: balance 1.5s ease-out;
  transform-origin: bottom left;
}

@keyframes balance {
  0%, 100% {
    transform: rotate(0deg);
  }
  
  30%, 60% {
    transform: rotate(-45deg);
  }
}

.word span:nth-child(2).active {
  animation: shrinkjump 1s ease-in-out;
  transform-origin: bottom center;
}

@keyframes shrinkjump {
  10%, 35% {
    transform: scale(2, .2) translate(0, 0);
  }
  
  45%, 50% {
    transform: scale(1) translate(0, -150px);
  }
  
  80% {
    transform: scale(1) translate(0, 0);
  }
}

.word span:nth-child(3).active {
  animation: falling 2s ease-out;
  transform-origin: bottom center;
}

@keyframes falling {
  12% {
    transform: rotateX(240deg);
  }
  
  24% {
    transform: rotateX(150deg);
  }
  
  36% {
    transform: rotateX(200deg);
  }
  
  48% {
    transform: rotateX(175deg);
  }
  
  60%, 85% {
    transform: rotateX(180deg);
  }
  
  100% {
    transform: rotateX(0deg);
  }
}

.word span:nth-child(4).active {
  animation: rotate 1s ease-out;
}

@keyframes rotate {
  20%, 80% {
    transform: rotateY(180deg);
  }
  
  100% {
    transform: rotateY(360deg);
  }
}

.word span:nth-child(5).active {
  animation: toplong 1.5s linear;
}

@keyframes toplong {
  10%, 40% {
    transform: translateY(-48vh) scaleY(1);
  }
  
  90% {
    transform: translateY(-48vh) scaleY(4);
  }
}



@media screen and (min-width: 320px) and (max-width: 900px){
  .word {
    font-family: 'Anton', sans-serif;
    perspective: 1000px; 
    display:flex;
    justify-content:center;
    font-weight:900;
    padding:7px; 
    margin-top:-11rem;
    margin-left:6rem;
    margin-bottom:7rem;
  }
  .word span.red{
    color:red;
  }
  .word span {
    cursor: pointer;
    display: inline-block;
    font-size: 35px;
    user-select: none;
    line-height: .8;
    color:#c4c1c6;
    -webkit-filter: drop-shadow(5px 5px 5px #222 );
    filter: drop-shadow(5px 5px 5px #222);
  }
  
  .word span:nth-child(1).active {
    animation: balance 1.5s ease-out;
    transform-origin: bottom left;
  }
  
  @keyframes balance {
    0%, 100% {
      transform: rotate(0deg);
    }
    
    30%, 60% {
      transform: rotate(-45deg);
    }
  }
  
  .word span:nth-child(2).active {
    animation: shrinkjump 1s ease-in-out;
    transform-origin: bottom center;
  }
  
  @keyframes shrinkjump {
    10%, 35% {
      transform: scale(2, .2) translate(0, 0);
    }
    
    45%, 50% {
      transform: scale(1) translate(0, -150px);
    }
    
    80% {
      transform: scale(1) translate(0, 0);
    }
  }
  
  .word span:nth-child(3).active {
    animation: falling 2s ease-out;
    transform-origin: bottom center;
  }
  
  @keyframes falling {
    12% {
      transform: rotateX(240deg);
    }
    
    24% {
      transform: rotateX(150deg);
    }
    
    36% {
      transform: rotateX(200deg);
    }
    
    48% {
      transform: rotateX(175deg);
    }
    
    60%, 85% {
      transform: rotateX(180deg);
    }
    
    100% {
      transform: rotateX(0deg);
    }
  }
  
  .word span:nth-child(4).active {
    animation: rotate 1s ease-out;
  }
  
  @keyframes rotate {
    20%, 80% {
      transform: rotateY(180deg);
    }
    
    100% {
      transform: rotateY(360deg);
    }
  }
  
  .word span:nth-child(5).active {
    animation: toplong 1.5s linear;
  }
  
  @keyframes toplong {
    10%, 40% {
      transform: translateY(-48vh) scaleY(1);
    }
    
    90% {
      transform: translateY(-48vh) scaleY(4);
    }
  }
}
`;

export default Titlecart