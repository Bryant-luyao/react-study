import Watermark from "../../components/Watermark";

const WatermarkDemo = () => {
    return <Watermark content={["测试水印", '666']} fontStyle={{
        fontSize: "24px",
        color: "pink"
    }}>
        <div style={{height: 800}}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At hic dicta vel voluptate ipsum voluptatum distinctio ratione consectetur doloribus quisquam aperiam ab pariatur quos fugit totam ipsa error, excepturi placeat.</p>
        </div>
    </Watermark>
}

export default WatermarkDemo