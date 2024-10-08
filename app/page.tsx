import PlaylistComponent from './playlist'

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
      <PlaylistComponent playlistId="2017-2020" title="Playlist: 2017~2020년" isYearGroup={true} />
      <PlaylistComponent playlistId="2021-2023" title="Playlist: 2021~2023년" />
      <PlaylistComponent playlistId="양태원의 머리 속" title="Playlist: 양태원의 머리 속" />
      <PlaylistComponent playlistId="기타" title="Playlist: 기타 연주했던 곡 모음" />
      <PlaylistComponent playlistId="나머지" title="노래 외" />
    </main>
  )
}
