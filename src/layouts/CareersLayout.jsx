import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Career</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, sit.</p>

        <Outlet/>
    </div>
  )
}
