import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Table from "../Table";
import { Row, Col } from "antd";
const initialData = Array.from({ length: 10 }, (v, k) => ({
  id: `id-${k}`,
  content: `Quote ${k}`,
}));

// Função para reordenar a lista
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Função para logar as posições dos itens
const logItemsPosition = (data) => {
  const log = data.map((item, index) => ({
    position: index + 1, // Posição atual
    id: item.id,
    content: item.content,
  }));
  console.log("Log dos itens e suas posições:", log);
  return log;
};

const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Content",
    dataIndex: "content",
  },
];

const IsDraggingContext = React.createContext(false);

const BodyRow = ({ draggableId, rowIndex, style, children, ...props }) => (
  <Draggable key={draggableId} draggableId={draggableId} index={rowIndex}>
    {(provided) => (
      <tr
        ref={provided.innerRef}
        {...props}
        {...provided.draggableProps}
        style={{
          ...style,
          ...provided.draggableProps.style,
        }}
      >
        <td
          {...provided.dragHandleProps}
          style={{ userSelect: "none", cursor: "move", width: 1 }}
        >
          <span
            style={{
              lineHeight: 0,
              height: 9,
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            .....
          </span>
        </td>
        {children}
      </tr>
    )}
  </Draggable>
);

const BodyWrapper = ({ children, ...props }) => (
  <Droppable droppableId="table">
    {(droppableProvided) => (
      <tbody
        ref={droppableProvided.innerRef}
        {...droppableProvided.droppableProps}
        {...props}
      >
        {children}
        {droppableProvided.placeholder}
      </tbody>
    )}
  </Droppable>
);

const HeaderRow = ({ children, ...props }) => (
  <tr {...props}>
    <th />
    {children}
  </tr>
);

const components = {
  header: {
    row: HeaderRow,
  },
  body: {
    wrapper: BodyWrapper,
    row: BodyRow,
  },
};

const DraggableTable = () => {
  const [data, setData] = useState(initialData);
  const [isDragging, setIsDragging] = useState(false);
  const [log, setLog] = useState([]);

  const onBeforeDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = (result) => {
    setIsDragging(false);

    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newData = reorder(
      data,
      result.source.index,
      result.destination.index
    );

    setData(newData);

    // Logar as posições dos itens após reordenar
    const newLog = logItemsPosition(newData);
    setLog(newLog); // Salva o log para exportar se necessário
  };

  return (
    <IsDraggingContext.Provider value={isDragging}>
      {" "}
      <Row gutter={16}>
        <Col sm={24} md={16}>
          {" "}
          <DragDropContext
            onBeforeDragStart={onBeforeDragStart}
            onDragEnd={onDragEnd}
          >
            <Table
              dataSource={data}
              columns={columns}
              components={components}
              onRow={(record, rowIndex) => ({
                draggableId: record.id,
                rowIndex,
              })}
            />
          </DragDropContext>
        </Col>
        <Col sm={24} md={8}>
          {" "}
          <div>
            <h3>Log dos itens e suas posições:</h3>
            <pre>{JSON.stringify(log, null, 2)}</pre>
          </div>{" "}
        </Col>

        {/* Exibe o log atual */}
      </Row>
    </IsDraggingContext.Provider>
  );
};

export default DraggableTable;
