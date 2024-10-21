import React, { useState, useEffect } from "react";
import { Table, Tooltip, Button, Drawer, Tag, Input } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import GameProfile from "../GameProfile";
import igdbMockData from "mock/data/igdbMockData";

const CustomTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchText, setSearchText] = useState(""); // Novo estado para busca

  useEffect(() => {
    // Inicialize os dados com os dados mockados
    setLoading(true);
    setData(igdbMockData);
    setFilteredData(igdbMockData);
    setPagination({
      current: 1,
      total: igdbMockData.length,
    });
    setLoading(false);
  }, []);

  const showDrawer = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteItem = (record) => {
    const newData = data.filter((item) => item.id !== record.id);
    setData(newData);
    setFilteredData(newData); // Atualiza os dados filtrados
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value) {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
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
      render: (companies = []) => (
        <>
          {companies.map((item, index) => (
            <span key={index} style={{ fontSize: 10 }}>
              {item.company?.name || "Unknown Company"}
              {index < companies.length - 1 && ", "}
            </span>
          ))}
        </>
      ),
    },
    {
      title: "Gênero",
      dataIndex: "genres",
      render: (genres = []) => (
        <>
          {genres.map((genre, index) => (
            <Tag key={genre.id} color={index % 2 === 0 ? "green" : "blue"}>
              <span style={{ fontSize: 10 }}>
                {genre.name || "Unknown Genre"}
              </span>
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Plataformas",
      dataIndex: "platforms",
      width: "20%",
      render: (platforms = []) => (
        <>
          {platforms.map((platform) => (
            <Tag key={platform.id} color="red">
              <span style={{ fontSize: 10 }}>
                {platform.name || "Unknown Platform"}
              </span>
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

  return (
    <>
      <Input
        placeholder="Buscar por nome do jogo"
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={filteredData} // Usando dados filtrados
        pagination={pagination}
        loading={loading}
      />

      <Drawer
        title={"Detalhes do jogo"}
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
