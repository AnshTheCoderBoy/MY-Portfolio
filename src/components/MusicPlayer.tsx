import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, X } from 'lucide-react';

interface MusicPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  audioSrc: string;
  title: string;
  description: string;
  image: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isOpen,
  onClose,
  audioSrc,
  title,
  description,
  image
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    setIsRotating(isPlaying);
  }, [isPlaying]);

  // 🔥 Auto-play when modal opens
  useEffect(() => {
    const audio = audioRef.current;
    if (isOpen && audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Autoplay failed:', err));
    }
  }, [isOpen, audioSrc]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 animate-scale-in">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold">Music Player</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Album Art */}
          <div className="relative w-32 h-32 sm:w-48 sm:h-48">
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover rounded-full shadow-lg transition-transform duration-1000 ${
                isRotating ? 'animate-spin' : ''
              }`}
              style={{
                animationDuration: '3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            />
            <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-white shadow-inner"></div>
          </div>

          {/* Song Info */}
          <div className="text-center max-w-full">
            <h4 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">{title}</h4>
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{description}</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full space-y-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleSeek}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={togglePlayPause}
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-1" />
              )}
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-3 w-full">
            <Volume2 className="h-4 w-4 flex-shrink-0" />
            <Slider
              value={[volume]}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
          </div>
        </div>

        {/* 🎵 Audio tag */}
        <audio ref={audioRef} src={audioSrc} autoPlay />
      </div>
    </div>
  );
};

export default MusicPlayer;
