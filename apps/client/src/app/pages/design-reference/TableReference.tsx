import React, { useState } from 'react';
import Heading from '../../components/partial/heading';
import Table from '../../components/table/table';
import Button from '../../components/partial/button';
import { IMAGES } from '../../../assets/images';

type Props = {};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const TableReference = (props: Props) => {
  const [selectedRows, setSelectedRows] = useState<any>([]);

  const dataSource = [
    {
      key: '1',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
    {
      key: '2',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
    {
      key: '3',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
    {
      key: '4',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
    {
      key: '5',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },

    {
      key: '6',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
    {
      key: '7',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
    {
      key: '8',
      booking_id: '#18000',
      email: 'anand@gmail.com',
      contact: '+91 8904079022',
      date: '5th Jan 2023 | 12:30 PM',
      time: '1 min ago',
    },
  ];

  const columns = [
    {
      title: 'Booking ID',
      dataIndex: 'booking_id',
      key: 'booking_id',
    },
    {
      title: 'User Profile',
      render: (d: any) => (
        <div className="flex gap-3 items-center">
          <div className="flex relative">
            <img
              src={IMAGES.DUMMY_AUTH}
              className="rounded-full h-11 w-11 border"
              alt=""
            />
            <img
              src={IMAGES.DUMMY_AUTH}
              className="rounded-full h-11 w-11 border -ml-2"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-sm">Vanshika / 26</h4>
            <h4 className="text-sm">Rahul Das / 22</h4>
          </div>
        </div>
      ),
    },
    {
      title: 'Email ID',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: 'Booking date & time',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Action',
      render: (d: any) => (
        <div>
          <Button state="warning" className="border-0">
            <div className="flex gap-2 items-center">Pending</div>
          </Button>
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setSelectedRows(selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div>
      <Heading type="h4">Table Reference</Heading>
      <div className="mt-6">
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default TableReference;
