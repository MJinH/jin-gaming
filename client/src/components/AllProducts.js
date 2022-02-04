import React, {useState,useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { getAllProducts } from '../queries/queries';
import ProductsList from './ProductsList';
import Pagination from './Pagination';

const Allproducts = ({searchText,productList, setCurrentProduct}) => {
    const {loading, error, data} = useQuery(getAllProducts)
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    let totalPage = 0
    let currentPosts = [] 
    const paginate = pageNumber => setCurrentPage(pageNumber)
    useEffect(() => {
        setCurrentPage(1)
    },[searchText])

    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>

    if(!searchText) {
        totalPage = data.allProducts.length
        currentPosts = data.allProducts.slice(indexOfFirstPost,indexOfLastPost)
    } else {
        currentPosts = data.allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchText)
        )
        console.log(currentPosts)
        totalPage = currentPosts.length
        currentPosts = currentPosts.slice(indexOfFirstPost,indexOfLastPost)
    }
    
    
    
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

export default Allproducts;
