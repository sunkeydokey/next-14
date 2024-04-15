'use client';

import Image from 'next/image';
import style from './followRecommend.module.css';
import Link from 'next/link';
import icon from '/public/sample-icon.jpg';

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: 'sunkeydokey',
    nickname: 'sunkeydokey',
    image: icon,
  };
  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
