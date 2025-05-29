import { useEffect } from 'react'
import { useSpringValue, animated, useSpring, useSprings, useTrail, useSpringRef, useChain } from '@react-spring/web';
import './index.scss'
import Smile from './smile';
export default function ReactSpringDemo() {
    const width = useSpringValue(0, {
        config: {
            // duration: 2000, // 持续时间
            mass: 2, // 质量（也就是重量），质量越大，回弹惯性越大，回弹的距离和次数越多
            friction: 10, // 摩擦力，增加点阻力可以抵消质量和张力的效果
            tension: 200 // 张力，弹簧松紧程度，弹簧越紧，回弹速度越快， 值越大回弹越快
        }
    })

    const [styles, api] = useSpring(() => ({
        from: {
            width: 100,
            height: 100
        },
        config: {
            // duration: 2000,
            mass: 2, // 质量（也就是重量），质量越大，回弹惯性越大，回弹的距离和次数越多
            friction: 10, // 摩擦力，增加点阻力可以抵消质量和张力的效果
            tension: 200 // 张力，弹簧松紧程度，弹簧越紧，回弹速度越快， 值越大回弹越快
        }
    }))
    

    const [springs, api2] = useSprings(3, () => ({
        from: { width: 0 },
        config: {
            duration: 1000
        }
    }))

    const [trails, api3] = useTrail(3, () => ({
        from: {
            width: 0
        },
        config: {
            duration: 1000
        }
    }))

    function clickHandler() {
        api.start({
            width: 200,
            height: 200
        })
        width.start(300)
        api2.start({ width: 300 })
        api3.start({ width: 300 })
    }


    const apiRef1 = useSpringRef()

    const [rSpring1] = useSprings(3, () => ({
        ref: apiRef1,
        from: {width: 0},
        to: {width: 300},
        config: {
            duration: 1000
        }
    }))

    const apiRef2 = useSpringRef()

    const [rSpring2] = useSprings(3, () => ({
        ref: apiRef2,
        from: {height: 50},
        to: {height: 100},
        config: {
            duration: 1000
        }
    }))

    useChain([apiRef1, apiRef2], [0, 1], 500)

    return <div className="react-spring-demo">
     <div className="react-spring-demo__left">
           <button  onClick={clickHandler}>执行动画</button>
        <animated.div className="single-demo" style={{ width }}></animated.div>
        <animated.div className="single-demo" style={{...styles}}></animated.div>
        {
            springs.map(styles => (
                <animated.div className="single-demo" style={{...styles}}></animated.div>
            ))
        }
        {
            trails.map(styles => (
                <animated.div className="single-demo" style={{...styles}}></animated.div>
            ))
        }
     </div>
     <div  className="react-spring-demo__right">
        <Smile />
     </div>
    </div>
}