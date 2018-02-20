function myFunction() {
    var date = new Date().getDate(); 
    var greeting;
    if (date > 20 ) {
        greeting = "Info: Pengantar Ayat Ekonomi Libur";
    } else {
        greeting = "Tidak ada Info";
    }
    document.getElementById("demo").innerHTML = greeting;
}
