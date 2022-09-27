import { useCallback, useState } from "react";

export const useMemoList = () => {
  // メモState
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = useCallback((text: string) => {
    // State変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];

    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);

    setMemos(newMemos);
  }, [memos]);

  const deleteTodo = useCallback((index: number) => {
    // 配列生成（State変更を検知するため）
    const newMemos = [...memos];

    // メモ配列から要素削除
    newMemos.splice(index, 1);

    setMemos(newMemos);
  }, [memos]);

  return { memos, addTodo, deleteTodo };
};

