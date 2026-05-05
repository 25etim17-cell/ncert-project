import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';
import CustomTestPage from './pages/CustomTestPage';
import ClassOverviewPage from './pages/ClassOverviewPage';
import TestPage from './components/test/TestPage';
import AuthPage from './pages/AuthPage';
import ProgressDashboard from './pages/ProgressDashboard';
import ProtectedRoute from './components/layout/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":classId" element={<ProtectedRoute><ClassOverviewPage /></ProtectedRoute>} />
          <Route path=":classId/:subject" element={<ProtectedRoute><SubjectPage /></ProtectedRoute>} />
          <Route path=":classId/:subject/:chapterId" element={<ProtectedRoute><ChapterPage /></ProtectedRoute>} />
          <Route path="custom-test" element={<ProtectedRoute><CustomTestPage /></ProtectedRoute>} />
          <Route path="test" element={<ProtectedRoute><TestPage /></ProtectedRoute>} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="dashboard" element={<ProtectedRoute><ProgressDashboard /></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
