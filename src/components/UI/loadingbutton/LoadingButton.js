export default function LoadingButton(props) {
    return props.loading ?
        (<div className="spinner-border text-primary mt-4" role="status">
                <span className="sr-only"></span>
            </div>
        ) :
        (<button {...props} className={"btn btn-primary mx-4 mt-3"}>Zapisz!</button>)

}