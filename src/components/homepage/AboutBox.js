
function AboutBox ( { icon , title , text } ) {
    return (
    <section>
        { icon }
        <h2> { title } </h2>
        <p> { text } </p>
    </section>        
    )
}


export default AboutBox