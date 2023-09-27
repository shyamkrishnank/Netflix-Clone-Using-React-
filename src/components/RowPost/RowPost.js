import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants' 
import YouTube from 'react-youtube';


function RowPost(props) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    const [posts,setPost] = useState([])
    const [movieID,setMoviid] = useState('')
    useEffect(()=>
    {
        axios.get(props.url)
        .then(response=>{
            setPost(response.data.results)
        })
        .catch(()=>{
            console.log(props)
        })
    },[])
    const handleClick = (id) =>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            setMoviid(response.data.results[0])
            console.log(response.data.results[0])
        })
        .catch(()=>{
          console.log('nothind')
        }
        )


    }
  return (
    <>
    <div className='row'>
        <h2 >{props.title}</h2>
        <div className='posters'>
           {posts.map(post=>
           <img key={post.id} onClick={()=>handleClick(post.id)}  className={`${props.isSmall?"smallPoster":'poster'}`} src={`${imageUrl+post.backdrop_path}`} />
            )}
        </div>
        { movieID && <YouTube videoId={movieID.key} opts={opts} />}
    </div>
    </>
  )
}

export default RowPost