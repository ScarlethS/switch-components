import React from "react";
import styled from "styled-components";
import { useState } from "react";
import SwitchButton from "./SwitchButton";
import { reverseString } from "../Helpers/reverseString.utility";

const Title = styled.input`
  font-size: 1.2em;
  text-align: center;
  color: #645caa;
  padding: 12px 20px;
  border-radius: 9px 9px 9px 9px;
  border: 3px solid #ebc7e8;
  text-transform: Capitalize;
  &::placeholder {
    color: #bface0;
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: #645caa;
    border: 2px solid #bface0;
    box-shadow: 0px 0px 5px #ebc7e8;
  }
`;

const Res = styled.p`
  color: #645caa;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  background-color: #fff;
  padding: 0.5em;
  width: 80%;
`;

const MainBox = styled.div`
  width: 100%;
  height: auto;
  padding: 2em;
  margin-bottom: 2em;
  background-color: #bface0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const BoxOne = styled.div`
  background-color: #a084ca;
  width: 50%;
  min-height: 10em;
  margin-right: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxTwo = styled.div`
  background-color: #a084ca;
  width: 50%;
  min-height: 10em;
  margin-left: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: #a084ca;
  border: none;
  border-radius: 0px 9px 9px 0px;
  color: #fff;
  cursor: pointer;
  padding: 16px;
  text-transform: capitalize;
  font-size: 18px;
`;
const MainComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [showBox, setShowBox] = useState(true);

  return (
    <>
      <MainBox>
        {showBox ? (
          <>
            <BoxOne>
              <Res>
                {reverseString(inputValue)}
                {/* {inputValue} */}
              </Res>
            </BoxOne>
            <BoxTwo></BoxTwo>
          </>
        ) : (
          <>
            <BoxOne></BoxOne>
            <BoxTwo>
              <Res>{inputValue}</Res>
            </BoxTwo>
          </>
        )}
      </MainBox>
      <SwitchButton toggle={showBox} setToggle={setShowBox} />
      <div>
        <Title
          type="text"
          placeholder="type in me"
          name="inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default MainComponent;
