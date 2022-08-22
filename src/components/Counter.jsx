import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/actions/counterAction";
import { changeText } from "../redux/actions/textActions";
function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counterReducer.count);
    const text = useSelector((state) => state.textReducer.text);
    // console.log(counter);
    // const [counter, setCounter] = useState(0);
    const handleIncrease = () => {
        // setCounter(counter + 1);
        dispatch(increase());
    };
    const handleDecrease = () => {
        // setCounter(counter - 1);
        dispatch(decrease());
    };
    const handleChangeText = () => {
        // setCounter(counter - 1);
        dispatch(changeText());
    };
    return (
        <div className="counter">
            <h1>{text}</h1>
            <h1 style={{ fontSize: "10.5em ", width: "100px" }}>{counter} </h1>
            <div>
                <Button
                    style={{ fontSize: "2.5em ", width: "100px" }}
                    variant="primary"
                    onClick={() => {
                        handleIncrease();
                    }}
                >
                    +
                </Button>
                <Button
                    style={{ fontSize: "2.5em ", width: "100px" }}
                    variant="danger"
                    onClick={() => {
                        handleDecrease();
                    }}
                >
                    -
                </Button>
                <Button
                    style={{ fontSize: "1.5em ", width: "100px" }}
                    variant="primary"
                    onClick={() => {
                        handleChangeText();
                    }}
                >
                    Change text
                </Button>
            </div>
        </div>
    );
}

export default Counter;
