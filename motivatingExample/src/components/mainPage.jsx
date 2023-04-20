import WelcomeMessage from "./welcomeMessage"

function MainPage({user}){
    return <div>
        <WelcomeMessage user={user} />
        This is your app. I hope you like it.
    </div>
}

export default MainPage