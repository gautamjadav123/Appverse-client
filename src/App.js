import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home-page/Home";
import Signup from "./pages/Authentication-pages/Signup";
import Login from "./pages/Authentication-pages/Login";
import { ForgotPassword } from "./pages/Authentication-pages/ForgotPassword";
import Sidebar from "./pages/user-profile/Sidebar";
import Profile from "./pages/user-profile/Profile";
import WalletAndPayment from "./pages/user-profile/WalletAndPayment";
import PaymentModal from "./pages/payment/PaymentModal";
import ProfileInformation from "./pages/user-profile/Information";
import Rewards from "./pages/user-profile/Rewards";
import PurchaseHistory from "./pages/user-profile/PurchaseHistory";
import DownloadedApps from "./pages/user-profile/DownloadedApps";
import Settings from "./pages/user-profile/Settings";
import UPIPayment from "./pages/payment/UPIPayment";
import CardPayment from "./pages/payment/CardPayment";
import AppMainPage from "./pages/app-section/AppMainPage";
import FoodAppsMainPage from "./pages/food-apps-section/FoodAppsMainPage";
import GameHome from "./pages/games-section/game-home/GameHome";
import GameApp from "./pages/games-section/game-app-section/GameApp";
import ResetPassword from "./pages/Authentication-pages/ResetPassword";
import NewPassword from "./pages/Authentication-pages/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route path="/upi-payment" element={<UPIPayment />} />
          <Route path="/card-payment" element={<CardPayment />} />
          {/* Profile Route with Nested Routes */}
          <Route path="/profile" element={<Profile />}>
            <Route path="information" element={<ProfileInformation />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="purchase-history" element={<PurchaseHistory />} />
            <Route path="downloaded-apps" element={<DownloadedApps />} />
            <Route path="wallet-payment" element={<WalletAndPayment />} />
            <Route path="settings" element={<Settings />} />
            <Route path="payment" element={<PaymentModal />} />
          </Route>
          <Route path="app/:name" element={<AppMainPage />} />
          <Route path="/search-results" element={<FoodAppsMainPage />} />

          {/* Game section */}
          <Route path="/games" element={<GameHome />} />
          <Route path="/games/:name" element={<GameApp />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
