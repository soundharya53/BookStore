import React from 'react';
import { useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';
const EditBook =()=>{
    const[title,setTitle]=useState('');
    const[author,setAuthor]=useState('');
    const[year,setYear]=useState('');
    const[loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    const {enqueueSnackbar}=useSnackbar();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        .then((res)=>{
            setAuthor(res.data.author);
            setTitle(res.data.title);
            setYear(res.data.year);
            enqueueSnackbar('book Edited succesfully' ,{variant:'success'})
            setLoading(false);
        }).catch ((error)=>{
            console.error('Error fetching books:', error);
            setLoading(false);
        }
    )
    },[]);
    const handleEditBook=()=>{
        const data={
            title,
            author,
            year,
        };
        setLoading(true);
        axios.put(`http://localhost:5555/books/${id}`,data)
        .then(()=>{
          setLoading(false);
          navigate('/');  
        })
        .catch ((error)=>{
            console.error('Error fetching books:', error);
            setLoading(false);
        }
    )};

    return (
        <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>EditBook</h1>
        {
            loading ? (<Spinner/>):''
        }
       <div className='flex flex-col border-2 border-sky-400 rounded-xxl w-fit p-4'>
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
             <input  type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className='border-2 border-gray-500'></input>
           

      
        </div>
      
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
             <input  type='text'
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                className='border-2 border-gray-500'></input>
            

        </div>
       
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Year</label>
             <input  type='text'
                value={year}
                onChange={(e)=>setYear(e.target.value)}
                className='border-2 border-gray-500'></input>
            

       
        </div>  
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
            Save
        </button>
        </div>
        </div>
    )
}
export default EditBook;