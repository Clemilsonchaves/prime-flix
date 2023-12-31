
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';



function Home(){
  const  [ filmes, setFilmes ] = useState([]);
  const  [ Loading, setLoading ] = useState(true);

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key:"c6fff87f2d97219f914fcfa6fa9b0b22",
          language:"pt-BR",
          page: 1,
        }
      })

      // console.log(response.data.results.slice(0, 10));

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();

  }, [])
  
  if(Loading){
    return (
      <div className="loading">
        <h2>Carrregando Filmes...</h2>
      </div>
    )
  }
  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}}`}>Acessar</Link>
            </article>
          )
        } )}
      </div>
      
    </div>
  )
}

export default Home;