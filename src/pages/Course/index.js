import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCourse } from "../../API";

function Course() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCourse().then((res) => {
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
            title: "Id",
            dataIndex: "courseId",
          },
          {
            title: "Name",
            dataIndex: "courseName",
          },
          {
            title: "Key enroll",
            dataIndex: "keyEnroll",
          },
          {
            title: "Student id ",
            dataIndex: "subId",
          },
          {
            title: "Semester id",
            dataIndex: "semId",
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
      />
    </Space>
  );
}
export default Course;
