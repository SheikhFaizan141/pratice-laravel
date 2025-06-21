import { Link, usePage } from '@inertiajs/react';

const links = [
    {
        name: 'Dashboard',
        href: '/admin',
    },
    {
        name: 'Students',
        href: '/admin/students',
    }
]

export function AdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <nav className="space-y-2">
                    {
                        links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-2 rounded hover:bg-gray-700"
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                    {/* <Link href="/admin/students" className="block hover:underline">Students</Link> */}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    {/* <div>
                        {auth?.user?.name}
                    </div> */}
                </header>

                <section className='bg-gray-400 px-2 pt-4 pb-4 shadow-md'>
                    {children}
                </section>
            </main>
        </div>
    );
}