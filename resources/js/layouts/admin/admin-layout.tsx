import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const links = [
    {
        name: 'Dashboard',
        href: '/admin',
    },
    {
        name: 'Students',
        href: '/admin/students',
    },
    {
        name: 'Teachers',
        href: '/admin/teachers'
    }
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage<SharedData>().props;

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
            <main className="flex-1 p-6 bg-gray-200">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
                    <div>
                        {auth?.user?.name}
                    </div>
                  
                </header>

                <section className=''>
                    {children}
                </section>
            </main>
        </div>
    );
}