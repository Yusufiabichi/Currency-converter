document.getElementById('convertButton').addEventListener('click', convertCurrency);

async function convertCurrency(){
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === ""){
        alert("Please Enter a Valid Amount");
        return;
    }

    const apiKey = "a157a3cf4ae31d95f4d16ffb";

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(data.result === "error"){
            alert("Error" + data.error);
            return;
        }
        const exchangeRate = data.conversion_rates[toCurrency];
        const result = (amount * exchangeRate).toFixed(2);
        document.getElementById('result').textContent = `${amount}${fromCurrency} = ${result}${toCurrency}`;
    } catch(error){
        console.error("Error fetching exchange rate", error);
    }
}