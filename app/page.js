import styles from "./page.module.css";

function Foo() {
  //...
}

const Bar = () => {};

export default function Home() {
  const foo = "foo3";
  const bar = "bar3";
  const condition = true;

  return (
    <div className={styles.container}>
      {/* テンプレート文字列を使って変数を埋め込む */}
      <p>{`text:${foo}  ${bar}`}</p>
      {/* 三項演算子 */}
      <div>{condition ? "trutyの場合" : "falsyの場合"}</div>
    </div>
  );
}
