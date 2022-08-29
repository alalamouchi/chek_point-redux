import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
    editTitle,
    markAsDone,
    deleteTask,
} from "../redux/actions/toDoActions";

function ToDoItem({ taskTitel, isDone, id }) {
    //styles
    const taskStyle = {
        border: "1px solid #e0e0e0",
        padding: "20px",
        marginBottom: "15px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    };
    const doneTaskStyle = {
        border: "2px solid #00f70c",
        padding: "20px",
        marginBottom: "15px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    };
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false);
    const [newTitleTask, setNewTitleTask] = React.useState("");
    const showEdit = () => {
        setShow(true);
    };
    const handleChange = (e) => {
        setNewTitleTask(e.target.value);
    };
    const handleEditTitle = () => {
        dispatch(editTitle({ newTitleTask, id }));
        setShow(false);
    };
    const handleDone = () => {
        dispatch(markAsDone(id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <Container style={isDone ? doneTaskStyle : taskStyle}>
            <Row>
                {show ? (
                    <Form.Group style={{ display: "flex" }}>
                        <Form.Control
                            defaultValue={taskTitel}
                            type="text"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                                handleEditTitle();
                            }}
                        >
                            Save
                        </Button>
                    </Form.Group>
                ) : (
                    <h2> {taskTitel} </h2>
                )}
            </Row>
            <Row>
                <Col>
                    <Button
                        variant="danger"
                        type="submit"
                        onClick={() => {
                            handleDelete();
                        }}
                    >
                        <AiFillDelete />
                    </Button>
                </Col>
                <Col>
                    <Button
                        variant="outline-success"
                        type="submit"
                        onClick={() => {
                            handleDone();
                        }}
                    >
                        <MdDone />
                    </Button>
                </Col>
                <Col>
                    <Button
                        variant="warning"
                        type="submit"
                        onClick={() => {
                            showEdit();
                        }}
                    >
                        <AiFillEdit />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ToDoItem;
