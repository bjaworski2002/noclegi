export default function ProfileDetails(props) {
    return (
        <form>
            <div className={"form-group"}>
                <label>Email</label>
                <input type={"email"} value={"bjaworski2002@gmail.com"} className={"form-control"}/>
            </div>
            <div className={"form-group"}>
                <label>Hasło</label>
                <input type={"password"} placeholder={"***** ***"} className={"form-control"}/>
            </div>
            <button className={"btn btn-primary mx-4 mt-3"}>Zapisz!</button>
        </form>
    )
}