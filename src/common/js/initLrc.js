export default function initLrc(lrc) {
  const nlrc = {};
  const lrclists = lrc.split('\n');
  lrclists.forEach((value) => {
    const reg = /\[(\d{2}):(\d{2}.\d{2,3})\]/;
    if (reg.exec(value) == null) {
      return;
    }
    const minute = parseFloat(reg.exec(value)[1]);
    const second = parseFloat(reg.exec(value)[2]);
    const otime = (minute * 60) + second;
    const time = otime.toFixed(1);
    const text = value.replace(reg, '');
    nlrc[time] = text;
  });
  return nlrc;
}
