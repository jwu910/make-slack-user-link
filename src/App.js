import React, { useEffect, useState } from "react";
import "./App.css";
import ClipboardJS from "clipboard";

function App() {
  const [workspace, setWorkspace] = useState("");
  const [userId, setUserId] = useState("");
  const [userLink, setUserLink] = useState("");

  const handleWorkspace = (event) => {
    setWorkspace(event.target.value);
  };

  const handleUserId = (event) => {
    setUserId(event.target.value);
  };
  new ClipboardJS(".btn");

  useEffect(() => {
    console.log("use effect");

    setUserLink(`https://${workspace}.slack.com/user/${userId}`);
  }, [workspace, userId]);
  return (
    <div className="App">
      <div className="App-header">
        <div style={{ margin: 12 }}>
          <label>Workspace: </label>
          <input type="text" value={workspace} onInput={handleWorkspace} />
        </div>
        <div>
          <label>User Id: </label>
          <input type="text" value={userId} onChange={handleUserId} />
        </div>

        <div style={{ margin: 12 }}>
          <input id="userLink" value={userLink} />
          <button className="btn" data-clipboard-target="#userLink">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
