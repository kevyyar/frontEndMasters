import { useState, useEffect } from 'react'

const localCache = {}

export const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreeds()
    }
  }, [animal]) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestBreeds() {
    setStatus('loading')
    setBreedList([])
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    )
    const { breeds } = await res.json()
    localCache[animal] = breeds || []
    setBreedList(breeds)
    setStatus('loaded')
  }

  return [breedList, status]
}
