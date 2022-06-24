import styled from 'styled-components'
import { Views , GridProductList , ListProductView } from '../index'
import { useSelector , useDispatch } from 'react-redux';

function ProductsList () {

    let grid_list = useSelector((state)=>state.grid_list)

    return (
        <Wrapper>
            <div className="ProductsList">
                <Views />
                <section>
                    { !grid_list ?
                        <ListProductView /> : <GridProductList />
                    }
                </section>
            </div>
        </Wrapper>            
    )
}

export default ProductsList 

const Wrapper = styled.div`
    flex: 9;

    .ProductsList {
        flex: 12;
    }

    section {
        display: flex;   
        justify-content: space-between;
        flex-wrap : wrap;
        max-width: 100%;    
    }


    @media only screen and (max-width: 800px){
        section {
            flex-wrap: wrap;
            max-width: 100%;
        }
    }  
`
