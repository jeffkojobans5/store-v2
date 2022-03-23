import styled from 'styled-components'
import Banner from '../media/banner.png'

function HomepageBanner () {

    return (
        <Wrapper>
            <div className="container">
                <section>
                    <h1> Design Your <br/><span className="comfort-zone"> Comfort Zone </span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Iusto, at sed omnis corporis doloremque 
                    possimus velit! Repudiandae nisi odit, aperiam 
                    odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                </section>
                <section>
                    <img src={ Banner } alt="" />
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .container {
        display: flex;
        justify-content: center;
        min-height: 90vh;
    }
        
    section{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    section:first-child {
        padding-right: 4rem;
    }

    section:nth-child(2) {
        justify-self: end;
    }

    section:nth-child(2) img {
        padding: 0;
        margin: 0
    }
    
    section:first-child h1 {
        font-size: 3rem;
        line-height: 3.5rem;
        font-weight: 600;
    }

    section:first-child p {
        font-size: 1rem;
        margin-top: 1rem;
        line-height: 1.7rem;
        text-align: justify;
        letter-spacing: .1rem;
        color: gray;
    }
    .comfort-zone {
        color: #AB7A5F
    }

`
export default HomepageBanner;