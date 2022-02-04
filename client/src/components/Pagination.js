import React from 'react';

const Pagination = ({postPerPage,totalPage,paginate}) => {
    const pageNumbers = []
    for(let i=1;i<Math.ceil(totalPage / postPerPage) + 1;i++){
        pageNumbers.push(i)
    }
    return (
        <nav className='pagination-nav'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='/#' className='page-link'>
                        {number}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
