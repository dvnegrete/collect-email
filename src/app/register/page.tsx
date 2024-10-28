"use client"
import { Form, Input, Button } from "antd";
import { handlerRegister } from "@/actions/register.actions";
const { Item } = Form;

export default function FunctionComponent() {


    return (
        <section className="container--form">
            <Form
                onFinish={handlerRegister}
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