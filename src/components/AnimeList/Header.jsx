import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between p-4 items-center">
            <h1 className="text-2xl font-bold text-secondary">{title}</h1>
            <Link href={linkHref} className="md:text-md text-sm font-bold underline text-secondary hover:text-info transition-all">
                {linkTitle}
            </Link>
        </div>
    )
    
}

export default Header