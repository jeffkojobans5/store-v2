import styled from 'styled-components'

function Banner () {
    return (
        <Wrapper>
                <h1> Shop </h1>
        </Wrapper>
    )
}

export default Banner


const Wrapper = styled.div`
    height: 300px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://woodmart.xtemos.com/wp-content/uploads/2021/04/accessories-title-bg-opt.jpg');
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        display: inline;
        padding-left: 1rem;
        color: white;
        border-left: 5px solid white;
    }

    p {
        color: brown;
    }
`