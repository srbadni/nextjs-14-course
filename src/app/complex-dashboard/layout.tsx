import Card from "@/components/card";

export default function ComplexDashboardLayout({
                                       children,
                                       notifications,
                                       revenue,
                                       users,
                                   }: {
    children: React.ReactNode, //@children
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    users: React.ReactNode,
}) {
    return (
        <>
            {children}
            <Card>{users}</Card>
            <Card>{revenue}</Card>
            <Card>{notifications}</Card>
        </>
    )
}
