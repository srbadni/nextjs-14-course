import Card from "@/components/card";

export default function ComplexDashboardLayout({
                                       children,
                                       notifications,
                                       revenue,
                                       users,
                                       login
                                   }: {
    children: React.ReactNode, //@children
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    users: React.ReactNode,
    login: React.ReactNode,
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        (
            <>
                {children}
                <Card>{users}</Card>
                <Card>{revenue}</Card>
                <Card>{notifications}</Card>
            </>
        )
    ) : login
}
