import { AdminLayout } from "@/layouts/admin/admin-layout";
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";

const Dashboard = () => {
    const { auth } = usePage<SharedData>().props;
    return (
        <div>
            admin dashboard
        </div>
    );
}

Dashboard.layout = (page: React.ReactNode) => <AdminLayout children={page} />

export default Dashboard;