import dayjs, { Dayjs } from 'dayjs'
import { CSSProperties, ReactNode, useState } from 'react';
import cs from 'classnames';
import MonthCalendar from './MonthCalendar'
import Header from './Header'
import LocaleContext from './localeContext';

import { useControllableValue } from 'ahooks'
import './index.scss'

export interface CalendarProps {
    value?: Dayjs;
    defaultValue?: Dayjs;
    style?: CSSProperties;
    className?: string | string[];
    // 自定义日期显示，会完全覆盖日期单元格
    dateRender?: (currentDate: Dayjs) => ReactNode; 
    // 自定义日期单元格，内容会被添加到单元格，只会在全屏日历模式下生效
    dateInnerContent?: (currentDate: Dayjs) => ReactNode;
    // 国际化
    locale?: string;
    onChange?: (date: Dayjs) => void
}
function Calendar(props: CalendarProps) {

    const {
        locale,
        style,
        className,
        onChange
    } = props;

    const [curValue, setCurValue] = useControllableValue<Dayjs>(props, {
        defaultValue: dayjs()
    })
    const [curMonth, setCurMonth] = useState<Dayjs>(curValue)

    const changeDate = (date: Dayjs) => {
        setCurValue(date)
        setCurMonth(date)
        onChange?.(date)
    }

    const selectHandler = (date: Dayjs) => {
        changeDate(date)
    }

    const prevMonthHandler = () => {
        setCurMonth(curMonth.subtract(1, 'month'))
    }

    const nextMonthHandler = () => {
        setCurMonth(curMonth.add(1, 'month'))
    }

    const todayHandler = () => {
        const today = dayjs(new Date())
        changeDate(today)
    }

    const classNames = cs('calendar', className)
    return <LocaleContext.Provider value={{
            locale: locale ?? navigator.language
        }}>
                <div className={classNames} style={style}>
            <Header curMonth={curMonth} prevMonthHandler={prevMonthHandler} nextMonthHandler={nextMonthHandler} todayHandler={todayHandler}/>
            <MonthCalendar {...props} value={curValue} curMonth={curMonth} selectHandler={selectHandler}></MonthCalendar>
        </div>
    </LocaleContext.Provider>

}

export default Calendar