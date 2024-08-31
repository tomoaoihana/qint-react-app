"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Kosugi } from "next/font/google";

// function Foo() {
//   //...
// }

// const Bar = () => {};

//分割代入オブジェクト
// const obj = { foo: 1, bar: 2, baz: 3 };
// const { foo, bar, baz } = obj;

// const array = ["foo", "bar", "baz"];
// const [foo, bar, baz] = array;

//レストパラメーター
//残余引数
//関数の引数に...をつけると、残りの引数を配列として受け取ることができる
//あまりが配列になるイメージ
// const array = ["foo", "bar", "baz", "qux"];
// const [a, ...rest] = array;

//スプレッド構文
//配列の展開　広がるイメージ
//配列を展開して別の配列にする
//そのままだと配列のままだが、スプレッド演算子を使うことで配列を展開できる
// const numbers = [1, 2, 3, 4, 5];
// const array1 = ["foo", "bar", "baz", "qux"];
// console.log([...numbers, ...array1]);
// console.log([...array1, 1, 2]);

//オブジェクトの展開
// const obj1 = { foo: 1, bar: 2 };
// console.log({
//   a: "aaaa",
//   b: "bbbb",
//   ...obj1,
// });

//オブジェクトのレストパラメーター
// const obj = { foo: 1, bar: 2, baz: 3 };
// const { foo, ...restObj } = obj;

//rest
// console.log(a);
// console.log(rest);

//

export default function Home() {
  // const foo = "foo3";
  // const bar = "bar3";
  const condition = true;

  //スプレッド演算子どんな時に使うのか？
  const [user, setUser] = useState({
    name: "tomo",
    age: 30,
    gender: "おんな",
  });

  const handleChange = (name) => {
    setUser((prevUser) => ({ name, ...prevUser }));
  };

  //useStateは分割代入で使うことが多い
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      {/* テンプレート文字列を使って変数を埋め込む */}
      {/* <p>{`text:${foo}  ${bar}`}</p> */}
      {/* 三項演算子 */}
      <div>{condition ? "trutyの場合" : "falsyの場合"}</div>
      {/* ここはfalse */}
      <div>{0 ? "trutyの場合" : "falsyの場合"}</div>
      {/* こうやって書く人もいます。でも右辺が0の時、０が出ちゃう。。。falseのときに右辺が適応される */}
      <div>{true && "trutyの場合"}</div>

      {/* 分割代入 */}
      <div>{text}</div>
    </div>
  );
}
