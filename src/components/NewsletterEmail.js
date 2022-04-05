import styled from 'styled-components'

function NewsletterEmail () {
    return (
        <Wrapper>
            <div className="container">
                <section>
                    <h2> Join our newsletter and get 20% off </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore? </p>
                </section>
                <section>
                    <input type="text" />
                    <button class="signup"> Sign Up </button>
                </section>
            </div>
        </Wrapper>
    )
}

export default NewsletterEmail

const Wrapper = styled.div`
    margin-top: 9rem;
    margin-bottom: 8rem;

    .container {
        display: flex;
    }

    section {
        flex: 1;

        h2 {
            margin-bottom: 1rem;
            color: #564135;
        }

        p {
            word-spacing: 0.5rem;      
            padding-right: 2rem;      
            text-align: justify;
        }
    }

    input {
        width: 60%;
        height: 2rem;
        padding: 0.3rem;
        outline: none;
    }

    section:nth-child(2) {
        display: flex;
        justify-content: end;
        align-items: center;        
    }

    button {
        border: 0px;
        height: 3rem;
        padding: 1rem;
        background-color: #C5A491;
        ${'' /* font-size: 1rem; */}
    }
`

