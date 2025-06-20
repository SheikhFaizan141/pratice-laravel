import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    return (
        <div>
            admin dashboard
        </div>
    );
}