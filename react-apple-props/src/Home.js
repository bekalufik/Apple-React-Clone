import React, { Component } from 'react'
import Alert from "./components/AlertComponents/Alert";
import Main from "./components/MainHighlighter/Main";
import SecondAndThird from './components/SecondAndThirdComponent/SecondAndThird';
import Fourth from './components/FourthHighlighter/Fourth';
import Fifth from './components/FifthHighlighter/Fifth';
import Sixth from './components/SixthHighlighter/Sixth';
import YoutubeVideos from './components/YouTubeVideos/YoutubeVideos';



 class Home extends Component {
  render(){
    return (
      
      <div >
       <Alert />
       <Main />
       <SecondAndThird classNameDiv="second-highight-wrapper text-center white mt-2" title='Macbook pro 13"' classNameH3="py-0" classNameP="text-muted " pText='Available starting 6.24' linkText='Order now'/>
       <SecondAndThird classNameDiv="third-highight-wrapper text-center mt-2" title='iphone 13'   pText='The new superpower' linkText='buy'/>
       <Fourth />
       <Fifth />
       <Sixth />
      <YoutubeVideos />
      </div>
    );
    }
}

export default Home