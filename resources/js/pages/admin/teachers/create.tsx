import { AdminLayout } from '@/layouts/admin/admin-layout';
import { PageProps } from '@inertiajs/core';
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEvent } from 'react';

const CreateTeacherPage = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        console.log(data);

        post('/admin/teachers');
    };

    return (
        <>
            <div className="w-full max-w-3xl mx-auto bg-white px-6 py-6 rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4 text-black">Create Teacher</h1>

                <form onSubmit={submit} className="space-y-4 text-gray-950">
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
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
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


CreateTeacherPage.layout = (page: React.ReactNode) => <AdminLayout children={page} />;

export default CreateTeacherPage;