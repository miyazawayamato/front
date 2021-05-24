export const TimeStampFormat : any = (time : any) => {
    
    const d  = new Date(time);
    const DateTimeFormat = 'YYYY/MM/DD hh:mi:ss'; // "2019/10/04 12:34:56" -> "20191004_123456"
    let toFileName = DateTimeFormat
    .replace(/YYYY/g, String(d.getFullYear()))
    .replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2))
    .replace(/DD/g, ('0' + d.getDate()).slice(-2))
    .replace(/hh/g, ('0' + d.getHours()).slice(-2))
    .replace(/mi/g, ('0' + d.getMinutes()).slice(-2))
    .replace(/ss/g, ('0' + d.getSeconds()).slice(-2));
    return toFileName
    
}