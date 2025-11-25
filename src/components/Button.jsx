function Button(props) {
    return (
        <button
            type="button"
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default Button;
