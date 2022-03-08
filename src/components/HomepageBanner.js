import styled from 'styled-components'

function HomepageBanner () {

    return (
        <Wrapper>
            <div className="container">
                <h1> I am the banner </h1>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .container {
        background-color: green;
    }
`

export default HomepageBanner;