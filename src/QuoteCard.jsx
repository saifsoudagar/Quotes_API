
import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
    return (
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105">
            <p className="text-teal-800 text-lg font-semibold">{quote}</p>
            <button
                onClick={onSave}
                className="mt-4 bg-coral-500 text-white p-2 rounded hover:bg-coral-600 transition"
            >
                Save to List
            </button>
        </div>
    );
};

export default QuoteCard;
