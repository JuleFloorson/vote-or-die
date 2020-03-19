import React from "react";
import AppCard from "./AppCard";
// import { Link } from "react-router-dom";
import circleImage from "./circle.png";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormQuestion = styled.input`
  font-family: chalkboard;
  font-size: 32px;
  border: none;
  border-bottom: 3px solid black;
  width: 320px;
  margin: 15px;
`;
const AnswerLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Circle = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
const FormAnswer = styled.input`
  text-align: start;
  font-family: chalkboard;
  font-size: 30px;
  border: none;
  border-bottom: 2px solid black;
  width: 220px;
  margin: 15px;
`;
const FormButton = styled.button`
  border: 4px solid #08af15;
  background-color: #00d811;
  border-radius: 5px;
  font-size: 30px;
  font-family: chalkboard;
  color: white;
  padding: 3px 30px;
  margin-top: 35px;
`;

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };
    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        "https://my-json-server.typicode.com/JuleFloorson/vote-or-die/polls",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(poll)
      }
    );
    const createPoll = await response.json();
    alert(`Creates poll with the id ${createPoll.id}`);
  }

  return (
    <AppCard>
      <Form onSubmit={handleSubmit}>
        <FormQuestion
          type="text"
          placeholder="My Question is..."
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <AnswerLine>
          <Circle src={circleImage} alt="circle" />
          <FormAnswer
            type="text"
            placeholder="Answer 1"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          />
        </AnswerLine>
        <AnswerLine>
          <Circle src={circleImage} alt="circle" />
          <FormAnswer
            type="text"
            placeholder="Answer 2"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          />
        </AnswerLine>
        <AnswerLine>
          <Circle src={circleImage} alt="circle" />
          <FormAnswer
            className="formAnswer"
            type="text"
            placeholder="Answer 3"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          />
        </AnswerLine>

        <FormButton type="submit" value="Send">
          Send
          {/* <Link to="/Vote"></Link> */}
        </FormButton>
      </Form>
    </AppCard>
  );
}
export default Add;
