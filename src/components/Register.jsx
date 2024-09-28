import React, {useContext, useCallback} from 'react';
import { Button, Form, Input, InputNumber, DatePicker, Radio } from 'antd';
import dayjs from 'dayjs';
import { eventIDContext } from './EventsList';
import { useNavigate } from "react-router-dom"; 

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const dateTimestamp = dayjs('2024-01-01').valueOf();
// const onFinish = (values) => {
//   console.log('Success:', values);
// };

const App = () => {
  const [currentEventId, setCurrentEventId] = useContext(eventIDContext);
  const navigate = useNavigate();

  const onFinish = useCallback((values) => {
    console.log('try', values);
    const sendData = async(data) => {
      const rawResponse = await fetch('http://localhost:3001/participants', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
    };
    const participantData = {...values, eventID: currentEventId}  // update eventId with value from use context 
    console.log('dupa', currentEventId);
    sendData(participantData);
    navigate('/');
  }, [currentEventId]);

  return (<Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    {/* <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },
      ]}
    >
      <InputNumber />
    </Form.Item> */}
    {/* <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item> */}

<Form.Item
      label="Date of birth"
      name="date"
      rules={[
        {
          required: true,
        },
      ]}
      getValueProps={(value) => ({
        value: value && dayjs(Number(value)),
      })}
      normalize={(value) => value && `${dayjs(value).valueOf()}`}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item name="reference" label='How you know about us?'>
      <Radio.Group>
        <Radio value="Social Media">Social media</Radio>
        <Radio value="Friends">Friends</Radio>
        <Radio value="Found Myself">Found Myself</Radio>
      </Radio.Group>
    </Form.Item>
    
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Button type="primary" htmlType="submit">
      <a href='/'>Go back</a>
      </Button>
    </Form.Item>

  </Form>
)};
export default App;

{/* <a href='/'>Go back</a> */}