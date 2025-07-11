// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Flight Schedule</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>

        {/* Calendar component */}
        <Calendar onChange={setDate} value={date} />

        {/* Display selected date */}
        <p>Selected date: {date.toDateString()}</p>

        {/* Updated button */}
        <button>Continue</button>
      </header>
    </div>
  );
}

export default App;
