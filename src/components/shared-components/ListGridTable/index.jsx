
import Table from '../Table';
import Card from '../Card';
const placeholderImage = 'https://via.placeholder.com/150/32a87d/ffffff';
import { useState } from 'react';

import {  Switch, Row, Col, Input, Pagination } from 'antd';

const { Search } = Input;

// Updated mock data to include image URLs
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      imageUrl: placeholderImage, // Add placeholder image to each item
    });
  }
  
  const ListGridTable = () => {
    const [isGridView, setIsGridView] = useState(false); // State for switching modes
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const [pageSize] = useState(8); // Number of items per page
  
    // Filter data based on search term
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Paginate filtered data
    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
    const toggleViewMode = (checked) => {
      setIsGridView(checked);
    };
  
    const onSearch = value => {
      setSearchTerm(value);
      setCurrentPage(1); // Reset to the first page on search
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div>
        <Switch
          checkedChildren="Grid"
          unCheckedChildren="List"
          onChange={toggleViewMode}
          style={{ marginBottom: 16 }}
        />
        <Search
          placeholder="Search by name or address"
          onSearch={onSearch}
          enterButton
          style={{ marginBottom: 16, width: 300 }}
        />
        {isGridView ? (
          // Grid view with pagination
          <div>
            <Row gutter={[16, 16]}>
              {paginatedData.map(item => (
                <Col key={item.key} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    cover={<img alt={item.name} src={item.imageUrl} />}
                    title={item.name}
                  >
                    <p><strong>Age:</strong> {item.age}</p>
                    <p><strong>Address:</strong> {item.address}</p>
                  </Card>
                </Col>
              ))}
            </Row>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredData.length}
              onChange={handlePageChange}
              style={{ marginTop: 16, textAlign: 'center' }}
            />
          </div>
        ) : (
      
          <Table
            bordered
            columns={columns}
            dataSource={filteredData}
          />
        )}
      </div>
    );
  };
  
  export default ListGridTable;  