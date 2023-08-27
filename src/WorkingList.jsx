import React from 'react';

function WorkingList({ workingList, clickRerow, clickComplete }) {
  return (
    <div className="list-wrapper">
      {workingList.map((item) => (
        <div key={item.id} className="todo-container">
          <div>
            <h2 className="todo-title">{item.tit}</h2>
            <div>{item.memo}</div>
          </div>
          <div className="button-set">
            <button onClick={() => clickRerow(item.id)} className="todo-delete-button button">삭제하기</button>
            <button onClick={() => clickComplete(item.id)} className="todo-complete-button button">
              {item.isCompleted ? '취소' : '완료'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkingList;
