import React, { useState, useEffect, useCallback } from "react";
import { Table, Tooltip, Button, Drawer, Tag } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import GameProfile from "../GameProfile";
import igdbMockData from "mock/data/igdbMockData";
const CustomTable = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showDrawer = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Função para deletar um item da lista
  const deleteItem = (record) => {
    setData((prevData) => prevData.filter((item) => item.id !== record.id));
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name}`,
    },
    {
      title: "Empresa",
      dataIndex: "involved_companies",
      width: "20%",
      render: (record) => (
        <>
          {record.map((item, index) => (
            <span key={index} style={{ fontSize: 10 }}>
              {item.company.name}
              {index < record.length - 1 && ", "}
            </span>
          ))}
        </>
      ),
    },
    {
      title: "Gênero",
      dataIndex: "genres",

      render: (genres) => (
        <>
          {genres.map((genre, index) => (
            <Tag key={genre.id} color={index % 2 === 0 ? "green" : "blue"}>
              <span style={{ fontSize: 10 }}>{genre.name}</span>
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Plataformas",
      dataIndex: "platforms",
      width: "20%",
      render: (platforms) => (
        <>
          {platforms.map((genre) => (
            <Tag key={genre.id} color="red">
              <span style={{ fontSize: 10 }}>{genre.name}</span>
            </Tag>
          ))}
        </>
      ),
    },

    {
      title: "",
      dataIndex: "",

      render: (record) => (
        <div className="d-flex justify-content-end align-items-end">
          <>
            <Tooltip title="View">
              <Button
                primary
                onClick={() => showDrawer(record)}
                Bg="#ffffff"
                className="me-2 btn btn-outline-primary"
                icon={<EyeOutlined style={{ fontSize: 22 }} />}
                size="small"
              />
            </Tooltip>

            <Tooltip title="Delete">
              <Button
                danger
                onClick={() => deleteItem(record)} // Chama a função deleteItem
                Bg="#ffffff"
                icon={<DeleteOutlined style={{ fontSize: 22 }} />}
                size="small"
              />
            </Tooltip>
          </>
        </div>
      ),
    },
  ];

  const fetchData = useCallback((params = {}) => {
    setLoading(true);
    fetch(`https://randomuser.me/api?results=10&page=${params.page || 1}`)
      .then((response) => response.json())
      .then((data) => {
        setPagination((prev) => ({
          ...prev,
          total: 200, // Exemplo, a total de registros
        }));
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination(pager);
    fetchData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  return (
    <>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={igdbMockData}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />

      <Drawer
        title={"Detalhes do"}
        placement="right"
        onClose={onClose}
        open={open}
        width={"50%"}
      >
        {selectedRecord && (
          <>
            <GameProfile game={selectedRecord} />
          </>
        )}
      </Drawer>
    </>
  );
};

export default CustomTable;
