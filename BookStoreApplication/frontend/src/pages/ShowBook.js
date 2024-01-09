import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';
const ShowBook = () => {
    const [book, setBooks] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5555/books/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch(error) {
                console.error('Error fetching books:', error);
                setLoading(false);
            };
            
        }
        fetchData();
    }, id);
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'></h1>

            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xxl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>year</span>
                        <span>{book.year}</span>
                    </div>
                 </div>

            )}
        </div>

    )
}
export default ShowBook;