'use client';

import Image from 'next/image';
import style from './logoutButton.module.css';

export const LogoutButton = () => {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'sunkeydokey',
    nickname: 'sunkeydokey',
    image: '/sample-icon.jpg',
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
};
