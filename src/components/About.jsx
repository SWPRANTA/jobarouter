import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function About() {
    const [user, setUser] = useState('mario');
    if(!user){
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur temporibus nulla alias deserunt perspiciatis
                officiis ducimus magnam dolor quaerat dolore similique
                omnis ut, modi debitis repudiandae at. Assumenda,
                recusandae nisi.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur temporibus nulla alias deserunt perspiciatis
                officiis ducimus magnam dolor quaerat dolore similique
                omnis ut, modi debitis repudiandae at. Assumenda,
                recusandae nisi.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur temporibus nulla alias deserunt perspiciatis
                officiis ducimus magnam dolor quaerat dolore similique
                omnis ut, modi debitis repudiandae at. Assumenda,
                recusandae nisi.
            </p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}
