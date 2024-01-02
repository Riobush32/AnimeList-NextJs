"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        const keyword = searchRef.current.value
         if(!keyword) return

        if (event.key === "Enter"|| event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }

 
    }

    return (
        <div className="join">
                <input type="text" placeholder="Cari Anime..." className="input input-bordered md:input-md input-sm w-auto join-item" ref={searchRef} onKeyDown={handleSearch} />
                <button className="btn btn-sm md:btn-md btn-square join-item" onClick={handleSearch}>
                    <MagnifyingGlass size={32} />
                </button>
        </div>
    )
}

export default InputSearch