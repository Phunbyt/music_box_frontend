export const TimeConverter = (time:number)=>{
  const minute = Math.floor(time/60)
  const sec = time%60;
  return String(minute)+':'+String(sec)
}