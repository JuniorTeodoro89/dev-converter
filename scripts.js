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
    const inputCurrencyValue = Number(document.querySelector(".imput-value").value)
    const currencyValueToConvert = document.getElementById("currency-value")
    const currencyValueConverted = document.getElementById("currency-value-to-converted")
    const currencySelectFrom = document.querySelector(".currency-to-convert").value
    const currencySelectTo = document.querySelector("currency-to-be-converted").value

    const dolarToday = 5.44
    const bitcoinToday = 645235.13
    const euroToday = 6.32
    const libraToday = 7.31

    let valorEmReais
    let valorConvertido

    // Entrada em Real

    if (currencySelectFrom == "Real") {
        valorEmReais = inputCurrencyValue;
    } 

    if (currencySelectFrom == "Dolar") {
        valorEmReais = inputCurrencyValue * dolarToday;
    }

    if (currencySelectFrom == "BTC") {
        valorEmReais = inputCurrencyValue * bitcoinToday;
    }

    if (currencySelectFrom == "Euro") {
        valorEmReais = inputCurrencyValue * euroToday;
    }

    if (currencySelectFrom == "Libra") {
        valorEmReais = inputCurrencyValue * libraToday;
    }

    // Real > Saída

    if (currencySelectTo == "Real") {
        valorConvertido = valorEmReais;
    }

    if (currencySelectTo == "Dolar") {
        valorConvertido = valorEmReais / dolarToday;
    }

    if (currencySelectTo == "BTC") {
        valorConvertido = valorEmReais / bitcoinToday;
    }

    if (currencySelectTo == "Euro") {
        valorConvertido = valorEmReais / euroToday;
    }

    if (currencySelectTo == "Libra") {
        valorConvertido = valorEmReais / libraToday;
    }

    // Exibir valores formatados

    currencyValueToConvert.innerHTML = valorEmReais.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BLR"
    })
    currencyValueConverted.innerHTML = valorConvertido.toLocaleString("pt-BR", {
        style: "currency",
        currency:
            currencySelectTo == "Dolar" ? "USD" :
            currencySelectTo == "Euro" ? "EUD":
            currencySelectTo == "Libra" ? "GBD" :
            currencySelectTo == "BTC" ? "BTC" : "BRL"
    })

    convertValues()
}

currencySelect.addEventListener("change", selectValues)
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