import { forwardRef } from "react";
import { Icon, IconsProps } from ".";

const loadedSet = new Set<string>()
export function createFromIconfont(scriptUrl: string) {
    if(typeof scriptUrl === "string" && scriptUrl.length && !loadedSet.has(scriptUrl)) {
        const script = document.createElement('script')
        script.setAttribute('src', scriptUrl)
        script.setAttribute('data-namespace', scriptUrl);
        document.body.appendChild(script)
        loadedSet.add(scriptUrl)
    }

    const Iconfont = forwardRef<SVGSVGElement, IconsProps>((props, ref) => {
        const {type, ...rest} = props
        return (
            <Icon {...rest}>
                {
                    type ? <use xlinkHref={`#${type}`}/> : null
                }
            </Icon>
        )
    })

    return Iconfont
}