import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  console.log(id)

  return <h2>{id}</h2>
}

export default Details
