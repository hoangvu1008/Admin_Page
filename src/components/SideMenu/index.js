import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
    const menuItems = [
        {
            key: '1',
            title: 'Course',
            link: '/account/course',
            icon: <AppstoreOutlined />,
        },
        {
            key: '2',
            title: 'Semester',
            link: '/account/semester',
            icon: <ShoppingCartOutlined />,
        },
        {
            key: '3',
            title: 'Teacher',
            link: '/account/teacher',
            icon: <UserOutlined />,
        },
    ];

    return (
        <>
            <Menu defaultSelectedKeys={['1']}>
                {menuItems.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.title}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );
}

export default SideMenu;
