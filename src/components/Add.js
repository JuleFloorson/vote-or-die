import React from "react";
import "./Add.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import circleImage from "./circle.png";

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };
    alert(JSON.stringify(poll));
  }
  return (
    <Card>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="formQuestion"
          type="text"
          placeholder="My Question is..."
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <div className="answerLine">
          <img src={circleImage} alt="circle" class="circle" />
          <input
            className="formAnswer"
            type="text"
            placeholder="Answer 1"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          />
        </div>
        <div className="answerLine">
          <img src={circleImage} alt="circle" class="circle" />
          <input
            className="formAnswer"
            type="text"
            placeholder="Answer 2"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          />
        </div>
        <div className="answerLine">
          <img src={circleImage} alt="circle" class="circle" />
          <input
            className="formAnswer"
            type="text"
            placeholder="Answer 3"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          />
        </div>

        <button className="formButton" type="submit" value="Send">
          Send
          {/* <Link to="/Vote"></Link> */}
        </button>
      </form>
    </Card>
  );
}
export default Add;
