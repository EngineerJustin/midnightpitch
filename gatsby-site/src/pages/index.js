import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactAudioPlayer from "react-audio-player";
import senseoftouch from "../media/senseoftouch.mp3";
import eight from "../media/eight.jpg";
import eighteen from "../media/eighteen.gif"
import eleven from "../media/eleven.jpg"
import fifteen from "../media/fifteen.jpg"
import five from "../media/five.jpg"
import fourteen from "../media/fourteen.jpg"
import nine from "../media/nine.gif"
import nineteen from "../media/nineteen.jpg"
import seventeen from "../media/seventeen.jpg"
import six from "../media/six.gif"
import sixteen from "../media/sixteen.jpg"
import thirteen from "../media/thirteen.gif"
import twelve from "../media/twelve.gif"
import twenty from "../media/twenty.gif"
import twentyeight from "../media/twentyeight.gif"
import twentyfive from "../media/twentyfive.gif"
import twentyfour from "../media/twentyfour.gif"
import twentyone from "../media/twentyone.jpg"
import twentyseven from "../media/twentyseven.gif"
import twentysix from "../media/twentysix.gif"
import twentythree from "../media/twentythree.gif"
import twentytwo from "../media/twentytwo.gif"
import two from "../media/two.gif"
import one from "../media/one.gif"
import three from "../media/three.jpg"
import four from "../media/four.gif"
import seven from "../media/seven.jpg"
import ten from "../media/ten.jpg"

export default class SimpleSlider extends Component {
  render() {

    const newContainer = {
      'max-width': "1500px",
    };

    const main = {
      position: 'relative',
    };

    const settings = {
      dots: false,
                infinite: true,
                speed: 1100,
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: true,
                centerMode: true,
                adaptiveHeight: false,
                fade: true,
                arrows: true,
                className: 'slides'
    };
    return (
      <div style={newContainer, main} className="container-fluid" >
        <Slider {...settings} id="mainslide">
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="one">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={one} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="two">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={two} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="three">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={three} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="four">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={four} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="five">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={five} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="six">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={six} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="seven">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={seven} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="eight">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={eight} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="nine">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={nine} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="ten">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={ten} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="eleven">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={eleven} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twelve">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twelve} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="thirteen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={thirteen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="fourteen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={fourteen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="fifteen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={fifteen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="sixteen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={sixteen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="seventeen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={seventeen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="eighteen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={eighteen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="nineteen">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={nineteen} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twenty">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twenty} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentyone">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentyone} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentytwo">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentytwo} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentythree">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentythree} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentyfour">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentyfour} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentyfive">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentyfive} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentysix">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentysix} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentyseven">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentyseven} alt=" " />
              </div>
            </div>
          </div>
          <div style={newContainer} className="container-fluid mt-5 mx-auto d-block eachSlide" id="twentyeight">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={twentyeight} alt=" " />
              </div>
            </div>
          </div>
        </Slider>
        <div class="container mt-2">
          <div class="row">
            <div class="col text-center">
            <ReactAudioPlayer className="text-center"
              src={senseoftouch}
              controls
              loop
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
