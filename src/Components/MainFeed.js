import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "bootstrap/dist/css/bootstrap.css";
import Masonry from "react-masonry-css";

import BLogo from "./b.png";
import ImageCard from "./Common/ImageCard";
//import { PrivateRoute } from "../App";

const MainFeed = (props) => {
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="masonryDiv">
          <ImageCard
            username="xchai"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className="masonryDiv">
          <h1>Hello!</h1>
        </div>
      </Masonry>
      {/* <div>
        <div className="contentColumn">
          <div className="featuredRow">
            <h1>Featured Gallery</h1>
          </div>
          <div className="postsColumn">
            <h3>Your Feed</h3>
          </div>
        </div>
        <div className="menuColumn">
          <table>
            <thead>
              <h3 className="menuHead">Easy Access</h3>
            </thead>
            <tr>
              <td className="menuRow">Providence Pets</td>
            </tr>
            <tr>
              <td className="menuRow">Brown Sports</td>
            </tr>
            <tr>
              <td className="menuRow">Event Photos</td>
            </tr>
            <tr>
              <td className="menuRow">Urban Structures</td>
            </tr>
          </table>
        </div>
      </div> */}
    </div>
  );
};
export default MainFeed;
