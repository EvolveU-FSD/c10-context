import { useState } from "react"
function LoginPage({setUser}){
    const [loginAs, setLoginAs] = useState('')
    return <div >
        UserName:
        <input type="text" value={loginAs} onChange={e=>setLoginAs(e.target.value)}></input>
        <button onClick={x=>setUser(loginAs)}>Login</button>
    </div>
}

export default LoginPage