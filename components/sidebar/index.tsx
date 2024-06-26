import React from 'react';
import { Layout, Slider, Checkbox, Collapse } from 'antd';

const { Sider } = Layout;
const { Panel } = Collapse;

const brands = ['Samsung', 'Artel', 'Vivo', 'Realmi', 'Xiaomi', 'Apple', 'Tecno'];
const ramOptions = ['2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB'];
const romOptions = ['32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB'];
const batteryOptions = ['3000 mAh', '3200 mAh', '4000 mAh', '5000 mAh', '6000 mAh', '7000 mAh'];

const Sidebar = () => {
  return (
    <Sider width={300} style={{ background: '#fff', padding: '16px' }}>
      <Collapse defaultActiveKey={['1', '2', '3', '4']} ghost>
        <Panel header="Nərx (₼)" key="1">
          <Slider range min={3000000} max={13000000} defaultValue={[3000000, 13000000]} />
        </Panel>
        <Panel header="Brendlər" key="2">
          {brands.map((brand) => (
            <Checkbox key={brand} style={{ display: 'flex', margin: '8px 0' }}>
              {brand}
            </Checkbox>
          ))}
        </Panel>
        <Panel header="Tezkor xotira RAM" key="3">
          {ramOptions.map((ram) => (
            <Checkbox key={ram} style={{ display: 'flex', margin: '8px 0' }}>
              {ram}
            </Checkbox>
          ))}
        </Panel>
        <Panel header="Daimi xotira ROM" key="4">
          {romOptions.map((rom) => (
            <Checkbox key={rom} style={{ display: 'flex', margin: '8px 0' }}>
              {rom}
            </Checkbox>
          ))}
        </Panel>
        <Panel header="Akkumulyator həcmi" key="5">
          {batteryOptions.map((battery) => (
            <Checkbox key={battery} style={{ display: 'flex', margin: '8px 0' }}>
              {battery}
            </Checkbox>
          ))}
        </Panel>
      </Collapse>
    </Sider>
  );
};

export default Sidebar;
