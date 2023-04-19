
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [data, setData] = useState(['여자 코트 추천','강남 우동 맛집','리액트 독학']);
  let [logo, setLogo] = useState('ReactTraining');
  let [goodCnt, setGoodCnt] = useState([0,0,0]);
  let [focusPost,setFocus] = useState('');
  //document.querySelector(`h4`).innerHTML = post;

  
  if(1)
  {
    return (
      <div className="App">
        <div className="black-nav">
          <h4 style={{color: 'green', fontSize: '30px'}} id='Post'>{logo}</h4>
        </div>
      
        <Post_list usedata={data} index={0} CntFucn={setGoodCnt} Cnt={goodCnt} focus = {focusPost} focustFunc = {setFocus}></Post_list>
        <Post_list usedata={data} index={1} CntFucn={setGoodCnt} Cnt={goodCnt} focus = {focusPost} focustFunc = {setFocus}></Post_list>
        <Post_list usedata={data} index={2} CntFucn={setGoodCnt} Cnt={goodCnt} focus = {focusPost} focustFunc = {setFocus}></Post_list>

        <button onClick={()=>{
          let copy = [...data];
          copy[0] = '남성 코트 추천';

          setData(copy);
        }}> PostEdit </button>

        <Modal focusP = {focusPost}></Modal>
        
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <div className="black-nav">
          <h4 style={{color: 'green', fontSize: '30px'}} id='Post'>{logo}</h4>
        </div>
      
        <button onClick={()=>{
          let copy = [...data];
          copy[0] = '남성 코트 추천';

          setData(copy);
        }}> PostEdit </button>

        <Modal focusP = {focusPost}></Modal>
        
      </div>
    );
  }
}

function Post_list(props){
  return (
      <div className="post-list">
        <h4 onClick={()=>{
          props.focustFunc(props.usedata[props.index])
        }}>{props.usedata[props.index]} <span onClick={()=>{
          let copy = [...props.Cnt];
          copy[props.index] += 1;

          props.CntFucn(copy)
          }}>👍</span> {props.Cnt[props.index]} </h4>
        <p>2월 17일 발행</p>
      </div>
  )
}

function Modal(props){
  return (
      <div className="modal">
        <h4>{props.focusP}</h4>
        <p>{props.focusP ? '2/17': ''}</p>
        <p>{props.focusP ? '상세내용이 나온다' : ''}</p>
      </div>
  )
}

export default App;
