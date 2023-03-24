function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    
    alert("treść komunikatu");}



    for(let i = 0; i <= 100; i++) {
        if(i%2 == 0)
        console.log(i);
    }
    function suma()
    {
      var a = prompt("Podaj liczbę a: ")
      var b = prompt("Podaj liczbę b: ")
   
      alert(+a + +b);
    } 
    // suma()

    function czas()
    {
        var data = new Date();
        let x = data.getHours();
        let y = data.getMinutes();
        let z = data.getSeconds();
        document.getElementById("time").innerHTML = x+":"+y+":"+z;

        

    }
    czas()
    setInterval(czas, 1000)

    const unknow = Math.floor(Math.random()*100);
    function zgadnij()
    {

        var b = document.getElementById("zad5").value;
        if (b > unknow){
            alert("Podana liczba jest większa od wylosowanej");
        }
        else (b < unknow) {
            alert("Porównana liczba jest mniejsza od wylosowanej");
        }
        

    }







