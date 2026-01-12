import { ConfigProvider } from "antd";
import { Routes, Route, Navigate } from "react-router";

import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layout/MainLayout";
import FavoritesPage from "./pages/FavoritesPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";

import "./App.css";

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: "#FFFFFF"
                        }
                    }
                }}
            >
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <MainLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Route>

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="*"
                        element={<Navigate replace to="/search" />}
                    />
                </Routes>
            </ConfigProvider>
        </>
    );
}

export default App;
