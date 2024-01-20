import React, { useState, useEffect } from 'react';

function CurrencyConverter(props) {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate to 1
    const [Allcountry, setAllCountry] = useState({});

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/7c7638e046e81d33cac5569f/latest/${fromCurrency}`);
                const data = await response.json();

                if (data.conversion_rates) {
                    setAllCountry(data.conversion_rates);
                    setExchangeRate(data.conversion_rates[toCurrency]);
                } else {
                    console.error('Error fetching exchange rates', data.error);
                }
            } catch (error) {
                console.error('Error fetching exchange rates', error);
            }
        };

        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const convertedAmount = amount * exchangeRate;

    return (
        <div>
            <h1 className='text-2xl bg-green-500 text-center'>Project{props.number}:  Currency Converter ({fromCurrency} To {toCurrency})</h1>
            <div className="grid grid-cols-4 gap-2 mt-10 bg-slate-400">
                <div className='mt-2'>
                    <label
                        htmlFor="fromCurrency"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        From Currency
                    </label>
                    <select
                        id="fromCurrency"
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                        className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {Object.keys(Allcountry).map((currencyCode) => (
                            <option key={currencyCode} value={currencyCode}>
                                {currencyCode}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <div className="mb-5">
                        <label
                            htmlFor="amount"
                            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                        >
                            Enter Your Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Amount"
                            required=""
                        />
                    </div>
                </div>
                <div className='mt-2'>
                    <label
                        htmlFor="toCurrency"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        To Currency
                    </label>
                    <select
                        id="toCurrency"
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                        className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        {Object.keys(Allcountry).map((currencyCode) => (
                            <option key={currencyCode} value={currencyCode}>
                                {currencyCode}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <div>
                        <div className="mb-5">
                            <label
                                htmlFor="convertedAmount"
                                className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                            >
                                Converted Amount
                            </label>
                            <input
                                type="number"
                                id="convertedAmount"
                                value={convertedAmount.toFixed(2)}
                                className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Converted Amount"
                                required=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <pre>
                <code>
                    import React, {useState, useEffect} from 'react';
                    <br></br>
                    function CurrencyConverter() {
                        <>
                            <pre>
                                const [amount, setAmount] = useState(1);<br></br>
                                const [fromCurrency, setFromCurrency] = useState('USD');<br></br>
                                const [toCurrency, setToCurrency] = useState('EUR');<br></br>
                                const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate to 1<br></br>
                                const [Allcountry, setAllCountry] = useState({ });<br></br>
                            </pre>
                        
                        </>
                    }
                    <br></br>
                    export default CurrencyConverter;
                </code>
            </pre> */}


        </div>
    );
}

export default CurrencyConverter;
