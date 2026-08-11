import { useState } from "react";
import '../ToggleSwitch/style.css'

export const ToggleSwitch = () => {
    const [isOn ,setState] = useState(false);

    const handleClick = () => {
    return setState(!isOn);
};

    const onChange = isOn ? "on" : "off";
    const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };
    return <div className="toggle-switch" style={toggleBGColor} onClick={handleClick}>
         <div className={`switch ${onChange}`}>
           <span className="switch-state">{onChange}</span>
         </div>
    </div>
};