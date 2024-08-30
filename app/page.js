"use client";

import { useState } from "react";
import styles from "./page.module.css";

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
const array = ["foo", "bar", "baz", "qux"];
const [a, ...rest] = array;

//オブジェクトのレストパラメーター
const obj = { foo: 1, bar: 2, baz: 3 };
const { foo, ...restObj } = obj;

//rest
console.log(a);
console.log(rest);

export default function Home() {
  // const foo = "foo3";
  // const bar = "bar3";
  const condition = true;

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
