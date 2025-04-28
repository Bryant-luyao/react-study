import React, { PropsWithChildren } from "react"
import { SizeType } from "."

export interface ConfigContextType {
    space?: {
        size?: SizeType
    }
}
// 使用provide传入参数
export const ConfigContext = React.createContext<ConfigContextType>({})

interface ConfigProviderProps extends PropsWithChildren<ConfigContextType>{}

// 包装一下统一处理provider，其他组件也可以同样使用
export function ConfigProvider(props: ConfigProviderProps) {
    const {
        space,
        children
    } = props

    return <ConfigContext.Provider value={{space}}>{children}</ConfigContext.Provider>
}