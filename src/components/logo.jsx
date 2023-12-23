import Link from "next/link"

export default function Logo({
    url,
    className
}) {
    return (
        <Link href={"/"} >
            <img
                src={url}

                alt="logo"
                className={className}
            />
        </Link>

    )

}