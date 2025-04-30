import CopyToClipboard from ".";

const CopyToClipboardDemo = () => {

    const onCopy = (text: string, result: boolean) => {
        console.log(`复制${result ? '成功' : '失败'}`, text)
    }
    return <CopyToClipboard text="测试复制组件" onCopy={onCopy}>
        <button onClick={() => alert('开始复制')}>复制</button>
    </CopyToClipboard>
}

export default CopyToClipboardDemo