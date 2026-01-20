import { BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";

export default {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
            <Story />
            </BrowserRouter>
        )
    ]
};

export const Default = () => <Navbar />;

export const WithHomePage = () => (
    <>
    <Navbar />
    <Home />
    </>
);