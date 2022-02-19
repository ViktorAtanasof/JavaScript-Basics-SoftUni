function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let celToFahr = celsius * 1.8 + 32;

    console.log(celToFahr.toFixed(2));
}

celsiusToFahrenheit(["25"]);
