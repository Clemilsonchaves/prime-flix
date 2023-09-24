
import { useEffect, useState } from 'react';
import api from '../../services/api';
function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key:"c6fff87f2d97219f914fcfa6fa9b0b22",
          language:"pt-BR",
          page: 1,
        }
      })

      console.log(response.data);
    }

    loadFilmes();

  }, [])
  

 

  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}

export default Home;