import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Planet = () => {
    // STATE
    const [planets, setPlanets] = useState()

    // USE PARAMS TO GET PLANET ID FROM APP.JS
    const {planet_id} = useParams()

    // USE EFFECT TO GET STARWARS API
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planet_id}`)
            .then(response => setPlanets(response.data))
            .catch(error => console.log(error))
    }, [planet_id])

return (
    <div>
        {
            (planets) ?
            <>
                <h1>Name: {planets.name}</h1>
                <h1>Climate: {planets.climate}</h1>
                <h1>Terrain: {planets.terrain}</h1>
                <h1>Surface Water: {planets.surface_water}</h1>
                <h1>Population: {planets.population}</h1>
            </> : <h1>Loading...</h1>
        }
    </div>
)
}

export default Planet