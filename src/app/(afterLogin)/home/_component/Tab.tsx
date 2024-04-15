'use client';

import { useContext } from 'react';
import style from './tab.module.css';
import { TabContext } from './TabProvider';

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickRecommend = () => {
    setTab('recommend');
  };
  const onClickFollow = () => {
    setTab('follow');
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickFollow}>
          추천
          <div
            className={style.tabIndicator}
            hidden={tab === 'recommend'}
          ></div>
        </div>
        <div onClick={onClickRecommend}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === 'follow'}></div>
        </div>
      </div>
    </div>
  );
}
