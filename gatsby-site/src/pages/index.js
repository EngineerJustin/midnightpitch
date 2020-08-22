import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../media/first.gif";
import ReactAudioPlayer from "react-audio-player";
import senseoftouch from "../media/senseoftouch.mp3";
import eight from "../media/eight.jpg";
import eighteen from "../media/eighteen.gif"
import eleven from "../media/eleven.png"
import fifteen from "../media/fifteen.png"
import fivea from "../media/fivea.jpg"
import fiveb from "../media/fiveb.jpg"
import four from "../media/four.gif"
import fourteen from "../media/fourteen.png"
import logolarge from "../media/logo-large.png"
import logosmall from "../media/logo-small.png"
import nine from "../media/nine.gif"
import nineteena from "../media/nineteena.png"
import nineteenb from "../media/nineteenb.jpg"
import seventeen from "../media/seventeen.png"
import six from "../media/six.gif"
import sixteen from "../media/sixteen.jpg"
import thirteena from "../media/thirteena.jpg"
import thirteenb from "../media/thirteenb.png"
import thirteenc from "../media/thirteenc.gif"
import twelvea from "../media/twelvea.gif"
import twelveb from "../media/twelveb.png"
import twelvec from "../media/twelvec.png"
import twelved from "../media/twelved.gif"
import twentya from "../media/twentya.jpg"
import twentyb from "../media/twentyb.gif"
import twentyc from "../media/twentyc.gif"
import twentyeight from "../media/twentyeight.gif"
import twentyfive from "../media/twentyfive.gif"
import twentyfour from "../media/twentyfour.gif"
import twentyonea from "../media/twentyonea.png"
import twentyoneb from "../media/twentyoneb.jpg"
import twentyseven from "../media/twentyseven.gif"
import twentysixa from "../media/twentysixa.png"
import twentysixb from "../media/twentysixb.gif"
import twentysixc from "../media/twentysixc.png"
import twentythree from "../media/twentythree.gif"
import twentytwoa from "../media/twentytwoa.gif"
import twentytwob from "../media/twentytwob.jpg"
import twentytwoc from "../media/twentytwoc.png"
import two from "../media/two.gif"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: true,
                centerMode: true,
                adaptiveHeight: true,
                fade: true,
                arrows: true,
                className: 'slides'
    };
    return (
      <div className="container">
        <h2 className="flextitle"> Midnight City</h2>
        <Slider {...settings} className="flexslide">
          <div id="one">
              <img id="first" src={first} alt=" "/>
          </div>
          <div id="two">
            <img src={two} alt=" "/>
          </div>
          <div id="three">
            <h3>3</h3>
          </div>
          <div id="four">
            <img src={four} alt=" "/>
          </div>
          <div id="five">
            <img src={fivea} alt=" "/>
            <img src={fiveb} alt=" "/>
          </div>
          <div id="six">
            <img src={six} alt=" "/>
          </div>
          <div id="seven">
            <h3>7</h3>
          </div>
          <div id="eight">
            <img src={eight} alt=" "/>
          </div>
          <div id="nine">
            <img src={nine} alt=" "/>
          </div>
          <div id="ten">
            <h3>10</h3>
          </div>
          <div id="eleven">
            <img src={eleven} alt=" "/>
          </div>
          <div id="twelve">
            <img src={twelvea} alt=" "/>
            <img src={twelveb} alt=" "/>
            <img src={twelvec} alt=" "/>
            <img src={twelved} alt=" "/>
          </div>
          <div id="thirteen">
            <img src={thirteena} alt=" "/>
            <img src={thirteenb} alt=" "/>
            <img src={thirteenc} alt=" "/>
          </div>
          <div id="fourteen">
            <img src={fourteen} alt=" "/>
          </div>
          <div id="fifteen">
            <img src={fifteen} alt=" "/>
          </div>
          <div id="sixteen">
            <img src={sixteen} alt=" "/>
          </div>
          <div id="seventeen">
            <img src={seventeen} alt=" "/>
          </div>
          <div id="eighteen">
            <img src={eighteen} alt=" "/>
          </div>
          <div id="nineteen">
            <img src={nineteena} alt=" "/>
            <img src={nineteenb} alt=" "/>
          </div>
          <div id="twenty">
            <img src={twentya} alt=" "/>
            <img src={twentyb} alt=" "/>
            <img src={twentyc} alt=" "/>
          </div>
          <div id="twentyone">
            <img src={twentyonea} alt=" "/>
            <img src={twentyoneb} alt=" "/>
          </div>
          <div id="twentytwo">
            <img src={twentytwoa} alt=" "/>
            <img src={twentytwob} alt=" "/>
            <img src={twentytwoc} alt=" "/>
          </div>
          <div id="twentythree">
            <img src={twentythree} alt=" "/>
          </div>
          <div id="twentyfour">
            <img src={twentyfour} alt=" "/>
          </div>
          <div id="twentyfive">
            <img src={twentyfive} alt=" "/>
          </div>
          <div id="twentysix">
            <img src={twentysixa} alt=" "/>
            <img src={twentysixb} alt=" "/>
            <img src={twentysixc} alt=" "/>
          </div>
          <div id="twentyseven">
            <img src={twentyseven} alt=" "/>
          </div>
          <div id="twentyeight">
            <img src={twentyeight} alt=" "/>
          </div>
        </Slider>
        <ReactAudioPlayer className="flexplayer"
          src={senseoftouch}
          autoPlay={true}
          controls
          loop
        />
      </div>
    );
  }
}
