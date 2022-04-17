import { useState, useEffect } from 'react'

const ANIMALS = ['dog', 'cat', 'pig']
const BREEDS = []

const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')

  useEffect(() => {
    requestPets()
  }, [])

  const requestPets = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json()

    console.log(json.pets)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value)
    console.log(animal)
  }

  const handleBreedChange = (e) => {
    setBreed(e.target.value)
    console.log(breed)
  }


  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            type='text'
            value={location}
            onChange={handleLocationChange}
            placeholder='Location'
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            {ANIMALS.map(animal => (
              <option
                key={animal}
                value={animal}
              >
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='animal'>
          Breed
          <select
            id='breed'
            value={breed}
            onChange={handleBreedChange}
            onBlur={handleBreedChange}
          >
            {BREEDS.map(breed => (
              <option
                key={breed}
                value={breed}
              >
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
