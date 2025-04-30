
// 浏览器提供了 MutationObserver 的 api，可以监听 dom 的变化，包括子节点的变化、属性的变化。

import { useEffect } from "react"

// 参考文档： https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
const defaultOptions: MutationObserverInit = {
    subtree: true, // 当为 true 时，将会监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target。默认值为 false。
    childList: true, // 当为 true 时，监听 target 节点中发生的节点的新增与删除
    attributeFilter: ['style', 'class'] // 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知。
}

export default function useMutateObserver(
    nodeOrList: HTMLElement | HTMLElement[],
    callback: MutationCallback,
    options: MutationObserverInit = defaultOptions
) {
    useEffect(() => {
        if(!nodeOrList) return

        let instance: MutationObserver

        const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList]

        if('MutationObserver' in window) {
            instance = new MutationObserver(callback)

            nodeList.forEach(node => {
                instance.observe(node, options)
            })
        }

        // 在销毁的时候，调用 takeRecords 删掉所有剩余通知，调用 disconnect 停止接收新的通知
        return () => {
            instance.takeRecords()
            instance.disconnect()
        }
    }, [options, nodeOrList])

}