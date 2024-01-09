import { React } from 'react';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox} from 'react-icons/md';
import BooksTable from './BooksTable';
import BooksCard from './BooksCard';
const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showtype,setShowType]=useState('table');
    useEffect(() => {
        setLoading(true);
        //axios
        //  .get('http://localhost:5555/books')
        /* .then((response)=>
         {
             setBooks(response.data.data);
             setLoading(false);
         })*/
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5555/books');

                /* .then(response => response.data)
                .then(res => setBooks(res.data.data))
                 .catch((error)=>{
                     console.log(error);
                     setLoading(false);
                 });
                 fetchData();*/
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (        

        <div className='p-4'>
           <div className='flex justify-between items-center'>
            <button className='bg-sky-300 hover:bg-sky-600 items-center px-4 py-1 rounded-1g'
            onClick={()=>setShowType('table')}>Table

            </button>
            <button className='bg-sky-300 hover:bg-sky-600 items-center px-4 py-1 rounded-1g'
            onClick={()=>setShowType('Card')}>Card

            </button>
            </div>

            <div className='flex justify-between items-center'>

                <h1 className='text-3xl my-8'>Booklist</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />

                </Link>
            </div>

            {loading ? <Spinner/>:
             showtype === 'table' ? (<BooksTable books={books}/>):(<BooksCard books={books}/>)

                }
        </div>
    )
}


export default Home;