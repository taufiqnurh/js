<!DOCTYPE html>
<html>
<body>

<br>
<br>
<br>

<button onclick="myFunction()">Klik untuk melihat Info Hari ini</button>

<p id="demo"></p>

<script>
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
</script>

</body>
</html>
