import PlaylistComponent from './playlist'

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
      <PlaylistComponent playlistId="2017-2020" title="Playlist: 2017~2020년" />
      <PlaylistComponent playlistId="2021-2022" title="Playlist: 2021~2022년" />
      <PlaylistComponent playlistId="2023~2024" title="Playlist: 2023~2024년" />
      <PlaylistComponent playlistId="양태원의 머리 속" title="Playlist: 양태원의 머리 속" />
      <PlaylistComponent playlistId="기타" title="Playlist: 기타 연주했던 곡 모음" />
      <PlaylistComponent playlistId="나머지" title="방탄, 빅뱅, 자이언티, 잔나비, 장기하" />
      <PlaylistComponent playlistId="팝송" title="Playlist: POP" />
    </main>
  )
}
