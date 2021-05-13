import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Border.css'


export default function Body() {

    const [item, setitems] = useState([]);
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(res => {
            console.log(res.data)
            setitems(res.data.meals)
        }).catch(err => {
            console.log(err)
        })


    }, [])
    const itemslist = item.map((obj) => {
        return <div className="col-md-4">
            <p>{obj.strMeal}</p>
            <img src={obj.strMealThumb} className="img-fluid"></img>
            <p>{obj.idMeal}</p>

        </div>
    })
    return (
        <div>
            <div className="row">
                {itemslist}
            </div>
        </div>
    )
}
