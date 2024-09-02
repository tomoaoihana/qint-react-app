"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Kosugi } from "next/font/google";

export default function Home() {
  // const array = [
  //   [1, 2],
  //   [3, 4],
  //   [5, 6],
  // ];
  //配列形メソッド
  //map
  // const NewArray2 = array.map((num) => {
  //   return num * 2;
  // });

  // const NewArray3 = array.map((nestArray) => {
  //   return nestArray.map((num) => {
  //     return `${num}さん`;
  //   });
  // });

  //filter
  // const array = [
  //   { name: "tanaka", age: 20 },
  //   { name: "suzuki", age: 30 },
  //   { name: "yamada", age: 40 },
  // ];
  // const newArray = array.filter((user) => {
  //   return user.age > 20;
  // });

  //find
  //20をNOにするとundifinedになる
  //filterでは空の配列が返ってくる
  // const users = [
  //   { name: "tanaka", age: 20 },
  //   { name: "suzuki", age: 30 },
  //   { name: "yamada", age: 40 },
  // ];
  // const newUsers = users.find((user) => {
  //   return user.age === 20;
  // });

  // console.log(newUsers);

  //ミュータブル・イミュータブル
  //いミュータブルが推奨されている
  //元を書き換えると差文がわかりにくくなる。なので、ミュータブルは使わない

  return (
    <div className={styles.container}>
      {/* {[<div key="foo">foo</div>, <div key="bar">bar</div>]}
      {["foo", "bar"].map((text) => {
        return <div key={text}>{text}</div>;
      })} */}
    </div>
  );
}
