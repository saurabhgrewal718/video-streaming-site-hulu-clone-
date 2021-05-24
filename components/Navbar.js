import requests from '../utils/requests'

function Navbar() {
    return (
        <navbar>
            <div>
                {Object.entries(requests).map(([key,{title,url}]) => (
                   <h2>{title}</h2>
                ))}      
            </div>
        </navbar>
    )
}

export default Navbar
