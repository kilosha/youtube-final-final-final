import { ConfigProvider, Layout, Menu, Button } from "antd";
import { Routes, Route } from "react-router";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layout/MainLayout";
import FavoritesPage from "./pages/FavoritesPage";

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
                    <Route element={<MainLayout />}>
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Route>

                    <Route path="/login" element={<LoginPage />} />
                </Routes>

                {/* <LoginPage /> */}
                {/* <MainPage /> */}
            </ConfigProvider>
        </>
    );
}

export default App;
