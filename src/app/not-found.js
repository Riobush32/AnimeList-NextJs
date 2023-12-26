"use client"
import Link from "next/link"

const notFound = () => {
    return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold ">Hello there</h1>
                <p className="py-6">We didn't find what you were looking for here</p>
                <Link href="/" className="btn btn-secondary">Go Back</Link>
            </div>
        </div>
    </div>
    )
}
export default notFound