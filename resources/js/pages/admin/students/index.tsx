import { AdminLayout } from '@/layouts/admin/admin-layout';
import { PageProps } from '@inertiajs/core';
import { Link, usePage } from "@inertiajs/react";
import { Edit, Trash } from 'lucide-react';

export interface Student {
    id: number;
    name: string;
    email: string;
}

interface AdminStudentProps extends PageProps {
    students: Student[];
}

const AdminStudentsPage = () => {
    const { students } = usePage<AdminStudentProps>().props;
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Student List</h1>
            <Link href="/admin/students/create" className="btn">Add New</Link>

            <table className="table-auto w-full mt-4">
                <thead className="">
                    <tr>
                        <th className="text-start">Name</th>
                        <th className="text-start">Email</th>
                        <th className="text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id} className="hover:bg-gray-50 even:bg-gray-50/30">
                            <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
                                {s.name}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                                {s.email}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href={`/admin/students/${s.id}/edit`}
                                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                    >
                                        <Edit />
                                    </Link>
                                    <Link
                                        href={`/admin/students/${s.id}`}
                                        method="delete"
                                        as="button"
                                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                                        onClick={(e) => {
                                            if (!window.confirm('Are you sure you want to delete this student?')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        {/* Delete */}
                                        <Trash />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

AdminStudentsPage.layout = (page: React.ReactNode) => <AdminLayout children={page} />;
// Create.layout = page => <AdminLayout children={page} />;

export default AdminStudentsPage;