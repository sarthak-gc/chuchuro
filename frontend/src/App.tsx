import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import UserProfileForm from "./components/user/UserProfileForm/UserProfileForm";
import JobFeed from "./components/user/JobFeed/JobFeed";
import HRDashboard from "./components/hr/HRDashboard/HRDashboard";
import { GlobalStyles } from "./styles/GlobalStyles";
import Signup from "./components/auth/signup/Signup";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <main style={{ paddingTop: "20px", minHeight: "calc(100vh - 84px)" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/jobs" replace />} />
              <Route path="/sign-up/user" element={<Signup type="user" />} />
              <Route path="/sign-up/hr" element={<Signup type="hr" />} />
              <Route path="/profile" element={<UserProfileForm />} />
              <Route path="/jobs" element={<JobFeed />} />
              <Route path="/applications" element={<ApplicationsPage />} />
              <Route path="/hr-dashboard" element={<HRDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

// Temporary placeholder components
const ApplicationsPage = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h2>My Applications</h2>
    <p>Your job applications will appear here.</p>
  </div>
);

const NotFound = () => (
  <div style={{ padding: "40px", textAlign: "center" }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

export default App;
