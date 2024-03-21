import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmitGpt = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/chat", { prompt })
      .then((res) => {
        setResponse(res.data.response); // Access the 'response' property from the data object
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmitGpt}>
          <div>
            <div>
              <label>just say something:</label>
            </div>
            <div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
        <div>
          <p>{response}</p> {/* Render the 'response' value */}
        </div>
      </div>
    </>
  );
}

export default App;
