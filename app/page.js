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

  //スライスメソッドは破壊的メソッドではない
  const Array = array.slice(0, -1);

  console.log(Array);

  const newArray = [...array, 4];
  console.log(newArray);

  return <div className={styles.container}></div>;
}
