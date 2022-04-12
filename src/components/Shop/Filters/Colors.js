import styled from 'styled-components'

export function Colors () {
    return (
    
    <Wrapper>
        <p className="filter-header-text"> Filter By Color </p>
        <section>
            <div className="filter-color">
                <p> + </p>
            </div>
            <div className="filter-color-name">
                <p> Beige </p>
            </div>
            <div className="filter-color-quantity">
                <p> 2 </p>
            </div>
        </section>
        <section>
            <div className="filter-color">
                <p> + </p>
            </div>
            <div className="filter-color-name">
                <p> Beige </p>
            </div>
            <div className="filter-color-quantity">
                <p> 2 </p>
            </div>
        </section>
        <section>
            <div className="filter-color">
                <p> + </p>
            </div>
            <div className="filter-color-name">
                <p> Beige </p>
            </div>
            <div className="filter-color-quantity">
                <p> 2 </p>
            </div>
        </section>
    </Wrapper>        
    )
}

const Wrapper = styled.div`

    section {
        display: flex;
        margin-top: 0.5rem;
        cursor: pointer;
    }

    .filter-color p {
        background-color: pink;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
    }

    .filter-color-name p {
        text-align: left;
    }

    .filter-color-quantity p{
        height: 15px;
        width: 20px;
        border-radius: 40%;
        display: flex;
        justify-content: center;
        align-items: center;    
        padding: 0.2rem;
        border: 1px solid #bbb;
        color: gray;
    }

    .filter-color {
        flex: 2;
    }

    .filter-color-name , .filter-color-quantity {
        flex: 5;
    }
`