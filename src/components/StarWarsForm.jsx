import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const StarWarsForm = () => {
    // STATE
    const [category, setCategory] = useState("people")
    const [id, setId] = useState()

    // NAVIGATE
    const navigate = useNavigate()

    // SUBMIT HANDLER. PREVENT THE FORM FROM REFRESHING THE PAGE
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

return (
    <div>
        <form onSubmit={submitHandler}>
            Search for: 
            <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            ID: 
            <input onChange={(e) => setId(e.target.value)} type="number" />
            <button>Search</button>
        </form>
    </div>
)
}

export default StarWarsForm
