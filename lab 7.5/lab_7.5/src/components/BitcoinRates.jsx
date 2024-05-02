import { useState } from "react";
import { useData } from "../hooks/useData";
import React, { useContext } from 'react';
import { EmojiContext } from '../context/EmojiContext';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    
    const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);

    const rate = data ? data.bitcoin[currency.toLowerCase()] : 'err'

const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

const { emoji } = useContext(EmojiContext);
   
return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <p>Current Emoji: {emoji}</p>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div><strong>Rate:</strong>{bitcoinRate||'Fetching...'}</div>
</div> )
}

export default BitcoinRates