import { useContext } from "react"
import { UserContext } from "../context/userContext"

function Footer() {
    const {user, setUser} = useContext(UserContext)
    return <div 
        style={{flexGrow: 0, width: '100%', backgroundColor: 'gray', padding: 10,
            display: 'flex', flexDirection: 'row', justifyContent: "space-evenly"}}>
            {user != null ? 
                <div>Welcome {user}</div> :
                <div>Please login</div>
            }
            {   user ? 
                <button onClick={_=>setUser(null)}>Logout</button>
                :null}
        </div>
}

export default Footer