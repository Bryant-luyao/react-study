import Portal from "../../components/Portal"

const PortalDemo = () => {
    return <div>
        <div style={{
                width: '100px',
                height: '100px',
                background: 'pink'
            }}>
                未挂载
            </div>
        <Portal><button>挂载到了body</button></Portal>
    </div>
}

export default PortalDemo