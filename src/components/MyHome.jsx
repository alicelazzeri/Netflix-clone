import { Component } from "react";
import MyHeader from "./MyHeader";
import MyMovie from "./MyMovie";
import picture from "../assets/media/media1.jpg";

class MyHome extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MyHeader />
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Trending Now</h5>
          <div id="trending-now">
            <div class="movie-row">
              <div className="row g-1 flex-nowrap movie-list py-2">
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Watch It again</h5>
          <div id="trending-now">
            <div class="movie-row">
              <div className="row g-1 flex-nowrap movie-list py-2">
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
              </div>
            </div>
          </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">New Releases</h5>
          <div id="trending-now">
            <div class="movie-row">
              <div className="row g-1 flex-nowrap movie-list py-2">
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
                <MyMovie src={picture} alt="movie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyHome;
