import "./App.css";
import axios from "axios";

function App() {
  function sendRequest() {
    axios
      .post(`/test`, {
        withCredentials: true,
      })
      .then((res) => {
        alert(res.data);
        console.log(res.data);
      });
  }
  const outerDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div className="App">
      <div style={outerDiv}>
        <span>This is a template</span>
        <button onClick={sendRequest} class="btn">
          test
        </button>
      </div>
    </div>
  );
}

export default App;
