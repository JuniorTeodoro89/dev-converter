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
}

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-value").value.replace(",", "."))
    const currencyValueToConvert = document.getElementById("currency-value")
    const currencyValueConverted = document.getElementById("currency-value-to-converted")

    const currencySelectFrom = document.querySelector(".currency-to-convert").value
    const currencySelectTo = document.querySelector(".currency-to-be-converted").value

    // Cotações fictícias
    const dolarToday = 5.40
    const euroToday = 6.32
    const libraToday = 7.32
    const bitcoinToday = 634450.20

    let valorEmReais

    // 1. Descobre o valor em reais (base para conversão)
    if (currencySelectFrom == "Real") {
        valorEmReais = inputCurrencyValue
    }
    if (currencySelectFrom == "Dolar") {
        valorEmReais = inputCurrencyValue * dolarToday
    }
    if (currencySelectFrom == "Euro") {
        valorEmReais = inputCurrencyValue * euroToday
    }
    if (currencySelectFrom == "Libra") {
        valorEmReais = inputCurrencyValue * libraToday
    }
    if (currencySelectFrom == "BTC") {
        valorEmReais = inputCurrencyValue * bitcoinToday
    }

    // 2. Converte de reais para a moeda de destino
    let valorConvertido
    if (currencySelectTo == "Real") {
        valorConvertido = valorEmReais
    }
    if (currencySelectTo == "Dolar") {
        valorConvertido = valorEmReais / dolarToday
    }
    if (currencySelectTo == "Euro") {
        valorConvertido = valorEmReais / euroToday
    }
    if (currencySelectTo == "Libra") {
        valorConvertido = valorEmReais / libraToday
    }
    if (currencySelectTo == "BTC") {
        valorConvertido = valorEmReais / bitcoinToday
    }

    // 3. Exibe o valor digitado, formatado conforme a moeda de origem
    currencyValueToConvert.innerHTML =
        currencySelectFrom == "Real" ? inputCurrencyValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) :
            currencySelectFrom == "Dolar" ? inputCurrencyValue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            }) :
                currencySelectFrom == "Euro" ? inputCurrencyValue.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }) :
                    currencySelectFrom == "Libra" ? inputCurrencyValue.toLocaleString("en-GB", {
                        style: "currency",
                        currency: "GBP"
                    }) :
                        inputCurrencyValue.toFixed(8) + " BTC"

    // 4. Exibe o valor convertido, formatado conforme a moeda de destino
    currencyValueConverted.innerHTML =
        currencySelectTo == "Real" ? valorConvertido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) :
            currencySelectTo == "Dolar" ? valorConvertido.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            }) :
                currencySelectTo == "Euro" ? valorConvertido.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }) :
                    currencySelectTo == "Libra" ? valorConvertido.toLocaleString("en-GB", {
                        style: "currency",
                        currency: "GBP"
                    }) :
                        valorConvertido.toFixed(8) + " BTC"
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
inputValue.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        convertButton.click();
    }
})
document.querySelector(".currency-to-convert").addEventListener("change", convertValues)
document.querySelector(".currency-to-be-converted").addEventListener("change", convertValues)
convertButton.addEventListener("click", convertValues)
