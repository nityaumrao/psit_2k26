"use client";

import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
	return (
		<header className="w-full fixed top-4 left-0 z-50 px-6">
			<nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 rounded-2xl px-3 py-2 backdrop-blur-sm">
				<Link href="/home" className="flex items-center gap-3">
					                <Image src="/icon.svg" alt="Ignitia logo" width={20} height={20} />
				</Link>

				<ul className="hidden md:flex items-center gap-3">
					{[
						{ label: 'Home', href: '/home' },
						{ label: 'About', href: '/about' },
						{ label: 'Events', href: '/events' },
						{ label: 'Gallery', href: '/gallery' },
						{ label: 'Sponsors', href: '/sponsors' },
						{ label: 'Team', href: '/team' }
					].map((item) => (
						<li key={item.label}>
							<Link
								href={item.href}
								className="text-white text-sm px-4 py-2 rounded-xl border border-transparent hover:text-yellow-400 transition-colors duration-150 font-sans"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-3">
					<Link href="#" className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-white">
						Login
					</Link>
				</div>
			</nav>
		</header>
	);
}	