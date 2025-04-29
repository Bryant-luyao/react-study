import { forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
// createPortal可以把组件渲染到某个 dom 下
import { createPortal } from "react-dom";
export interface PortalProps {
    attach?: string | HTMLElement
    children: React.ReactNode
}

export function getAttach(attach: PortalProps['attach']) {
    if(typeof attach === 'string') {
        return document.querySelector(attach)
    }
    if(typeof attach === 'object' && attach instanceof window.HTMLElement) {
        return attach
    }

    return document.body
}

// 将组件挂载到指定位置
const Portal = forwardRef((props: PortalProps, ref) => {
    const { attach = document.body, children } = props

    // 创建一个容器
    const container = useMemo(() => {
        const el = document.createElement('div')
        el.className = 'portal-wrapper';
        return el
    }, [])

    useEffect(() => {
        const parentElement = getAttach(attach);
        parentElement?.appendChild?.(container)

        // 组件销毁是删除容器
        return () => {
            parentElement?.removeChild?.(container)
        }
    }, [container, attach])

    useImperativeHandle(ref, () => container)

    return createPortal(children, container)
})

export default Portal