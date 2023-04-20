import { useContext } from "react"
import { UserContext } from "../context/userContext"

function WelcomeMessage(){
    const {user} = useContext(UserContext)
    return <div>Hi {user}</div>
}

export default WelcomeMessage