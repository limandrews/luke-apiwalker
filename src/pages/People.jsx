import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const People = () => {
    // STATE
    const [people, setPeople] = useState()

    // USE PARAMS TO GET PEOPLE ID FROM APP.JS
    const {people_id} = useParams()

    // THIS IS USING AXIOS USEEFFECT TO MAKE A CALL TO THE STARWARS API.
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${people_id}`)
            .then(response => setPeople(response.data))
            .catch(error => console.log(error))
    }, [people_id])
    

return (
    <div>
        {
            (people) ?
            <>
                <h1>Name: {people.name}</h1>
                <h1>Height: {people.height}</h1>
                <h1>Mass: {people.mass}</h1>
                <h1>Hair Color: {people.hair_color}</h1>
                <h1>Skin Color: {people.skin_color}</h1>
            </> : <h1>Loading...</h1>
        }
    </div>
)
}

export default People