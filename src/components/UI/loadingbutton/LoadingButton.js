export default function LoadingButton(props) {
    const buttonProps = {...props}
    delete buttonProps.loading
    return props.loading ?
        (<div className="spinner-border text-primary mt-4" role="status">
                <span className="sr-only"></span>
            </div>
        ) :
        (<button {...buttonProps} className={"btn btn-primary mx-4 mt-3"}>Zapisz!</button>)

}