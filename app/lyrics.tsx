import { Track } from './types'

interface LyricsProps {
  track: Track
}

export default function Lyrics({ track }: LyricsProps) {
  return (
    <div className="whitespace-pre-wrap">
      {/* <p>(가사는 좋아하는 일부분만)</p> */}
      <p>{track.lyrics}</p>
    </div>
  )
}