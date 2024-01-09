import React from 'react';
import { useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import BackButton from './BackButton';
import Spinner from './Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';
const DeleteBook =()=>{
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    const {enqueueSnackbar}=useSnackbar();
    const handleDeleteBook=()=>{
        setLoading(true);
        axios.delete(`http://localhost:5555/books/${id}`)
        .then(()=>{
        enqueueSnackbar('book created succesfully' ,{variant:'success'})
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
        <h1 className='text-3xl my-4'>DeleteBook</h1>
        {
            loading ? (<Spinner/>):''
        }
       <div className='flex flex-col border-2 item-center border-sky-400 rounded-xxl w-[600px] p-8'>
        <div className='my-4'>
            <h3>Are u sure want to delete this book??</h3>
            <button className='p-4 bg-red-500 text-white m-8 w-full'
            onClick={handleDeleteBook}>
                yes!! delete it
            </button>
            </div>
            </div>
       </div>     
    )
}
export default DeleteBook;