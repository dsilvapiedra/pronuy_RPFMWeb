function doDate()
{
    var str = "";

    var now = new Date();
    var mins = "00";
    var month = now.getMonth()+1;
    if (now.getMinutes() < 10) {
        mins = "0"+now.getMinutes();
    } else {
        mins = now.getMinutes();
    }

    str += now.getDate() + "-" + month + "-" + now.getFullYear() + " " + now.getHours() +":" + mins;
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);