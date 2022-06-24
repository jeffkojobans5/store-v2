import styled from 'styled-components'


function Footer () {
    return (
        <Wrapper>
            <div className="container">
                <p>© 2022  <span className="comfy"> Furnimart </span> All rights reserved</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #222222;
    
    .container {
        padding: 2rem;
    }

    p {
        text-align: center;
        color: white;
    }

    .comfy {
        color: #C5A491;
        word-spacing: 1rem;
    }

    @media only screen and (max-width: 800px) {
        .comfy {
            display: block;
        }
    }
`

export default Footer