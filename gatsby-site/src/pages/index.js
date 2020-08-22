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
      <div className="container">
        <span className="header">
        <h2 className="flextitle"> Midnight City</h2>
        <img src={logosmall} alt=""/>
        <h2>A Black Lamb Production</h2>
        </span>
        <Slider {...settings} className="flexslide">
          <div id="one">
              <h1 id="midnight">Midnight</h1>
              <h1 id="city">City</h1>
              <h3 id="series">A New Series</h3>
              <h2 id="created">Created by M. Raven Metzner and Marc Webb</h2>
              <img id="first" src={first} alt=" "/>
          </div>
          <div id="two">
            <p>Three ordinary New Yorkers, complete strangers to each other, ride quietly on an elevator.</p>
            <img src={two} alt=" "/>
          </div>
          <div id="three">
            <p>A massive explosion rocks the building.</p>
          </div>
          <div id="four">
            <img src={four} alt=" "/>
          </div>
          <div id="five">
            <p>The three strangers pry open the elevator doors and leap into action, risking their lives to rescue dozens of people trapped by the fire and fallen brick.</p>
            <img id="fivea" src={fivea} alt=" "/>
            <img id="fiveb" src={fiveb} alt=" "/>
          </div>
          <div id="six">
            <p>They act like we all hope to in a crisis:</p>
            <p>calmly, precisely, heroically, selflessly.</p>
            <img src={six} alt=" "/>
          </div>
          <div id="seven">
            <p>As if they were meant to be there.</p>
          </div>
          <div id="eight">
            <p>As the chaos subsides, they introduce themselves and discover a bizarre coincidence.</p>
            <img src={eight} alt=" "/>
          </div>
          <div id="nine">
            <p>They all share the same name.</p>
            <p>And the same birthday.</p>
            <img src={nine} alt=" "/>
          </div>
          <div id="ten">
            <p>Understanding the truth behind this mysterious coincidence will change each of their lives…</p>
            <p>and the world forever.</p>
          </div>
          <div id="eleven">
            <p>MIDNIGHT CITY is an hour-long grounded sci-fi drama that follows three strangers drawn 
              together to investigate strange phenomena. They will discover dark forces vying over long 
              hidden wonders key to saving NYC from destruction and repairing their fractured lives.</p>
            <img src={eleven} alt=" "/>
          </div>
          <div id="twelve">
            <img src={twelvea} alt=" "/>
            <img src={twelveb} alt=" "/>
            <img src={twelvec} alt=" "/>
            <img src={twelved} alt=" "/>
          </div>
          <div id="thirteen">
            <p>THE THREE ALEXES</p>
            <p>A pragmatist, a scientist, a person of Faith. 
              Each will bring a unique perspective to their shared adventures and to each other’s lives. 
              Each is at an inflection point and must decide the right path forward - one that will define them. 
              The journey won’t always be easy - positive change is always hard won.</p>
            <img src={thirteena} alt=" "/>
            <img src={thirteenb} alt=" "/>
            <img src={thirteenc} alt=" "/>
          </div>
          <div id="fourteen">
            <p>ALEXANDRA LEIGH</p>
            <p>30s. An investigator for a private security firm. 
              Alexandra is a driven, powerful pragmatist who doesn't suffer fools, acts on instinct and never looks back. 
              We'll learn she has a side gig gathering compromising information for corporate espionage.</p>
            <img src={fourteen} alt=" "/>
          </div>
          <div id="fifteen">
            <p>ALEXANDER LEAH</p>
            <p>40s. A clinical psychologist and dream researcher. 
              Brilliant and socially awkward his life is defined by a series of calculated variables with all 
              emotion kept compartmentalized. We'll learn he is having an affair with a neighbor on a lower floor.</p>
            <img src={fifteen} alt=" "/>
          </div>
          <div id="sixteen">
            <p>ALEX LEE</p>
            <p>20s. A Theology grad student at NYU. 
              Generous, outgoing, compassionate, but harboring secret doubts about a life lived on a basis of Faith. 
              He wants to believe but isn't sure he has the will. 
              We will learn he is dealing over the counter meds to fellow students to support his elderly parents failing business.</p>
            <img src={sixteen} alt=" "/>
          </div>
          <div id="seventeen">
            <p>ALIX LEIGH</p>
            <p>30s. The 4th Alex. A scientist from a DARPA research group that helps focus and guide the other three. 
              And while she begins as one of the few sources of insight into the Alex's predicament, 
              her motivations and loyalties may be more insidious than we first believe.</p>
            <img src={seventeen} alt=" "/>
          </div>
          <div id="eighteen">
            <p>THE PILOT STORY</p>
            <img src={eighteen} alt=" "/>
          </div>
          <div id="nineteen">
            <p>The three Alexes will return to the scene of the explosion only to learn all 22 rescued tenants 
              are suffering from an unprecedented condition robbing them of their memories at an accelerated rate. 
              Doctors are baffled. In 24 hours, they will lose all ability to function.</p>
            <p>The only ones unaffected are our three Alexes and the last people they saved from the burning building, 
              MARICA (20) and her infant child who are recovering in the ER.</p>
            <p>ALIX LEIGH, a researcher from a DARPA initiative arrives in their lives and posits an incredible cause. 
              She believes the explosion wasn’t caused by a gas leak but by a literal tear in the fabric of reality. 
              Called a “Quantum Instability” she thinks it is affecting the 22 tenants in ways modern day science cannot measure.</p>
            <img src={nineteena} alt=" "/>
            <img src={nineteenb} alt=" "/>
          </div>
          <div id="twenty">
            <p>This “4th Alex” believes the advanced science that created the Instability 
              was the work of turn of the century Serbian-American genius, futurist and inventor, NIKOLAI TESLA. 
              But he died in 1943. So how is that possible?</p>
            <p>Marica may be the key. Our Alexes will learn the hospital treated her for a strain of Spanish Flu 
              that hasn’t been seen in over a hundred years. There is also a picture they dig up from a 1918 
              newspaper of a missing woman and child. The resemblance is more than passing. It has to be them.</p>
            <p>Did this Quantum Instability transport a woman from another time to ours? 
              And is her presence the reason for the strange affliction?</p>
            <p>Our Alexes are part of the mystery because of their immunity. 
              And we will reveal that each had a deeply personal reason they were in the building that night. 
              One that is decidedly less than heroic making them motivated to solve the mystery to save themselves. 
              At least at first.</p>
            <img src={twentya} alt=" "/>
            <img src={twentyb} alt=" "/>
            <img src={twentyc} alt=" "/>
          </div>
          <div id="twentyone">
            <p>The 4th Alex theorizes that by bringing Marica and her infant back to the building at Midnight 
              they might be able to reset the Instability and halt the 22 tenants decline. 
              This poses our three Alexes with a character-defining moral dilemma.</p>
            <p>The solution to the affliction may save the 22 tenants but doom Marica and her child. 
              Do they sacrifice two lives to save twenty-two?</p>
            <p>Another complication. Marica has escaped the hospital with her baby and is nowhere to be found. 
              Combining their real world talents and skills the three Alexes track her down to a long-abandoned 
              subway station beneath the streets of midtown. But they decide together that they can’t proceed 
              with the current plan. There has to be another way.</p>
            <p>The key is Marica herself. She will reveal she was one of Tesla’s lab assistants. 
              When she fell ill with the Spanish Flu in 1918, Tesla attempted to send her to a 
              future where a cure might exist with an experimental device of his own design.</p>
            <p>Long dormant, the Tesla device was inadvertently triggered by new subway construction 
              and caused the Quantum Instability that released Marica into 2021 but affected the others in the vicinity. 
              Our three Alexes have gained Marica’s trust and she gifts them with a hidden store of Tesla’s notes. 
              Using these the 4th Alex believes she can restart Tesla’s device long enough to untangle the Instability 
              and set things right.</p>
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
          autoPlay
          controls
          loop
        />
      </div>
    );
  }
}
