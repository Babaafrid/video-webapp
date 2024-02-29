import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./Pages/Home/Home"
import Room from "./Pages/Room/Room";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App