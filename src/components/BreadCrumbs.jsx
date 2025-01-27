import { Link, useLocation } from "react-router-dom"

export default function BreadCrumbs() {
    const location = useLocation()
    console.log(location);
    let currentLink = [];
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb!== '')
    .map((crumb) => {
         currentLink.push(`/${crumb}`)
         return (
             <div className = "crumb" key={crumb}>
                 <Link to={currentLink.join('')}>{crumb}</Link>
             </div>
         )
     })
  return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}
