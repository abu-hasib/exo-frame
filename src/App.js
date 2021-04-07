import { useState } from "react";
import { Node, New } from "./components/Node";
import Button from "./global/Button";
import randomIntFromInterval from "./constants/makeRandomNumber";


const initialElement = [
  {
    id: '1',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  }
]

function App() {
  const [newElement, setnewElement] = useState(initialElement);
  const [id, setId] = useState(2);

  function onNewClick(e) {
    console.log("Clickwed");

    setId(id + 1);

    let options = {
      id,
      type: "input", // input node
      data: { label: `Input Node ${id}` },
      position: {
        x: randomIntFromInterval(1, 250),
        y: randomIntFromInterval(1, 250),
      },
    };

    setnewElement([...newElement, options]);
  }
  return (
    <div>
      {/* <Node /> */}
      <New options={newElement} />
      <Button onClick={onNewClick}>New</Button>
    </div>
  );
}

export default App;
