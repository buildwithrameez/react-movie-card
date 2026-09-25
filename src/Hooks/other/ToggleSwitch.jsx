import React, { useState } from "react";
import styled from "styled-components";
import '../Hooks/style.css'

// 1. Create styled components that accept an 'isActive' prop
const MainTrack = styled.div`
  width: 60px;
  height: 34px;
  background-color: ${(props) => (props.isActive ? "#4cd964" : "#ccc")};
  border-radius: 34px;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
`;

const InnerKnob = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  
  /* Slide the knob to the right if active */
  transform: ${(props) => (props.isActive ? "translateX(26px)" : "translateX(0px)")};
`;

// 2. Pass state down to the layout component
export const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="toggleSwitch">
      <LayoutComponent isActive={isActive} onToggle={toggleHandler} />
    </div>
  );
};

// 3. Destructure props and apply them to styled components
const LayoutComponent = ({ isActive, onToggle }) => {
  return (
    <MainTrack isActive={isActive} onClick={onToggle}>
      <InnerKnob isActive={isActive} />
    </MainTrack>
  );
};
