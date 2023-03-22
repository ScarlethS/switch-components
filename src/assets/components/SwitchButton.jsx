import React, { useState } from "react";
import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: ${({ toggle, color }) => (toggle ? color : "white")};
  border-radius: 15px;
  transition: 0.4s;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ toggle, color }) => (toggle ? color : "white")};
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: "";

    position: absolute;
    left: 2px;
    bottom: 2px;

    width: 20px;
    height: 20px;
    border-radius: 100%;

    background-color: ${({ toggle, color }) => (toggle ? "white" : color)};

    transition: 0.4s;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;

const Text = styled.p`
  color: white;
  text-transform: Capitalize;
  font-size: 1.3rem;
  font-family: Arial;
  margin-right: 1em;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const SwitchButton = ({ toggle, setToggle, color = "#BFACE0" }) => {
  return (
    <>
      <Container>
        <Text>Switch Text</Text>
        <Switch>
          <Input {...{ color }} type="checkbox" defaultChecked={toggle} />
          <Slider {...{ toggle, color }} onClick={() => setToggle(!toggle)} />
        </Switch>
      </Container>
    </>
  );
};

export default SwitchButton;
