import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SearchPage = lazy(() => import('./pages/Search/Search'));
const DetailsPage = lazy(() => import('./pages/Details/Details'));

const App: React.FC = () => {
  return (
    <Router>
      {/* <Suspense fallback={<LinearProgress />}> */}
      <Suspense fallback={'loading'}>
        <div>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
