const Pagination = ({ page, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior : "smooth",
            top : 0
        })
    }

    
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop
    }
    
    if (page <= 1) {
        return (

            <div className="flex justify-center items-center my-5">
                <div className="join">
                    <button className="join-item btn btn-outline btn-primary">Page #{page}</button>
                    <button onClick={handleNextPage} className="join-item btn btn-outline btn-primary">»</button>
                </div>
            </div>
        )
    }

    return (

        <div className="flex justify-center items-center my-5">
            <div className="join">
                <button onClick={handlePrevPage} className="join-item btn btn-outline btn-primary">«</button>
                <button className="join-item btn btn-outline btn-primary">Page #{page}</button>
                <button onClick={handleNextPage} className="join-item btn btn-outline btn-primary">»</button>
            </div>
        </div>
    )
}

export default Pagination