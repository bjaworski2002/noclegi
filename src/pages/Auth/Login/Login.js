export default function Login() {
    return (
        <div className={"p-4"}>
            <h2>Logowanie</h2>
            <form>
                <div className={"form-group"}>
                    <label>Email</label>
                    <input type={"email"} className={"form-control"}/>
                </div>
                <div className={"form-group"}>
                    <label>Hasło</label>
                    <input type={"password"} placeholder={"***** ***"} className={"form-control"}/>
                </div>
                <button className={"btn btn-primary mx-4 mt-3"}>Zapisz!</button>
            </form>
        </div>
    )
}