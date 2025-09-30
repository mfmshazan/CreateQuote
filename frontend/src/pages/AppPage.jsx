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

            {/*create form*/}

            <div className=' max-w-xl mx-auto gap-4 mt-10 flex'>
                <input type="text" placeholder='Enter text'
                    className='w-full border-white border-2 px-4 py-2 shadow-lg rounded-lg bg-gray-800'
                />
                <button className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>
                    Add
                </button>
            </div>

            {/*quotes list*/}

            <div className='max-w-xl mx-auto space-y-10 mt-15'>
                {quotes.map((q) => (
                    <div className='flex items-center justify-between w-full p-4 text-white bg-white/10 my-10 rounded-xl shadow-xl' key={q.id}>
                        <p>{q.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AppPage
