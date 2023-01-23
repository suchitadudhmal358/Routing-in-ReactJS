import React from "react";
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./NotFound";
import User from "./User";
import Visit from "./Visit";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/user" element={<User />} />
          <Route path="/visit" element={<Visit />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
