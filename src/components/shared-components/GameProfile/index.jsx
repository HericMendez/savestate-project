import React from 'react';
import {  Row, Col, Typography, Image, Tag, List, Divider, Rate, Space } from 'antd';
import Card from '../Card';
const { Title, Text, Paragraph } = Typography;
import igdbMockData from 'mock/data/igdbMockData';


const GameProfile = ({ game }) => {
  console.log(igdbMockData.length);
  return (
    <Card
      title={
        <>
          {game.name}
          <br />
          {game.involved_companies.map((item, index) => (
            <span key={index} style={{ fontSize: 10 }}>
              {item.company.name}
              {index < game.involved_companies.length - 1 && ", "}
            </span>
          ))}
        </>
      }
      style={{ margin: "20px auto" }}
    >
      <Row gutter={[16, 16]}>
        {/* Game Cover and Rating */}
        <Col xs={24} sm={8}>
          <Image
            src={"/img/placeholder_cover.png"}
            alt={game.name}
            width="100%"
            height="auto"
            preview={false}
          />
          <Divider />
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Rate disabled defaultValue={Math.round(game.rating / 20)} />
            <Text>{game.rating.toFixed(1)} / 100</Text>
            <Text>{game.rating_count} Ratings</Text>
          </Space>
        </Col>

        {/* Game Details */}
        <Col xs={24} sm={16}>
          <Title level={3}>Summary</Title>
          <Paragraph>{game.summary}</Paragraph>

          <Divider />

          <Title level={4}>Genres</Title>
          <Space>
            {game.genres.map((genre) => (
              <Tag key={genre.id} color="blue">
                {genre.name}
              </Tag>
            ))}
          </Space>
          <Divider />

          <Title level={4}>Platforms</Title>
          <Space>
            {game.platforms.map((platform) => (
              <Tag key={platform.id} color="green">
                {platform.name}
              </Tag>
            ))}
          </Space>

          <Divider />

          <Title level={4}>Release Dates</Title>
          <List
            itemLayout="horizontal"
            dataSource={game.release_dates}
            renderItem={(release) => (
              <List.Item>
                <Text>
                  {release.platform.name}: {release.human}
                </Text>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Divider />

      {/* Game Videos */}
      <Title level={3}>Videos</Title>
      <List
        itemLayout="horizontal"
        dataSource={game.videos}
        renderItem={(video) => (
          <List.Item>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.video_id}`}
              title={video.name}
              allowFullScreen
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default GameProfile;
