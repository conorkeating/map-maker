import Link from "next/link";

export default function Sidebar() {
    return (
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
            <Link href="/" class="mt-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">home</Link>
            <Link href="/maps" class="mt-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">maps</Link>
        </div>
    )
}