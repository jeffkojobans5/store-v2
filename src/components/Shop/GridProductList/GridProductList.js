import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';

// props
import { GridProductListProps } from '../../../props/index'

function GridProductList () {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.products)
    console.log(products)

    function fetchProducts () {

    }

    return (
        <>
            
        </>
    )
}


export default GridProductList

