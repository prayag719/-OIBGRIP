let Temp = () => {
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    var a = document.querySelector(".TakeValue").value;
    if (opt.value == "Celsius") {
        console.log(a, "Cel to Fah", opt.value)
        let Fah = a * (9 / 5) + 32
        display.innerHTML = Fah.toFixed(4) + " F"
    } else {
        console.log(a, "Fah to Cel", opt.value)
        let Cel = (a - 32) * (5 / 9)
        display.innerHTML = Cel.toFixed(4) + " ºC"

    }
}