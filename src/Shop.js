import React, { useState, useEffect } from 'react'



function Shop() {
    const [characters, setCharacters] = useState([])

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(result => handleFetch(result))
    }

    handleFetch(result) {
        const images = result.results.map(character => character.image)
        setCharacters(images)
        console.log(images)
    }

    // const fetchItems = () => {
    //     fetch("https://rickandmortyapi.com/api/character")
    //         .then(response => response.json())
    //         .then(result => () => {
    //             const images = result.results.map(character => character.image)
    //             setCharacters(images)
    //             console.log(images)
    //         })
    // }

    // useEffect(() => {
    //     fetchItems()
    // }, [])

    return (
        <div className="App">
            <h1>Shop Page</h1>
        </div>
    )
}

export default Shop
