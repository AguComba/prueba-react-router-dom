import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFerch } from '../hooks/useFerch'

const Blog = () => {

  const [serachParams, setSearchParams] = useSearchParams();

  const {data, error, loading} = useFerch('https://jsonplaceholder.typicode.com/posts')
  
  
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error !== ''){
    return <h2>{error}</h2>
  }
  
  const handleChange = e =>{
    let filter = e.target.value

    if(filter){
      setSearchParams({filter})
    }else{
      setSearchParams({})
    }
  }

  return (
    <div>
      <h1>Blog</h1>
      <input
        type="text"
        className='form-control
        mb-2'
        value={serachParams.get('filter') || ''} 
        onChange={handleChange}
      />
      {
        data.filter(item => {
          let filter = serachParams.get('filter')
          if (!filter) return true
          
          let title = item.title.toLowerCase()

          return title.startsWith(filter.toLocaleLowerCase())

        }).map(item => (
          
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}>{item.id}-{item.title}</Link>
          </h4>
        ))
      }
    </div>
  )
}

export default Blog