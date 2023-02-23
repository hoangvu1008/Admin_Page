import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getSemester } from "../../API";

function Semester() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoading(true);
        getSemester().then((res) => {
            setDataSource(res);
            setLoading(false);
        });
    }, []);

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Teacher</Typography.Title>
            <Table
                loading={loading}
                columns={[
                    {
                        title: "Semester id ",
                        dataIndex: "semId",
                    },
                    {
                        title: "Name",
                        dataIndex: "semName",
                    },
                    {
                        title: "Status",
                        dataIndex: "status",
                    },
                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
            ></Table>
        </Space>
    );
}
export default Semester;
