import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const {id} = useParams()
    const career = useLoaderData()
  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Error, enim consequatur asperiores, ut dolorem autem 
                suscipit similique modi dolorum exercitationem 
                repudiandae, incidunt dolore voluptatum laudantium 
                rerum earum dolores! Exercitationem, ab.</p>
        </div>
        <p></p>
    </div>
  )
}

//loader function
export const careerDetaisLoader = async ({params}) =>{
    const {id} = params

    const res = await fetch(`http://localhost:4000/careers/${id}`)
    if(!res.ok){
        throw new Error(`Error fetching career with id ${id}`)
    }

    return res.json()
}