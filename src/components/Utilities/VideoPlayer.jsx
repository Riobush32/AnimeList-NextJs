"use client"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVidioPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: "300",
        height: "250",
    }

    const Player = () => {
        return (
                <div className="fixed bottom-2 right-2">
                <button className="btn btn-square btn-sm md:btn-md btn-primary float-right mb-1 px-2"
                            onClick={handleVidioPlayer}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                <YouTube
                    vidioid={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("video is broken, please try another video")}
                />
                </div>
        )
    }

    return isOpen ? 
      <Player />
    : 
      <div class="fixed bottom-1 right-1">
        <button class="btn btn-primary"
                onClick={handleVidioPlayer}>tonton trailer</button>
      </div>
    
}

export default VideoPlayer