import React, { useLayoutEffect, useRef, useState } from "react"
import useMutateObserver from "../../hooks/useMutateObserver"

interface MutateObserverProps {
    options?: MutationObserverInit
    onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void
    children: React.ReactElement
}
const MutateObserver: React.FC<MutateObserverProps> = (props) => {

    const {options, onMutate = () => {}, children} = props
    const elementRef = useRef<HTMLElement>(null)

    const [target, setTarget] = useState<HTMLElement>()

    useMutateObserver(target!, onMutate, options)

    useLayoutEffect(() => {
        setTarget(elementRef.current!)
    }, [])

    if(!children) {
        return null
    }

    return React.cloneElement(children, {ref: elementRef} as any);
}

export default MutateObserver