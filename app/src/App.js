import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Test from "./pages/Home";
import Settings from "./pages/Settings";
import Videos from "./pages/Videos";
import History from "./pages/History";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/history" element={<History />} />
                <Route path="*" element={<Test />} />
            </Routes>
        </Router>
    );
}

export default App;
