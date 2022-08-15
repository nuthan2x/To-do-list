
exports.times1 =  function (){

        var week = [ "sun","mon","tues","wednes","thurs","fri","satur"]
        var now = new Date();
        var rep = now.getDay();
        var today1 = week[rep];
    
        var today = new Date();
        var date = today.getDate();
        var monarr = ["jan","feb","mar","aprl","may","june","july","aug","sep","oct","nov","dec"]
        var mon = monarr[today.getMonth()];
        var year = today.getFullYear();
    
        var datee = date + "-" + mon + "-" + year;
    
        var today = new Date();
        
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        
        if (hours >= 12){
          meridiem = " PM";
        }
        else {
          meridiem = " AM";
        }
        
        
        if (hours>12){
            hours = hours - 12;
        }
        else if (hours===0){
            hours = 12;	
        }
        
        if (minutes<10){
            minutes = "0" + minutes;
        }
        else {
            minutes = minutes;
        }
        
        if (seconds<10){
            seconds = "0" + seconds;
        }
        else {
            seconds = seconds;
        }
        
        var times1 = (hours + ":" + minutes + ":" + seconds + meridiem);
    
        return times1;
        

}




