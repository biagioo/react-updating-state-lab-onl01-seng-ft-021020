import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }
   
    handleBitrateClick = () =>{
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () =>{
        console.log(this.state.settings.video.resolution)
        this.setState({
            settings: {
                ...this.state.settings,
                    video:{
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
            }
        })
    }

    render(){
        console.log(this.state.settings)
        return(
        <div>
            <button 
                onClick={this.handleBitrateClick} 
                className='bitrate'>
                bitrate is {this.state.settings.bitrate}
            </button>
            <button 
                onClick={this.handleResolutionClick} 
                className='resolution'>
                resolution is {this.state.settings.video.resolution}
            </button>
        </div>
        )
    }
}