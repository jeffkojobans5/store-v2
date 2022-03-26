

function FeaturedImageBox ( props ) {
    const { image , name , price } = props
    return (
        <div className="featured">
        <img src={ image } alt="" />                            
        <p> { name } </p>   <br/>                     
        <small> { price } </small>                     
    </div>        
    )
}

export default FeaturedImageBox