import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { GET_SHOP_PRODUCTS_SUCCESS , GET_SHOP_PRODUCTS_BEGIN } from '../../../redux/actions/actions'
import { products_url } from '../../../helpers/constants/constants';
import axios from 'axios';

// props
import { ListProductViewProps } from '../../../props/index'

function ListProductView () {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.products)
    

    function fetchProducts () {
        dispatch({ type : GET_SHOP_PRODUCTS_BEGIN })
        axios.get(products_url).then((response)=>{
            let res = response.data
            let copyPayload = [...response.data]
            let getAllPrice = []            
            for (const price in copyPayload) {
                getAllPrice.push(copyPayload[price].price)
            }       

            let sortPrices = getAllPrice.sort((a , b) => b - a )
            let highestPrice = sortPrices[0]

            dispatch({ type : GET_SHOP_PRODUCTS_SUCCESS , payload : { highestPrice , res }   })
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
               const { image , price , name , description } = single_product
               return (
                   <ListProductViewProps key={image} image = { image } price = { price.toLocaleString('en-US', {minimumFractionDigits: 2}) } name = { name } short_description = {description} />
               )
           }) }
        </>
    )
}

export default ListProductView

