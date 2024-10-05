'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Youtube, Book } from "lucide-react"
import { useState } from 'react'
import LyricsModal from './LyricsModal'
import { playlistData } from './lyricsData'
import { Track } from './types'

interface PlaylistComponentProps {
  playlistId: string
  title: string
  isYearGroup?: boolean
}

export default function PlaylistComponent({ playlistId, title, isYearGroup = false }: PlaylistComponentProps) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

  const playlist = playlistData[playlistId]
  if (!playlist) return null

  const groupedTracks = playlist.tracks.reduce((acc, track) => {
    if (!acc[track.group]) {
      acc[track.group] = []
    }
    acc[track.group].push(track)
    return acc
  }, {} as Record<string, Track[]>)

  // Set 대신 배열 메서드를 사용하여 중복 제거
  const groupOrder = playlist.tracks
    .map(track => track.group)
    .filter((group, index, self) => self.indexOf(group) === index)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <ScrollArea className="h-[50vh] sm:h-[400px] w-full rounded-md border">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          {groupOrder.map(group => (
            <div key={group} className="mb-4">
              <h2 className="text-lg font-semibold mb-2">
                {isYearGroup ? `${group}년` : group}
              </h2>
              {groupedTracks[group].map((track, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <div className="flex-grow flex items-center space-x-4">
                    <div className="text-sm font-medium">{track.title}</div>
                    <div className="text-xs text-muted-foreground">{track.artist}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${track.youtubeId}`, '_blank')}
                      aria-label={`${track.title} YouTube 링크 열기`}
                      className="w-full sm:w-auto"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      <span className="sm:hidden">YouTube</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedTrack(track)}
                      aria-label={`${track.title} 가사 보기`}
                      className="w-full sm:w-auto"
                    >
                      <Book className="h-4 w-4 mr-2" />
                      <span className="sm:hidden">가사</span>
                    </Button>
                  </div>
                </div>
              ))}
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
      {selectedTrack && (
        <LyricsModal
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
        />
      )}
    </div>
  )
}