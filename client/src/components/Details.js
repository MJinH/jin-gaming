import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../queries/queries';

const Details = () => {
    const {name} = useParams()
    console.log(name)
    const {loading,error,data} =useQuery(getProduct,{
        variables: {name:name}
    })

    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>
   console.log(data)
    return (
        <>
            {data.findProduct ? (
                <div className="detail-page d-flex align-items-center justify-content-center">
                <div className="detail-wrapper d-flex">
                    <div className="detail-left d-flex  align-items-center justify-content-center">
                        <img src={data.findProduct.img} alt="" className="p-img"/>
                    </div>
                    <div className="detail-right d-flex flex-column justify-content-center">
                        <div className="right-top d-flex flex-column justify-content-center">
                            <span className="p-name">{data.findProduct.name}</span>
                            <span className="p-price mt-4">{data.findProduct.price}</span>
                        </div>
                        <div className="right-bottom d-flex align-items-center justify-content-center">
                            <a href={`https://www.youtube.com/results?search_query=${data.findProduct.name}`}>
                                <img className="youtube-icon" src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-youtube-multimedia-prettycons-flat-prettycons.png"/>
                            </a>
                            <a href={`https://www.amazon.com/s?k=${data.findProduct.name}`}>
                                <img className="amazon-icon" src="https://icons.iconarchive.com/icons/bokehlicia/pacifica/256/amazon-icon.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                    <div className="error-page d-flex align-items-center justify-content-center">
                        <p className="error-message">Something's wrong... &nbsp; &nbsp; Please visit next time</p>
                    </div>
                )
            }

        </>
    );
}

export default Details;
