import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { GET_SHOP_PRODUCTS_SUCCESS , GET_SHOP_PRODUCTS_BEGIN } from '../../../redux/actions/actions'
import { products_url } from '../../../helpers/constants/constants';
import axios from 'axios';

// props
import { GridProductListProps } from '../../../props/index'

function GridProductList () {
    const dispatch = useDispatch();
    const products_loading = useSelector((state)=>state.products_loading)
    const products = useSelector((state)=>state.products)
    

    function fetchProducts () {
        dispatch({ type : GET_SHOP_PRODUCTS_BEGIN })
        axios.get(products_url).then((response)=>{
            dispatch({ type : GET_SHOP_PRODUCTS_SUCCESS , payload : response.data.slice(0,18) })
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchProducts()
    },[])    

    return (
        <>
           { products.map((single_product)=>{
               const { image , price , name } = single_product
               return (
                   <GridProductListProps image = { image } price = { price.toLocaleString('en-US', {minimumFractionDigits: 2}) } name = { name } />
               )
           }) }
        </>
    )
}

export default GridProductList

