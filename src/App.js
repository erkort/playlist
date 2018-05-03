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
        songs: ['Sypmhony of Destruction', 'Tornado of Souls', 'Holy wars', 'Whisky in The Jar']
      },
      {
        name: 'Playlist-2',
        songs: ['Sypmhony of Destruction', 'Tornado of Souls', 'Holy wars', 'Whisky in The Jar']
      },
      {
        name: 'Playlist-3',
        songs: ['Sypmhony of Destruction', 'Tornado of Souls', 'Holy wars', 'Whisky in The Jar']
      },
      {
        name: 'Playlist-4',
        songs: ['Sypmhony of Destruction', 'Tornado of Souls', 'Holy wars', 'Whisky in The Jar']
      }
    ]
  }
}
class Aggregate extends Component {
  render(){
      return (
        <div style={{width: '40%', display:'inline-block'}}>
          <h2 style={defaultStyle}>{this.props.playlists && this.props.playlists.length} Text</h2>
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
        <Aggregate playlists={this.state.serverData.user.playlists}/>
        <Aggregate/>  
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
