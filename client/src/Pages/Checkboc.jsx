import React from 'react'
import styled from "styled-components";
const Checkboc = () => {
  return (
    <Container>
  <label className="material-checkbox">
        <input type="checkbox"/>
        <span className="checkmark"></span>
        Agree the all terms and conditions
      </label>
</Container>
  )
}
const Container = styled.div`
  .material-checkbox {
    display: flex;
    margin-top:15px;
    align-items: center;
    font-size: 16px;
    color: #777777;
    cursor: pointer;
  }
  
  .material-checkbox input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    font-size:11px;
  }
  
  .checkmark {
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 12px;
    border: 2px solid #454B00;
    border-radius: 4px;
    transition: all 0.3s;
    
  }
  
  .material-checkbox input[type="checkbox"]:checked ~ .checkmark {
    background-color: #2F3300;
    border-color: #454B00;
  }
  
  .material-checkbox input[type="checkbox"]:checked ~ .checkmark:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .material-checkbox input[type="checkbox"]:focus ~ .checkmark {
    box-shadow: 0 0 0 2px #dfec5065;
  }
  
  .material-checkbox:hover input[type="checkbox"] ~ .checkmark {
    border-color: #C3CF34;
  }
  
  .material-checkbox input[type="checkbox"]:disabled ~ .checkmark {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .material-checkbox input[type="checkbox"]:disabled ~ .checkmark:hover {
    border-color: #4d4d4d;
  }
`;

export default Checkboc