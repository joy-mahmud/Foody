import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateFoodItem = () => {
    const { id } = useParams()
    return (
        <div>UpdateFoodItem:{id}</div>
    )
}

export default UpdateFoodItem