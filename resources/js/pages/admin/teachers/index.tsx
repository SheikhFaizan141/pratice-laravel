import { Button } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin/admin-layout';
import { PageProps } from '@inertiajs/core';
import { Link, usePage } from "@inertiajs/react";
import { Edit, Trash } from 'lucide-react';

export interface Teacher {
    id: number;
    name: string;
    email: string;
}

interface AdminStudentProps extends PageProps {
    teachers: Teacher[];
}

const AdminStudentsPage = () => {
    const { teachers } = usePage<AdminStudentProps>().props;

    console.log(teachers)

    return (
        <div className="">
            <div className='flex'>
                <h1 className="text-xl font-bold mb-4 flex-1">Teachers</h1>

                <Button asChild variant="secondary" type="button">
                    <Link href="/admin/teachers/create" className="btn">
                        Add New
                    </Link>
                </Button>
            </div>

            <table className="table-auto w-full mt-4">
                <thead className="">
                    <tr>
                        <th className="text-start">Name</th>
                        <th className="text-start">Email</th>
                        <th className="text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((s) => (
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
                                        href={`/admin/teachers/${s.id}/edit`}
                                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                    >
                                        <Edit />
                                    </Link>
                                    <Link
                                        href={`/admin/teachers/${s.id}`}
                                        method="delete"
                                        as="button"
                                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                                        onClick={(e) => {
                                            if (!window.confirm('Are you sure you want to delete this student?')) {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
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

export default AdminStudentsPage;