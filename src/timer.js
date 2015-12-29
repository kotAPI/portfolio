function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        var v = hours + ": " + minutes + ": " + seconds + " ";
        if(hours > 11){
            v+="PM";
        } else {
            v+="AM"
        }
        setTimeout("updateTime()",1000);
        document.getElementById('time').innerHTML=v;

        var dd = currentTime.getDate();
        var mm = currentTime.getMonth()+1; //January is 0!
        var yyyy = currentTime.getFullYear();

        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mm='0'+mm
        } 

        currentTime = mm+'/'+dd+'/'+yyyy;
        document.getElementById('date').innerHTML=currentTime;
    }
    