import React, {useState,useEffect} from 'react';
import { useQuery } from '@apollo/client';
import ProductsList from './ProductsList';
import Pagination from './Pagination';
import { getMonitors } from '../queries/queries';

const Monitor = ({searchText}) => {
    const {loading, error, data} = useQuery(getMonitors)
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    let totalPage = 0
    let currentPosts = [] 
    useEffect(() => {
        setCurrentPage(1)
    },[searchText])
    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>

    if(!searchText) {
        totalPage = data.monitors.length
        currentPosts = data.monitors.slice(indexOfFirstPost,indexOfLastPost)
    } else {
        currentPosts = data.monitors.filter((product) =>
            product.name.toLowerCase().includes(searchText)
        )
        totalPage = currentPosts.length
        currentPosts = currentPosts.slice(indexOfFirstPost,indexOfLastPost)
    }
    
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    return (
        <>
        <div className="items-center">
            {currentPosts.map((product) => (
                    <ProductsList 
                        name={product.name}
                        img={product.img}
                        price={product.price}
                    /> 
                ))}
        </div>
        <div className="items-bottom d-flex align-items-center justify-content-center">
            <Pagination
                postPerPage={postsPerPage}
                totalPage={totalPage}
                paginate={paginate}
            />
        </div>
    </>
    );
}

export default Monitor;