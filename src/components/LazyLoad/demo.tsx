import React from "react";
import LazyLoad from ".";
import testImg from '../../assets/image/火箭2.gif'

const Calendar = React.lazy(() => import('../Calendar/index'))

export default function LazyLoadDemo() {
    return <div>
             <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad placeholder={<div>img loading...</div>} onContentVisible={() => {
        console.log('img visible');
      }}>
        <img src={testImg} alt="测试"/>
      </LazyLoad>
      <LazyLoad placeholder={<div>Component loading...</div>} onContentVisible={() => {
        console.log('component visible');
      }}>
        <Calendar></Calendar>
      </LazyLoad>
    </div>
}