import React from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const VideoPlayer: React.FC = () => {
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(0.8);
  const [played, setPlayed] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const playerRef = React.useRef<ReactPlayer>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
    setMuted(parseFloat(event.target.value) === 0);
  };

  const handleFullScreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const handleSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(event.target.value));
  };

  const handleSeekMouseUp = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(played);
    }
  };

  const handleProgress = (state: { played: number }) => {
    setPlayed(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div ref={containerRef} className="relative w-1/2 mt-10 h-96 rounded-xl overflow-hidden bg-gray-100">
      <ReactPlayer
        ref={playerRef}
        url="https://youtu.be/m_JIWSP57ow?si=eXtlFUC93yOVWy9K"
        playing={playing}
        volume={volume}
        muted={muted}
        width="100%"
        height="100%"
        controls={false} // Disable default controls
        className="rounded-lg"
        onProgress={handleProgress}
        onDuration={handleDuration}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, // Minimal YouTube branding
              rel: 0,            // Disable related videos at the end
              fs: 0,             // Disable fullscreen button
              disablekb: 1,       // Disable keyboard controls
              controls: 0,        // Hide native controls
              showinfo: 0,        // Hide video title and uploader
            },
          },
        }}
      />
      <div className="absolute bottom-2 left-2 right-2 flex flex-col space-y-1 items-center">
        <input
          type="range"
          min={0}
          max={1}
          step="0.01"
          value={played}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp} // Handles seek when user releases the slider
          className="w-full h-1 bg-gray-300 rounded-lg appearance-none"
        />
        <div className="flex items-center justify-between w-full">
          <button
            onClick={togglePlayPause}
            className="text-white text-2xl focus:outline-none"
          >
            {playing ? <Pause /> : <Play />}
          </button>
          <div className="flex items-center space-x-2 ml-auto">
            <button
              onClick={toggleMute}
              className="text-white text-2xl focus:outline-none"
            >
              {muted || volume === 0 ? <VolumeX /> : <Volume2 />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
            <button
              onClick={handleFullScreen}
              className="text-white text-2xl focus:outline-none"
            >
              <Maximize />
            </button>
          </div>
          <div className="text-white text-sm">
            {formatTime(duration * played)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
