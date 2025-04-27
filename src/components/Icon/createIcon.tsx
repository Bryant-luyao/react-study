import { forwardRef } from "react";
import { Icon, IconsProps } from ".";

interface CreateIconOptions {
    content: React.ReactNode;
    iconProps?: IconsProps
    viewBox?: string
}
export function createIcon(options: CreateIconOptions) {

    const {content, iconProps = {}, viewBox = '0 0 1024 1024'} = options
    return forwardRef<SVGSVGElement, IconsProps>((props, ref) => {
        return <Icon ref={ref} viewBox={viewBox} {...iconProps} {...props}>
            {content}
        </Icon>
    })
}