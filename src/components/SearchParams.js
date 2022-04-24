import { useState, useEffect } from 'react'
import { useBreedList } from '../hooks/useBreedList'
import Results from './Results'

const ANIMALS = ['dog', 'cat', 'bird', 'reptile', 'rabbit']

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [breeds] = useBreedList(animal)

  const [pets, setPets] = useState([])

  useEffect(() => {
    requestPets()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const { pets } = await res.json()

    setPets(pets)
    console.log(pets)
  }

  function handleSubmit(e) {
    e.preventDefault()
    requestPets()
  }

  return (
    <div className='search-params'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            value={location}
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select
            id='breed'
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
