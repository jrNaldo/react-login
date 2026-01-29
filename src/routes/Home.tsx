import { FaArrowLeft } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";

export default function Home() {
    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')

    return (
        <div className="w-full min-h-screen bg-neutral-600  text-white">
            <nav className="flex h-12 justify-between px-3 mb-4 pt-2 text-2xl border-b">
                <h1>Home Page</h1>
                <button className="cursor-pointer">
                    <Link to='/' className="cursor-pointer">
                        <FaArrowLeft />
                    </Link>
                </button>
            </nav>
            <div>
                <h1>Seja bem Vindo, {name}</h1>
            </div>
        </div>
    )
}