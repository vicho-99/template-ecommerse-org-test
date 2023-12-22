
export default function Logo({
    url,
    className
}) {
    return (
        <img
            src={url}
            alt="logo"
            className={className}
        />
    )

}