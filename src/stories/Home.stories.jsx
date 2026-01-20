import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

export default {
    title: "Pages/Home",
    component: Home,
    parameters: {layout: 'fullscreen',}
};
decorators: [
    (story) => (
        <BrowserRouter>
           <Story />
        </BrowserRouter>
    )
]

export const default = {}; 