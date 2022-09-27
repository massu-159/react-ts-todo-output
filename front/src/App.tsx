import { useState, ChangeEvent, useCallback } from 'react';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';
import './App.css';



function App() {

  const { memos, addTodo, deleteTodo } = useMemoList();

  // テキストボックスState
  const [text, setText] = useState<string>("");
  

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // 追加ボタン
  const onClickAdd = () => {
    addTodo(text);
    // テキストボックスを空に
    setText("");
  };

  // 削除ボタン
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>
      <h1>メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
      
    </div>
  );
};

export default App;
