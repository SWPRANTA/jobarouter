import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur temporibus nulla alias deserunt perspiciatis
                officiis ducimus magnam dolor quaerat dolore similique
                omnis ut, modi debitis repudiandae at. Assumenda,
                recusandae nisi.
            </p>
            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}
