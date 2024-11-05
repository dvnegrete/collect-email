"use client"
import { Avatar, Divider, List, Button } from "antd";
import { useReadEmails } from "@/hooks/useReadEmails"
import Link from "next/link";

export const ListEmails = () => {
    const { data, isLoading, isError } = useReadEmails();

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center lg:items-start">
            {isLoading && <p>Cargando...</p>}
            {isError && <p>Error al mostrar la información</p>}

            <Divider orientation="center">Usuarios registrados</Divider>
            <List 
                itemLayout="horizontal"
                dataSource={data}
                size="small"
                >
                {data.map(user => (
                    <List.Item key={user.username} style={{minWidth: "280px"}}>
                        <List.Item.Meta
                            avatar={<Avatar src={user.image} />}
                            title={user.username}
                            description={user.email}
                        />
                    </List.Item>
                ))}
            </List>

            <Link href="/register">
                <Button color="default" variant="solid">
                    Registrar nuevo
                </Button>
            </Link>
        </main>
    )
}