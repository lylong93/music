// 歌单
export function SongSheet(id, name, song, album) {
  this.id = id;
  this.name = name;
  this.song = song;
  this.album = album;
}

// 歌手每个专辑
export function Evalbum(avart, time, id, name) {
  this.avart = avart;
  this.time = time;
  this.id = id;
  this.name = name;
}
// 专辑
export function Album(name, song, album, time) {
  this.name = name;
  this.song = song;
  this.album = album;
  this.time = time;
}
