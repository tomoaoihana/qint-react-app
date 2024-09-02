"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Kosugi } from "next/font/google";

export default function Home() {
  const array = [1, 2, 3];
  //pushは破壊的メソッド
  // array.push(4);
  //unshiftも破壊的メソッド
  // array.unshift(0);
  //popも破壊的メソッド
  // array.pop();
  //shiftも破壊的メソッド
  // array.shift();

  //スライスメソッドは破壊的メソッドではない
  const Array = array.slice(1);

  //配列形メソッド
  //map
  const NewArray2 = array.map((num) => {
    return num * 2;
  });

  console.log(NewArray2);

  const newArray = [...array, 4];

  return <div className={styles.container}></div>;
}
