import type { FC } from "react";
import './MemoList.css';
import type { Props } from "../types/Props";



export const MemoList: FC<Props> = props => {
  const { memos, onClickDelete } = props;

  return (
    <div className='container'>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <div className='memoWrapper'>
              <p>{memo}</p>
              <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}