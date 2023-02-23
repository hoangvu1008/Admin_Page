import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getTeacher } from "../../API";

function Teacher() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTeacher().then((res) => {
      console.log(res);
      setDataSource(res);
      setLoading(false);
    }).catch((error) => console.log(error));
  }, []);



  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Course</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Teacher Id",
            dataIndex: "teacherId",
          },
          {
            title: "Name",
            dataIndex: "teacherName",
          },
          {
            title: "Email",
            dataIndex: "teacherEmail",
          },
          {
            title: "Phone ",
            dataIndex: "teacherPhone",
          },

        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}
export default Teacher;
