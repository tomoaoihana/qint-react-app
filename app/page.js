"use client";

import { useCallback, useMemo, useState } from "react";
import styles from "./page.module.css";
import { Kosugi } from "next/font/google";

export default function Home(props) {
  //useMemo,useCallbackを使ってパフォーマンスを向上させる
  //多用している関数や値をキャッシュしておくことで、再レンダリング時に再計算を行わないようにする
  //多用しても大丈夫？→メモリを消費するので、必要な時だけ使う
  //useMemoは値を、useCallbackは関数をキャッシュする

  //useEffectはあまり使わない方がいい
  //useEffectはコンポーネントがレンダリングされた後に実行される

  //useEffectはコンポーネントのレンダリング後に実行される
  //基本使わない方がいい
  //ライブラリを使う

  const users = useMemo(
    () => [
      { name: "tanaka", age: 20 },
      { name: "suzuki", age: 30 },
      { name: "yamada", age: 40 },
      { name: "yamamoto", age: 10 },
    ],
    []
  );

  const handleClick = useCallback(() => {
    alert("クリックされました");
  }, []);

  //早期リターンで条件分岐

  if (users.length === 0) {
    return <div>ユーザーは存在しません</div>;
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
        ボタン
      </button>
      {users.map((user) => {
        return <div key={user.name}>{user.name}</div>;
      })}
    </div>
  );
}
