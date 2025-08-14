const convertButton = document.querySelector(".button-to-convert")
const currencySelect = document.querySelector(".currency-to-be-converted")
const currencyToConvert = document.querySelector(".currency-to-convert")
const inputValue = document.querySelector(".input-value")

function selectValues() {
    const currencyValueName = document.getElementById("value-name")
    const currencyCoinImg = document.querySelector(".coin-to-convert")

    if (currencyToConvert.value == "Dolar") {
        currencyValueName.innerHTML = "Dólar Americano"
        currencyCoinImg.src = "./assets/moeda-dolar.png"
    }

    if (currencyToConvert.value == "BTC") {
        currencyValueName.innerHTML = "Bitcoin"
        currencyCoinImg.src = "./assets/moeda-bitcoin.png"
    }

    if (currencyToConvert.value == "Euro") {
        currencyValueName.innerHTML = "Euro"
        currencyCoinImg.src = "./assets/moeda-euro.png"
    }

    if (currencyToConvert.value == "Libra") {
        currencyValueName.innerHTML = "Libra"
        currencyCoinImg.src = "./assets/moeda-libra.png"
    }

    if (currencyToConvert.value == "Real") {
        currencyValueName.innerHTML = "Real"
        currencyCoinImg.src = "./assets/moeda-real.png"
    }

    returnValue()
}

function returnValue() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.getElementById("currency-value")
    const currencySelectToConvert = document.querySelector(".currency-to-convert").value;

    if (currencySelectToConvert == "Real") {
        currencyValueToConvert.innerHTML = Number(inputCurrencyValue.replace(",", ".")).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    if (currencySelectToConvert == "Dolar") {
        currencyValueToConvert.innerHTML = Number(inputCurrencyValue.replace(",", ".")).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    if (currencySelectToConvert == "Euro") {
        currencyValueToConvert.innerHTML = Number(inputCurrencyValue.replace(",", ".")).toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR"
        })
    }

    if (currencySelectToConvert == "Libra") {
        currencyValueToConvert.innerHTML = Number(inputCurrencyValue.replace(",", ".")).toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP"
        })
    }

    if (currencySelectToConvert == "BTC") {
        currencyValueToConvert.innerHTML = Number(inputCurrencyValue.replace(",", ".")).toFixed(8) + " BTC"
    }
}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector("#currency-value") //Valor inicial
    const currencyValueConverted = document.querySelector("#currency-value-to-converted") //Valor convertido

    const dolarToday = 5.44
    const bitcoinToday = 645235.13
    const euroToday = 6.32
    const libraToday = 7.31


    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "BTC") {
        currencyValueConverted.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(8) + " BTC"; // Exibir o valor em BTC
    }


    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "Real")
        currencyValueToConvert.innerHTML = Number(inputCurrencyValue).toFixed(2);
    return;
}

function changeCurrency() {
    const currencyName = document.getElementById("value-name-converted")
    const currencyImg = document.querySelector(".coin-to-be-converted")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/moeda-dolar.png"
    }

    if (currencySelect.value == "BTC") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/moeda-bitcoin.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/moeda-euro.png"
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/moeda-libra.png"
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/moeda-real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
currencyToConvert.addEventListener("change", selectValues)
convertButton.addEventListener("click", () => {
    returnValue();
    convertValues();
})
inputValue.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        convertButton.click();
    }
})