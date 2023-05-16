'use client';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import Link from 'next/link';

export default function InnerNav({ maps }) {
    const pathname = usePathname();
    if ( pathname !== "/maps" ) {
        return null;
    }

    return (
        <Fragment>
            {maps.map((map) => (
                    <Link href="/maps/{map.id}" class="mt-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">{map.name}</Link>
                ))
            }
        </Fragment>
    )
};