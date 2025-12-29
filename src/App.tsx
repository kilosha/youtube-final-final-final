import { ConfigProvider, Layout, Menu, Button } from "antd";
import { Routes, Route } from "react-router";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layout/MainLayout";
import FavoritesPage from "./pages/FavoritesPage";
import ProtectedRoute from "./routes/ProtectedRoute";

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
                </Routes>
            </ConfigProvider>
        </>
    );
}

export default App;
