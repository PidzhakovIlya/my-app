import React from "react";
import "./App.css";
import {HashRouter, Route, Routes} from "react-router-dom";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {PostPage} from "./pages/PostPage/PostPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<PostsPage/>}/>
                <Route path="/posts/:id" element={<PostPage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
