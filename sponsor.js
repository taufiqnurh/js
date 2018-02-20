var date = new Date().getDate(); 
    var greeting;
    if (date > 20 ) {
        greeting = "Info: Pengantar Ayat Ekonomi Libur";
    } else {
        greeting = "tidak ada info";
    }
    document.getElementById("demo").innerHTML = greeting;
