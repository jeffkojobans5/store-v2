import styled from 'styled-components'

function HomepageBanner () {

    return (
        <Wrapper>
            <div className="container">
                <section>
                    <h1> Buy from the best</h1>
                </section>
                <section>
                    <h1> your image here </h1>
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .container {
        background-color: whtiesmoke;
        display: flex;
        justify-content: center;
        min-height: 90vh;
    }
    section{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default HomepageBanner;