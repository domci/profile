'use client'

import { useState, useRef, useEffect } from 'react'

interface AudioPlayerProps {
  audioUrl: string
}

export function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }, [audioRef.current?.onloadedmetadata, audioRef.current?.readyState])

  function togglePlay() {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      cancelAnimationFrame(animationRef.current!)
    } else {
      audioRef.current.play()
      animationRef.current = requestAnimationFrame(updateProgress)
    }
    setIsPlaying(!isPlaying)
  }

  function updateProgress() {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / duration) * 100)
      animationRef.current = requestAnimationFrame(updateProgress)
    }
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    if (!audioRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audioRef.current.currentTime = percent * duration
    setProgress(percent * 100)
  }

  return (
    <div className="w-full max-w-md bg-background/50 backdrop-blur-lg rounded-3xl shadow-lg p-8 transform transition-all duration-500 hover:scale-[1.02]">
      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isPlaying ? 'bg-green-400' : 'bg-blue-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-green-500' : 'bg-blue-500'}`}></span>
        </span>
        {isPlaying ? 'Now Playing:' : 'Listen to:'} My AI Resume Podcast
      </div>
      
      <div className="relative group mb-6">
        <button
          onClick={togglePlay}
          className="relative w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full shadow-lg 
                   overflow-hidden focus:outline-none transform transition-all duration-300
                   hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                   group-hover:from-blue-600 group-hover:to-purple-700"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {isPlaying ? (
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
          {isPlaying && (
            <div className="absolute inset-0">
              <div className="w-full h-full animate-spin-slow">
                <svg className="w-full h-full text-white opacity-20" fill="none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
          )}
        </button>

        {isPlaying && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-end gap-1 h-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-blue-500 to-purple-600 rounded-full animate-soundwave origin-bottom"
                style={{ 
                  height: '16px',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div 
        className="w-full h-1.5 bg-gray-700/50 rounded-full mt-8 cursor-pointer relative overflow-hidden"
        onClick={seek}
      >
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-muted-foreground">
          {formatTime(audioRef.current?.currentTime || 0)}
        </div>
        <div className="text-xs text-muted-foreground">
          {formatTime(duration)}
        </div>
      </div>

      <div className="text-xs text-muted-foreground mt-6 text-center">
      </div>

      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}
