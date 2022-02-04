import {gql} from "@apollo/client"


export const getAllProducts = gql`
    {
        allProducts {
            id
            name
            img
            price
        }
    }
`
export const getKeyboards = gql`
    {
        keyboards {
            id
            name
            img
            price
        }
    }
`

export const getMonitors = gql`
    {
        monitors {
            id
            name
            img
            price
        }
    }
`

export const getMouses = gql`
    {
        mouses {
            id
            name
            img
            price
        }
    }
`

export const getProduct = gql`
    query($name:String!) {
        findProduct (name:$name){
            name
            img
            price
        }
    }
`