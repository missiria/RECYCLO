// Spinner for preloader
const Spinner = () => {
    return (
        <span className='indicator-progress' style={{display: 'block'}}>
            Please wait...
            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
        </span>
    )
}

export { Spinner };