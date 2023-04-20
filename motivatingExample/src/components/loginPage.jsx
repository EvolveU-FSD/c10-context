import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"
function LoginPage(){
    const {setUser} = useContext(UserContext)
    const [loginAs, setLoginAs] = useState('')
    return <div >
        UserName:
        <input type="text" value={loginAs} onChange={e=>setLoginAs(e.target.value)}></input>
        <button onClick={x=>setUser(loginAs)}>Login</button>
    </div>
}

export default LoginPage