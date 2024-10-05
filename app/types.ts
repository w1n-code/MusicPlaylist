export interface Track {
  title: string
  artist: string
  youtubeId: string
  lyrics: string
  group: string
}

export interface PlaylistData {
  tracks: Track[]
}