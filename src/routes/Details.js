import { Component } from 'react'
import { useParams } from 'react-router-dom'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      pets: [],
    }
  }

  componentDidMount() {
    this.fetchPet()
  }

  fetchPet = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
    )

    const json = await res.json()
    console.log(json)
    this.setState({ loading: false, pets: json.pets[0] })
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>
    }

    const { animal, breed, city, state, description, name } = this.state.pets

    return (
      <div className='details'>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

const WrappedDetails = () => {
  const { id } = useParams()
  return <Details id={id} />
}

export default WrappedDetails
