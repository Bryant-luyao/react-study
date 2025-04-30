import { useEffect, useState } from "react"
import MutateObserver from "../../components/MutateObserver"

const MutateObserverDemo = () => {
    const [className, setClassName] = useState('aaa')

    useEffect(() => {
        setTimeout(() => setClassName('bbbb'), 2000)
    }, [])

    const onMutate = (mutationsList: MutationRecord[]) => {
        console.log(mutationsList);
    }
    return <>
        <MutateObserver onMutate={onMutate}>
            <div id="container">
                <div className={className}>
                    {
                        className === 'aaa' ? <div>aaa</div> : <div><p>bbbb</p></div>
                    }
                </div>

            </div>
        </MutateObserver>
    </>
}

export default MutateObserverDemo