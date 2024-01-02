const HeaderMenu = ({title}) => {
    return (
    <div className="hero bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
            </div>
        </div>
    </div>
    )
}

export default HeaderMenu