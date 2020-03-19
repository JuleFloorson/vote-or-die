import React from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

const pollApiUrl =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/JuleFloorson/vote-or-die/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${pollApiUrl}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }
    getPoll();
  }, [pollId]);

  return (
    <Card>
      <h2>{poll?.question}</h2>
      <div>{poll?.answerOne}</div>
      <div>{poll?.answerTwo}</div>
      <div>{poll?.answerThree} </div>
    </Card>
  );
}
export default Result;
