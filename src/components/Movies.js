

const Movies = (name, image, premiered, summary, network ) => {
  return (
    <div className="moviesInfo">
              
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <span>{premiered}</span>
      <span>{network.name}</span>
      <h3>Overview</h3>
      <p>{summary}</p>

          
            
      
    </div>
  )
}

export default Movies

