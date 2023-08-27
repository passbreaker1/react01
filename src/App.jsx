import React from 'react'
import {useState} from 'react'
import './App.css'
import WorkingList from 'WorkingList';
import DoneList from 'DoneList';

function App() {
   // const title =[
   //    {id:1, tit:"리액트 공부하기", memo:"리액트 기초를 공부"},
   //    {id:2, tit:"리액트 입문하기", memo:"리액트 입문을 공부"},
   // ]
   const [title, setTitle] = useState([
      {id:1, tit:"리액트 공부하기", memo:"리액트 기초를 공부", isCompleted: false},
      {id:2, tit:"리액트 입문하기", memo:"리액트 입문을 공부", isCompleted: false},
   ]);

   const [memo, setMemo] = useState('');
   const [tit, setTit] = useState('');

   const intitChange = (e) => {
      setTit(e.target.value);
   }
   const inmemChange = (e) => {
      setMemo(e.target.value);
   }
   const clickIn = (e) => {
      e.preventDefault();
      //1.새로운 놈 {id:1, tit:"리액트 공부하기", memo:"리액트 기초를 공부"},
     const newtitle ={
      id: title.length +1,
      tit,
      memo: memo,
      isCompleted: false,
     } 
     setTitle([...title, newtitle]);
     setTit('');
     setMemo('');
      
   }
   const clickRerow = (id) => {
      
      const nuetitle = title.filter((titl) => titl.id !== id)
      setTitle(nuetitle)
   }
   const clickComplete = (id) => {
      setTitle((title) => 
         title.map((item) => 
         
            item.id === id ? { ...item, isCompleted : !item.isCompleted } : item
         )
      );
   };
   //없어도 되내
   // const clickRerowDone =(id) => {
   //    const newDoneList = title.filter((item) => item.id !== id);
   //    setTitle(newDoneList);
   // };
   const workingList = title.filter((item) => !item.isCompleted);
   const doneList = title.filter((item) => item.isCompleted);
  return (
   
    <div className= "layout">
      
      <div className="righ">
       My Todo List 
       <span className="rig">React</span>
      </div>
      <form className="add-form">
         <div className="input-group">
            제목
            <input type="text" name="title" className="add-input input-body" 
            value = {tit}
            onChange={intitChange}
            />
            내용
            <input type="text" name="body" className="add-input "
            value={memo}
            onChange={inmemChange}
            />
         </div>
         <button onClick={clickIn} className="add-button">추가하기</button>
      </form>
      <div className="list-container">
         <h2 className="list-title">Working.. 🔥</h2>
         <WorkingList workingList={workingList} clickRerow={clickRerow} clickComplete={clickComplete} />

         
         
         <h2 className="list-title">Done..! 🎉</h2>
         <DoneList doneList={doneList} clickRerow={clickRerow} clickComplete={clickComplete} />

      </div>
    </div>
  )
}

export default App