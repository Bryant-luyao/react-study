import Space from "../../components/Space";
import { ConfigProvider } from "../../components/Space/ConfigProvider";
import './index.scss'

export default function SpaceDemo() {
    return <div className='container' >
  <ConfigProvider space={{ size: 20 }}>
    <Space direction="horizontal">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </Space>
    <Space direction="vertical">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </Space>
    <Space className="split-test" direction="horizontal" split={<span>666</span>}>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </Space>
  </ConfigProvider>
</div>
}