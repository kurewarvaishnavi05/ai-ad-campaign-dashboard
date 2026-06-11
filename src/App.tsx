import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PublicLayout } from './components/layout/PublicLayout';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Landing } from './pages/Landing';
import { CampaignProvider } from './context/CampaignContext';
import './App.css';

function App() {
  return (
    <CampaignProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <PublicLayout>
              <Landing />
            </PublicLayout>
          } />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/dashboard/analytics" element={<Layout><Analytics /></Layout>} />
          {/* Fallback route */}
          <Route path="*" element={<Landing />} />
        </Routes>
      </Router>
    </CampaignProvider>
  );
}

export default App;
