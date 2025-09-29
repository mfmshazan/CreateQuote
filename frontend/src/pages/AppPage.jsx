import React, { useState } from 'react'

const AppPage = () => {

    const [text, setText] = useState("");
    const [quotes, setQuotes] = useState([
        { id: 1, text: "The best way to get started is to quit talking and begin doing." },
        { id: 2, text: "Don't let yesterday take up too much of today." },
    ]);
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    return (
        <div className='min-h-screen bg-gray-900 dark:text-white py-12 px-4 md:px-10'>
            <h1 className='text-3xl font-bold text-center'>
                Write Quote
            </h1>

            <div className=' flex justify-center mt-10'>
                <input type="text" placeholder='Enter text'
                className='min-w-xl border-white border-2 px-4 py-2 shadow-lg rounded-lg bg-gray-800'
                />
                <button className='ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>
                    Add
                </button>
            </div>
        </div>
    )
}

export default AppPage
