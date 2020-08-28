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

    const titles = [one, two, three, four, five, six, seven, eight, nine, ten,
    eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen,
    nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive,
    twentysix, twentyseven, twentyeight];

    const fill = [];

    const newContainer = {
      'max-width': "1500px",
    };

    const main = {
      'maxWidth': "1500px",
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

    for (let i = 0; i < 28; i+=1) {
      fill.push(
        <div style={newContainer} key={"slide" + i} className="container-fluid mt-5 mx-auto d-block eachSlide">
            <div className="row">
              <div className="col">
                <img className="img-fluid mx-auto d-block" src={titles[i]} alt=" " />
              </div>
            </div>
          </div>
      )
    };

    return (
      <div style={main} className="container-fluid" >
        <Slider {...settings} id="mainslide">
          {fill}
        </Slider>
        <div className="container mt-2">
          <div className="row">
            <div className="col text-center">
            <ReactAudioPlayer className="text-center"
              src={senseoftouch}
              controls
              loop/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
