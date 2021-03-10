import React from 'react';
import youTube from './youTube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

class App extends React.Component{

  state={videos:[],selectedVideo:null};

componentDidMount(){
  this.onTermSubmit('goku');
}
onTermSubmit=async term=>{
  const response= await youTube.get('/search',{

    params:{
      part:'snippet',
      maxResults:5,
      key:'AIzaSyBkh-s1ZsjtljRNWRzJ-v1urJjm48NinQk',
      q:term
    }
  });
  this.setState({
    videos:response.data.items,
    selectedVideo:response.data.items[0]
  });
}

onVideoSelect= video =>{
  this.setState({selectedVideo:video});
}
  render(){

    return(
      <div className="ui cointainer">
      <SearchBar onTermSubmit={this.onTermSubmit}/>
      <div className="ui grid">
       <div className="ui row">
        <div className="eleven wide column">
          <VideoDetail selectedVideo={this.state.selectedVideo}/>
        </div>
        <div className="five wide column">
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
      </div>
      </div>
     </div>
    );
  }
}

export default App;
