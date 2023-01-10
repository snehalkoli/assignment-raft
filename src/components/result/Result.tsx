import React, { useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import AppContext from '../../store/appContext';
import OutputSingleRow from './OutputSingleRow/OutputSingleRow';

const Result : React.FC<{}> = () => {
  const appCtx = useContext(AppContext);
  return (
    <Card>
      <Card.Header>
        <Card.Title>Result:</Card.Title>
      </Card.Header>
          
      <Card.Body>     
        <ListGroup as="ul">
          {appCtx.output.length === 0 ? (
            <Card>
              <Card.Body className="text-danger">
                No connection between the people!
              </Card.Body>
            </Card>
          ) : (
            appCtx.output.map((users, i) => (
              <OutputSingleRow users={users} key={i} />
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default Result;
