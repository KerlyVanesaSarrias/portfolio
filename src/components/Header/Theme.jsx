import { useState } from "react";
import ReactSwitch from "react-switch"


const Theme = () => {
    const [checked, setChecked] = useState(false)
    const handleSwitch = (nextChecked) => {
        setChecked(nextChecked)
    }

    return (
        <div>
            <ReactSwitch
                onChange={handleSwitch}
                checked={checked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
                id="material-switch"
            />
        </div>
    );
}


export default Theme