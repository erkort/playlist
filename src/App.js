import React, { Component } from 'react';
import './App.css';

let defaultStyle={
  color: '#000'
}
let fakeServerData ={
  user:{
    name: 'Erkut',
    playlists: [
      {
        name: 'Playlist-1',
        songs: [
        {name:'Sypmhony of Destruction', duration: 1345},
        {name:'Tornado of Souls', duration: 1200},
        {name:'Holy wars',duration: 2500},
        {name:'Whisky in The Jar', duration: 1234}
        ]
      },
      {
        name: 'Playlist-2',
         songs: [
        {name:'Sypmhony of Destruction', duration: 1345},
        {name:'Tornado of Souls', duration: 1200},
        {name:'Holy wars',duration: 2500},
        {name:'Whisky in The Jar', duration: 1234}
        ]
      },
      {
        name: 'Playlist-3',
         songs: [
        {name:'Sypmhony of Destruction', duration: 1345},
        {name:'Tornado of Souls', duration: 1200},
        {name:'Holy wars',duration: 2500},
        {name:'Whisky in The Jar', duration: 1234}
        ]
      },
      {
        name: 'Playlist-4',
         songs: [
        {name:'Sypmhony of Destruction', duration: 1345},
        {name:'Tornado of Souls', duration: 1200},
        {name:'Holy wars',duration: 2500},
        {name:'Whisky in The Jar', duration: 1234}
        ]
      }
    ]
  }
}
class PlaylistCounter extends Component {
  render(){
      return (
        <div style={{width: '40%', display:'inline-block'}}>
          <h2 style={defaultStyle}>{this.props.playlists.length} Playlist</h2>
        </div>
      );
  }
}
class HoursCounter extends Component {
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist)=> {
        return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
        return sum + eachSong.duration
    }, 0)
      return (
        <div style={{width: '40%', display:'inline-block'}}>
          <h2 style={defaultStyle}>{Math.round(totalDuration/60)} Hours</h2>
        </div>
      );
  }
}
class Filter extends Component {
  render(){
    return(
      <div>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width:'25%', display:'inline-block'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={serverData: {}}
  }

  componentDidMount(){
      setTimeout(()=> {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    return (

      <div className="App">
        {this.state.serverData.user ?
    <div>
        <h1>{this.state.serverData.user.name}'s Playlists</h1>    
        <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
        <HoursCounter playlists={this.state.serverData.user.playlists}/>  
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
      : <h1>Loading...</h1>
       }
       </div>
    );
  }
}

export default App;
