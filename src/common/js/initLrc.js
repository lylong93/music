export default function initLrc(lrc) {
  const nlrc = {};
  const lrclists = lrc.split('\n');
  lrclists.pop(); /* 删除数组最后一个空，防止reg[xx]错误*/
  lrclists.forEach((value) => {
    const reg = /\[(\d{2}):(\d{2}.\d{2,3})\]/;
    const time = reg.exec(value)[2] + 60;
    const text = value.replace(reg, '');
    nlrc[time] = text;
  });
  return nlrc;
}
