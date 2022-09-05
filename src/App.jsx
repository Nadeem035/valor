import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { React, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const loading = (
  <div className="loading"></div>
)    

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));


function App() {
  return (
    <Suspense fallback={loading}>
      <Router>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>                
      </Router>
    </Suspense>
  );
}

export default App;
