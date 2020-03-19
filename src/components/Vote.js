import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const pollApiUrl =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/JuleFloorson/vote-or-die/polls";

function Vote() {
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
    <div>
      <h2>{poll?.question}</h2>
      <label>
        <input type="radio" name="answer" value={1} />
        {poll?.answerOne}
      </label>
      <label>
        <input type="radio" name="answer" value={2} />
        {poll?.answerTwo}
      </label>
      <label>
        <input type="radio" name="answer" value={3} />
        {poll?.answerThree}
      </label>
      Vote
      <Link to="/Result">Result</Link>
    </div>
  );
}
export default Vote;
