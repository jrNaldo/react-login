type showErrorProps = {
    text: string
}

const ShowError = ({text}: showErrorProps) => {
    return <span className="text-red-500 text-xs">{text}</span>
}

export default ShowError