import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import ToDoItem from "./ToDoItem";
function ToDoList() {
    const tasks = useSelector((state) => state.toDoReducer.tasks);
    const doneTasks = useSelector((state) => state.toDoReducer.doneTasks);
    const onGoingTasks = useSelector((state) => state.toDoReducer.onGoingTasks);
    console.log(tasks);
    return (
        <Container
            style={{
                margin: "auto",
                padding: "20px",
            }}
        >
            <Row lg={4} style={{ marginTop: "20px" }}>
                {doneTasks.length > 0
                    ? doneTasks.map((elt) => {
                          return (
                              <Col lg key={elt.id}>
                                  <ToDoItem {...elt} />
                              </Col>
                          );
                      })
                    : onGoingTasks.length > 0
                    ? onGoingTasks.map((elt) => {
                          return (
                              <Col lg key={elt.id}>
                                  <ToDoItem {...elt} />
                              </Col>
                          );
                      })
                    : tasks.map((elt) => {
                          return (
                              <Col lg key={elt.id}>
                                  <ToDoItem {...elt} />
                              </Col>
                          );
                      })}
            </Row>
        </Container>
    );
}

export default ToDoList;
