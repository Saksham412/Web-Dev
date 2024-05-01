import { SearchBar } from "./SearchBar"

export function AppBar() {
    return <div className="flex justify-between pt-1">
        <div className="inline-flex items-center">
            YouTube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            Sign In
        </div>
    </div>
}