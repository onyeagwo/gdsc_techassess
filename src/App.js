import logo from './logo.svg';
//import React, { Component } from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);
    const [ourEmoji, setEmoj]=useState("");
    var Emoji1 = ['\u{1F600}'];
    var Emoji2 = ['\u{1F601}'];
    var Emoji3 = ['\u{1F602}'];
    var Emoji4 = ['\u{1F603}'];
    var Emoji5 = ['\u{1F604}'];

    function addThemTogether() {
        setTotal(number1 + number2);

        if (10 >= total) {
            setEmoj(Emoji1);
        }

        else if (39>=total && total>=10){
            setEmoj(Emoji2);

        }
        else if (69>=total && total>=40) {
            setEmoj(Emoji3);

        }
        else if (99>= total && total>=70) {
            setEmoj(Emoji4);

        }
        else if (total=>100) {
            setEmoj(Emoji5);

        }
    }

  return (
    <div className="App">
      <header className="App-header">
        <table border = "1" width="20%">
            <tr>
                <th>Sum</th>
                <th>Emoji</th>
            </tr>
            <tr>
                <td>10 or Lower</td>
                 <td><p>&#128512;</p></td>
            </tr>
            <tr>
                <td>10 to 39</td>
                  <td><p>&#128513;</p></td>
            </tr>
            <tr>
                <td>40 to 69</td>
                  <td><p>&#128514;</p></td>
            </tr>
            <tr>
                <td>70-99</td>
                <td><p>&#128515;</p></td>
            </tr>
            <tr>
                <td>100 or higher</td>
                <td><p>&#128516;</p></td>
            </tr>
        </table>
        <body>
        <input 
            type="number" 
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
            placeholder = "0"
            min = "0"
        />
        <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
            placeholder = "0"
        />
        </body>
              <button onClick={addThemTogether}>Add!</button>
        <h2>{total}</h2>
        <p>{ourEmoji}</p>
      </header>
    </div>
  );
}

export default App;
