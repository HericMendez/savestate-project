import React, { useState } from "react";
import { Row, Col, Button, Avatar, Dropdown, Table, Menu, Tag } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import ChartWidget from 'components/shared-components/ChartWidget';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import GoalWidget from 'components/shared-components/GoalWidget';
import Card from 'components/shared-components/Card';
import Flex from 'components/shared-components/Flex';
import { 
  VisitorChartData, 
  AnnualStatisticData, 
  ActiveMembersData, 
  NewMembersData, 
  RecentTransactionData 
} from './DefaultDashboardData';
import ApexChart from 'react-apexcharts';
import { apexLineChartDefaultOption, COLOR_2 } from 'constants/ChartConstant';
import { SPACER } from 'constants/ThemeConstant'
import { 
  UserAddOutlined, 
  FileExcelOutlined, 
  PrinterOutlined, 
  PlusOutlined, 
  EllipsisOutlined, 
  StopOutlined, 
  ReloadOutlined 
} from '@ant-design/icons';
import utils from 'utils';
import { useSelector } from 'react-redux';
import { AUTH_TOKEN } from "constants/AuthConstant";

const MembersChart = (props) => <ApexChart {...props} />;

const memberChartOption = {
  ...apexLineChartDefaultOption,
  ...{
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors: [COLOR_2],
  },
};

const latestTransactionOption = [
  {
    key: "Refresh",
    label: (
      <Flex alignItems="center" gap={SPACER[2]}>
        <ReloadOutlined />
        <span className="ml-2">Refresh</span>
      </Flex>
    ),
  },
  {
    key: "Print",
    label: (
      <Flex alignItems="center" gap={SPACER[2]}>
        <PrinterOutlined />
        <span className="ml-2">Print</span>
      </Flex>
    ),
  },
  {
    key: "Export",
    label: (
      <Flex alignItems="center" gap={SPACER[2]}>
        <FileExcelOutlined />
        <span className="ml-2">Export</span>
      </Flex>
    ),
  },
];

const newJoinMemberOptions = [
  {
    key: "Add all",
    label: (
      <Flex alignItems="center" gap={SPACER[2]}>
        <PlusOutlined />
        <span className="ml-2">Add all</span>
      </Flex>
    ),
  },
  {
    key: "Disable all",
    label: (
      <Flex alignItems="center" gap={SPACER[2]}>
        <StopOutlined />
        <span className="ml-2">Disable all</span>
      </Flex>
    ),
  },
];

const CardDropdown = ({ items }) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <a
        href="/#"
        className="text-gray font-size-lg"
        onClick={(e) => e.preventDefault()}
      >
        <EllipsisOutlined />
      </a>
    </Dropdown>
  );
};

const tableColumns = [
  {
    title: "Game",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar
          size={30}
          className="font-size-sm"
          style={{ backgroundColor: record.avatarColor }}
        >
          {utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },

  {
    title: () => <div className="text-right">Horas de jogo</div>,
    key: "game_time",
    render: (_, record) => (
      <div className="text-right">{record?.game_time}</div>
    ),
  },
];

export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [activeMembersData] = useState(ActiveMembersData);
  const [newMembersData] = useState(NewMembersData);
  const [recentTransactionData] = useState(RecentTransactionData);
  const { direction } = useSelector((state) => state.theme);
  const check_token = localStorage.getItem(AUTH_TOKEN);
  console.log("token da twitch recebida na Home:", check_token);
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24}>
          <Row gutter={16}>
            {annualStatisticData.map((elm, i) => (
              <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                <StatisticWidget
                  title={elm.title}
                  value={elm.value}
                  status={elm.status}
                  subtitle={elm.subtitle}
                />
              </Col>
            ))}
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <ChartWidget
                title="Olha só que gráfico véi KKKKKK "
                series={visitorChartData.series}
                xAxis={visitorChartData.categories}
                height={"400px"}
                direction={direction}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24}>
          <Card
            title="Favoritos"
            extra={<CardDropdown items={latestTransactionOption} />}
          >
            <Table
              className="no-border-last"
              columns={tableColumns}
              dataSource={recentTransactionData}
              rowKey="id"
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};


export default DefaultDashboard;
