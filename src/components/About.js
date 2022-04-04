import styled from 'styled-components'

function About () {
    return (
        <Wrapper>
            <div className="container">
                <section>
                    <h1>Custom Furniture <br/> Built Only For You</h1>
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </section>
            </div>
            <div className="container">
                <section>
                    <img src="" alt="" />
                    <h2> Mission </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim, magni veritatis tempora, consectetur esse impedit alias vel 
                    repellendus quibusdam quam pariatur placeat ullam dolore 
                    minus maxime natus et necessitatibus animi?   </p>
                </section>
                <section>
                    <img src="" alt="" />
                    <h2> Mission </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim, magni veritatis tempora, consectetur esse impedit alias vel 
                    repellendus quibusdam quam pariatur placeat ullam dolore 
                    minus maxime natus et necessitatibus animi?   </p>
                </section>
                <section>
                    <img src="" alt="" />
                    <h2> Mission </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim, magni veritatis tempora, consectetur esse impedit alias vel 
                    repellendus quibusdam quam pariatur placeat ullam dolore 
                    minus maxime natus et necessitatibus animi?   </p>
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: brown;
    padding: 2rem;

    .container {
        display: flex;
    }

    section {
        flex: 1;
    }

`

export default About 