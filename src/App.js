import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UsersFetch from "./components/UsersFetch";
import FetchPosts from "./components/FetchPosts";
import FetchWithErrorPage from "./components/FetchWithError";
import DynamicPosts from "./components/DynamicPosts";
import UsersPaginated from "./components/UsersPaginated";
import SearchablePosts from "./components/SearchablePosts";
import UserCache from "./components/UserCache";
import DetailMaster from "./components/DetailMaster";
import SearchDebounced from "./components/SearchDebounced";
import InfiniteScroll from "./components/InfiniteScroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
      <Router>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React Task App
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {/* Static Links */}
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>

                {/* Dropdown Menu */}
                <li className="nav-item dropdown">
                  <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                  >
                    Tasks
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* Old Tasks */}
                    <li>
                      <Link className="dropdown-item" to="/fetch-users">
                        Fetch Users
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fetch-posts">
                        Fetch Posts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fetch-error">
                        Fetch with Error
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    {/* New Tasks */}
                    <li>
                      <Link className="dropdown-item" to="/dynamic-posts">
                        Dynamic Posts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/paginated-users">
                        Paginated Users
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/searchable-posts">
                        Searchable Posts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cached-users">
                        Cached Users
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/master-detail">
                        Master-Detail View
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/debounced-search">
                        Debounced Search
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/infinite-scroll">
                        Infinite Scroll
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes for all tasks */}
        <Routes>
          {/* Old Tasks */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/fetch-users" element={<UsersFetch />} />
          <Route path="/fetch-posts" element={<FetchPosts />} />
          <Route path="/fetch-error" element={<FetchWithErrorPage />} />

          {/* New Tasks */}
          <Route path="/dynamic-posts" element={<DynamicPosts />} />
          <Route path="/paginated-users" element={<UsersPaginated />} />
          <Route path="/searchable-posts" element={<SearchablePosts />} />
          <Route path="/cached-users" element={<UserCache />} />
          <Route path="/master-detail" element={<DetailMaster />} />
          <Route path="/debounced-search" element={<SearchDebounced />} />
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />

          {/* Default Route */}
          <Route
              path="/"
              element={
                <div className="container mt-4 text-center">
                  <h1>Welcome!</h1>
                  <p>Please select a task from the navigation menu above to get started.</p>
                </div>
              }
          />
        </Routes>
      </Router>
  );
}

export default App;
