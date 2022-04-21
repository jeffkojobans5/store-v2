import styled from 'styled-components'
import { CLEAR_FILTERS } from '../../../redux/actions/actions'
import { useSelector , useDispatch } from 'react-redux';

export function ClearFilter () {
    const dispatch = useDispatch();
    function clearFilters () {
        dispatch({ type : CLEAR_FILTERS })          
    }
    
    return (
    
    <Wrapper>
        <p className="filter-header-text">  </p>    
        <button type="submit" className="clear-btn" onClick = { ()=>clearFilters()} > Clear Filters </button>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    .clear-btn {
        background-color: #BB2525;
        width: 70%;
        border: none;
        padding: 0.2rem;
        font-size: 1rem;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
`