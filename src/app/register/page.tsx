"use client"

import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";

import { handlerRegister } from "@/actions/register.actions";
import { Register } from "@/shared/interfaces/Register.interface";

const { Item } = Form;

export default function FunctionComponent() {
    const router = useRouter()
    const onFinish = async (values: Register) => {
        await handlerRegister(values);
        router.push("/");
    };

    return (
        <section className="container--form">
            <Form
                onFinish={onFinish}
            >
                <Item label="Nombre de Usuario" name="username" rules={[{ required: true, message: "Ingresa un nombre" }]}>
                    <Input placeholder="username" name="username" />
                </Item>
                <Item label="Correo Electrónico" name="email" rules={[{ required: true, message: "Ingresa un correo valido" }]}>
                    <Input type="email" placeholder="mail@mail.com" name="email" />
                </Item>


                <Item>
                    <Button type="primary" htmlType="submit">
                        Registrar correo
                    </Button>
                </Item>
            </Form>
        </section>
    );
}