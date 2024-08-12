import React, { useState } from 'react';

export default function TodoList() {
  const { todos, setTodos } = useState([
    { id: 123, text: '장보기', status: 'active' },
    { id: 456, text: '공부하기', status: 'study' },
  ]);
  return <section></section>;
}
