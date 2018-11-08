import React, { Component } from "react";
import styled from 'styled-components';
 
class MenuButton extends Component {
  render() {
    return (
      <RoundButton id="roundButton" onMouseDown={this.props.handleMouseDown}></RoundButton>
    );
  }
}

export default MenuButton;

const RoundButton = styled.button`
  background-color: black;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px black;
  outline: none;
  transition: all .2s cubic-bezier(0, 1.26, .8, 1.28);

  &:hover{
  background-color: gray;
  cursor: pointer;
  border-color: #003557;
  transform: scale(1.2, 1.2);
  }

  &:active{
    border-color: palevioletred;
    background-color: #FFF;
  }


`;
