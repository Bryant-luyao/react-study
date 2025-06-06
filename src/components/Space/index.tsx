import React, { HTMLAttributes } from "react";
import cs from 'classnames'
import './index.scss'
import { ConfigContext } from "./ConfigProvider";

export type SizeType = 'small' | 'middle' | 'large' | number | undefined

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?: SizeType | [SizeType, SizeType];
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    split?: React.ReactNode
    wrap?: boolean
}

// 定义size的尺寸
const spaceSize = {
    small: 8,
    middle: 16,
    large: 24
}

function getNumberSize(size: SizeType) {
    return typeof size === 'string' ? spaceSize[size] : size || 0
}

const Space: React.FC<SpaceProps> = (props) => {
    const { space } = React.useContext(ConfigContext)
    const {
        className, 
        style,
        size = space?.size ?? 'middle',
        direction = 'horizontal',
        align,
        split,
        wrap = false,
        ...otherProps
    } = props

    const childNodes = React.Children.toArray(props.children)

    const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;

    // 根据参数生成类名
    const cn = cs(
        'space',
        `space-${direction}`,
        {
            [`space-align-${mergedAlign}`]: mergedAlign
        },
        className
    )


    // 将传入的节点包装一下
    const nodes = childNodes.map((child: any, i) => {
        const key = child?.key ?? `space-item-${i}`
        return <>
            <div className="space-item" key={key}>
            {child}
        </div>
        {
            i < childNodes.length && split && (
                <span className={`${className}-split`}>
                    {split}
                </span>
            )
        }
        </>
    })

    const otherStyles: React.CSSProperties = {}

    const [horizontalSize, verticalSize ] = React.useMemo(
        () => ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(item => {
           return getNumberSize(item)
        })
    , [size])

    otherStyles.columnGap = horizontalSize
    otherStyles.rowGap = verticalSize

    if(wrap) {
        otherStyles.flexWrap = 'wrap'
    }


    return <div 
        className={cn} 
        style={{...style, ...otherStyles}} 
        {...otherProps}
        >
            {nodes}
    </div>
}

export default Space