import React, { useState } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    addTask,
    filterDoneTasks,
    filterIsGoingTasks,
    showAllTasks,
} from "../redux/actions/toDoActions";
function Header() {
    const [newTask, setNewTask] = useState({});

    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
            id: uuidv4(),
            isDone: false,
        });
    };
    const handleAdd = () => {
        dispatch(addTask(newTask));
    };
    const handleFilterDone = () => {
        dispatch(filterDoneTasks());
    };
    const handleFilterIsGoing = () => {
        dispatch(filterIsGoingTasks());
    };
    const handleShowAllTasks = () => {
        dispatch(showAllTasks());
    };
    return (
        <Container>
            <Row md>
                <Col>
                    <h1>My To Do List</h1>
                </Col>
            </Row>
            <Row
                md={2}
                style={{
                    borderBottom: "1px #b7b7b7 solid",
                    paddingBottom: " 20px ",
                }}
            >
                <Col md>
                    <Form.Control
                        type="text"
                        name="taskTitel"
                        placeholder="Add Task"
                        onChange={(e) => handleChange(e)}
                    />
                </Col>
                <Col md style={{ alignSelf: "flex-end" }}>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => handleAdd()}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col lg>
                    <Button
                        variant="success"
                        type="submit"
                        onClick={() => {
                            handleFilterDone();
                        }}
                    >
                        Done
                    </Button>
                </Col>
                <Col lg>
                    <Button
                        variant="danger"
                        type="submit"
                        onClick={() => {
                            handleFilterIsGoing();
                        }}
                    >
                        Ongoing
                    </Button>
                </Col>
                <Col lg>
                    <Button
                        variant="light"
                        type="submit"
                        onClick={() => {
                            handleShowAllTasks();
                        }}
                    >
                        All
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
