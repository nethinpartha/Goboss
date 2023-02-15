import moment from 'moment-mini';

export default function ParseCurrentTime(currentTime) {
    let cTime = moment('1900-01-01 00:00:00')
        .add(Math.round(currentTime), 'seconds')
        .format('HH:mm:ss')
    var hms = cTime;   
    var a = hms.split(':'); // split it at the colons

    var second = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return second;
}