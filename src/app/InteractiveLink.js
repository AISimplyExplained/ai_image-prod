'use client';

import Link from 'next/link';

export default function InteractiveLink({ href, children, isAuthenticated }) {
    const handleClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
        }
    };

    return (
        <Link href={href} legacyBehavior>
            <a onClick={handleClick}>{children}</a>
        </Link>
    );
}
