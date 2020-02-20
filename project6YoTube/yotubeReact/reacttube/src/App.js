import React, { Component } from 'react';
import VideoList from './components/videoList/VideoList';
import Video from './components/video/Video';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';
import yotube from './api/yotube';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WatchVideo from './components/watchVideo/WatchVideo';

export default class App extends Component {

    initialFirstVideo = {id: { videoId: "0"}, 
          snippet: {title: "a", description: "b"}}

    state = {
      videos: [],
      firstVideo: this.initialFirstVideo
    }

  handleSubmit = async(searchTerm) => {

  const response = await yotube.get('search', {
    params: {
      part: "snippet",
      maxResults: 3,
      key: `AIzaSyCeCFeVFIlSPjwDclJxBKMTuVfnH43nCgQ`,
      q: searchTerm,
    }
  })
  
  //유튜브 자료가 온상태, 아직 스태이트 는 압데가 안 된 상태
  this.setState({ videos: response.data.items});

  this.setState({firstVideo: response.data.items[0]});

  // console.log(response.data.items[0]);
  //이 명령어 이후: 스태이트가 압데이트가 되고 웹사이트의 모든 기능은 이제 부터
  //스태이트를 통해서 이루어 져야함.

// object
// kind: "youtube#searchResult"
// etag: ""Fznwjl6JEQdo1MGvHOGaz_YanRU/LtiFmcCRe4TC422A_EHx_S5lvko""
// id: {kind: "youtube#video", videoId: "-REr9p06-SQ"}
// snippet: {publishedAt: "2019-12-24T11:00:11.000Z", channelId: "UC76q5di__eRuM1_kMArvKKQ", title: "서태지 밴드 콘서트 투어 ‘콰이어트 나이트’  ( seotaiji band concert tour &#39;Quiet Night&#39;)", description: "2014-2015 서태지 밴드 콘서트 투어 '콰이어트 나이트는 2014년 12월 30일 서울 공연으로 시작하여 광주 대구 부산을 거쳐 2015년 3월 1일 서울 앙코르...", thumbnails: {…}, …}


}
   
  render() {
    return (
      <Router>
        <Route exact path="/">
          <div className="app">
            <Header onChildClick={this.handleSubmit} />
            <div className="mainBody">
              <SideMenu />
              <VideoList videoData={this.state.videos} />
            </div>
          </div>
        </Route>
        <Route
          path="/watch"
          render={() => (
            <WatchVideo
              onChildClick={this.handleSubmit}
              videoData={this.state}
            />
          )}
        />
      </Router>
    );
  }
}

