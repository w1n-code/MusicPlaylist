import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"
import Lyrics from './lyrics'
import { Track } from './types'
import { useState, useEffect } from 'react'

interface LyricsModalProps {
  track: Track
  onClose: () => void
}

export default function LyricsModal({ track, onClose }: LyricsModalProps) {
  const [maxHeight, setMaxHeight] = useState<number>(0)

  useEffect(() => {
    const updateMaxHeight = () => {
      setMaxHeight(window.innerHeight * 0.6)
    }

    updateMaxHeight()
    window.addEventListener('resize', updateMaxHeight)

    return () => {
      window.removeEventListener('resize', updateMaxHeight)
    }
  }, [])

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-[425px] flex flex-col p-0" 
        style={{ height: `${maxHeight}px` }}
        onInteractOutside={onClose}
      >
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-2">
          <DialogTitle className="text-lg font-semibold">{track.title} - {track.artist}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            aria-label="닫기"
            className="h-8 w-8 p-0"
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogHeader>
        <ScrollArea className="flex-grow px-6">
          <div className="pr-4">
            <Lyrics track={track} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}