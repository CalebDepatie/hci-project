import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import "./settings.css";

export default function Settings(props) {
  const [rooms, setRooms] = useState([
    {
      name: "Home Room",
      sensors: [3],
    },
    {
      name: "Gymnasium",
      sensors: [1,2,4],
    },
    {
      name: "Cafeteria",
      sensors: [5, 0],
    },
    {
      name: "Atrium",
      sensors: [4,5,3],
    }
  ]);
  const [activeRoom, setActiveRoom] = useState(0);

  const sensors = [
    "Main Door",
    "Gym Entrance",
    "Gym Exit",
    "Office Door 1",
    "Atrium Door 1",
    "Atrium Door 2",
  ];

  return <>
    <div className="row">
      <div className="col-md-4 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Room Limits</h4>
            <p className="card-description">Set up your custom room limits</p>
            <Form.Group className="row">
              <div className="col-6">
                <label>Home Room</label>
                <Form.Control type="text" className="form-control-lg" placeholder="Username" value={200}/>
              </div>

              <Form.Check type="checkbox" className="form-control-lg col-6" label="Notify when capacity is reached?"/>
            </Form.Group>

            <Form.Group className="row">
              <div className="col-6">
                <label>Gymnasium</label>
                <Form.Control type="text" className="form-control-lg" placeholder="Username" value={400}/>
              </div>

              <Form.Check type="checkbox" className="form-control-lg col-6" label="Notify when capacity is reached?"/>
            </Form.Group>

            <Form.Group className="row">
              <div className="col-6">
                <label>Cafeteria</label>
                <Form.Control type="text" className="form-control-lg" placeholder="Username" value={150}/>
              </div>

              <Form.Check type="checkbox" className="form-control-lg col-6" label="Notify when capacity is reached?"/>
            </Form.Group>

            <Form.Group className="row">
              <div className="col-6">
                <label>Atrium</label>
                <Form.Control type="text" className="form-control-lg" placeholder="Username" value={50}/>
              </div>

              <Form.Check type="checkbox" className="form-control-lg col-6" label="Notify when capacity is reached?"/>
            </Form.Group>
          </div>
        </div>
      </div>

      <div className="col-md-7 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Room Configurations</h4>
            <p className="card-description">Create, label, and edit rooms</p>
            <div className="row">
              <ListGroup className="col-4 list_group">
                {
                  rooms.map((el, idx) =>
                    <ListGroup.Item className="list_item" action active={idx===activeRoom} onClick={() => setActiveRoom(idx)}>
                      {el.name}
                    </ListGroup.Item>)
                }
              </ListGroup>

              <div className="col-xl-6">
                {
                  sensors.map((el, idx) =>
                  <Form.Check type="checkbox" className="form-control-lg" checked={rooms[activeRoom].sensors.some((s) => s===idx)} label={el}>
                  </Form.Check>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}
