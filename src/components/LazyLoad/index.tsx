import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react"

interface LazyLoadProps {
    className?: string
    style?: CSSProperties;
    width?: number | string;
    height?: number | string;
    offset?: number | string; // 距离可视区域多远就触发加载
    placeholder?: ReactNode; // 占位
    onContentVisible?: () => void; // 进入可视区域后的回调
    children: ReactNode
}

const LazyLoad: FC<LazyLoadProps> = (props) => {
    const {
        className = '',
        style,
        width,
        height,
        offset,
        onContentVisible,
        placeholder,
        children
    } = props

    const [visible, setVisible] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null)

    const elementObserver = useRef<IntersectionObserver>(null)

    function lazyLoadHandler(entries: IntersectionObserverEntry[]) {
        const [entry] = entries
        const { isIntersecting } = entry
        // isIntersecting 为true 时说明元素进入了可视区域，进入后设置visible为true，回调 onContentVisible，然后去掉监听。
        if(isIntersecting) {
            setVisible(true)
            onContentVisible?.();

            const node = containerRef.current

            if(node && node instanceof HTMLElement ) {
                elementObserver.current?.unobserve(node)
            }
        }
    }

    useEffect(() => {
        const options = {
            rootMargin: typeof offset === 'number' ? `${offset}px` : offset || '0px', // 距离可视区域多远就触发
            threshold: 0 // 元素进入可视区域多少比例的时候触发，0 就是刚进入可视区域就触发。
        }

        elementObserver.current = new IntersectionObserver(lazyLoadHandler, options)

        const node = containerRef.current;

        // 监听容器
        if(node instanceof HTMLElement) {
            elementObserver.current.observe(node)
        }

        return () => {
            if(node && node instanceof HTMLElement) {
                elementObserver.current?.unobserve(node)
            }
        }

    }, [])

    const styles = {width, height, ...style}
    return <div ref={containerRef} className={className} style={styles}>
        { visible ? children : placeholder }
    </div>
}

export default LazyLoad