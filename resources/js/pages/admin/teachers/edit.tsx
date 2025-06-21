import { PageProps } from '@inertiajs/core';
import { useForm, usePage } from "@inertiajs/react";
import { FormEvent } from 'react';
import { Student } from '@/pages/admin/students/index';


interface EditStudentProps extends PageProps {
    student: Student
}


export default function EditStudentPage() {

    const { student } = usePage<EditStudentProps>().props;

    const { data, setData, put, processing, errors } = useForm({
        name: student?.name || '',
        email: student?.email || '',
        password: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        console.log(student);

        put(`/admin/students/${student.id}`);
    };

    return (
        <>
            <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4 text-black">Create Student</h1>

                <h2>Edit page</h2>

                <form onSubmit={submit} className="space-y-4 text-gray-950">
                    <input hidden />
                    <div>
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                    </div>

                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>

                    <div>
                        <label className="block font-medium">Set new password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            autoComplete='new-password'
                            className="w-full border px-3 py-2 rounded"
                        />
                        {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {processing ? 'Saving...' : 'Create'}
                    </button>
                </form>

            </div>
        </>
    );
}