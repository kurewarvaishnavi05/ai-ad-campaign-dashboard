import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PublicLayout } from './components/layout/PublicLayout';
import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PublicLayout>
            <Landing />
          </PublicLayout>
        } />
        <Route path="/dashboard" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        {/* Fallback route */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
