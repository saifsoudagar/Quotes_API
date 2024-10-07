
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import './index.css'; 

const App = () => {
    const [quote, setQuote] = useState('');
    const [savedQuotes, setSavedQuotes] = useState([]);

    const fetchQuote = async () => {
        const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        setQuote(response.data[0]);
    };

    const saveQuote = () => {
        setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-teal-700 mb-4 text-center">Random Quote</h1>
            <div className="flex flex-col items-center">
                <QuoteCard quote={quote} onSave={saveQuote} />
                <button
                    onClick={fetchQuote}
                    className="mt-4 bg-coral-500 text-white p-2 rounded hover:bg-coral-600 transition"
                >
                    Get New Quote
                </button>
            </div>
            <h2 className="text-2xl font-semibold text-teal-700 mt-8 text-left">Saved Quotes</h2>
            <ul className="list-disc pl-5">
                {savedQuotes.map((savedQuote, index) => (
                    <li key={index} className="my-2 text-teal-800 text-left">{savedQuote}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
