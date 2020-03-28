const hours = document.querySelector('#hours span');
const minutes = document.querySelector('#minutes span');
const seconds = document.querySelector('#seconds span');

setInterval(
    function clock () {
        var time = new Date();
        
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
    
        // console.log(h)
        // console.log(m)
        // console.log(s)
    
        hours.innerText = h;
        minutes.innerText = m;
        seconds.innerText = s;
    },
    
    1000
)