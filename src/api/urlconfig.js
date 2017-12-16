const tovue = {
  bannerURl: 'api/banner', // 轮播
  // applistUrl: 'https://bird.ioliu.cn/netease/playlist?id=', // 歌单详情，线上api
  applistUrl: 'api/playlist/detail?id=',
  recomList: 'api/personalized', // 推荐歌单
  personNewsongUrl: 'api/personalized/newsong', // 新歌推荐
  songsList: 'api/top/artists', // 歌手列表
  songAlbum: 'api/artist/album', // 歌手专辑
  albumDetail: 'api/album', // 专辑内容
  songSheet: 'api/top/playlist', // 歌单
};
const tostore = {
  musicUrl: 'api/music/url?id=', // 播放地址
  musicLrc: 'api/lyric?id=', // 歌词
  musicDetail: 'api/song/detail?ids=', // 歌曲详情
};
export default {
  tovue,
  tostore,
};
