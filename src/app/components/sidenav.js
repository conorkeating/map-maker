import Link from "next/link";
import { use } from "react";
import InnerNav from "./innerNav";

async function getMaps() {
    const res = await fetch('http://localhost:3080/maps')

    return res.json();
}

export default function Sidebar() {
    let maps = use(getMaps());
    
    return (
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
            <Link href="/" class="mt-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">home</Link>
            <Link href="/maps" class="mt-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">maps</Link>
            <InnerNav maps={maps}/>
        </div>
    )
}