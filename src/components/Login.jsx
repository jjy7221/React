import React, { useEffect, useState } from "react";
import User from "../Data/UserData";

export default function Login(props){

    const [email, setEmail] = useState('');
    const [pw, setpw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setpwValid] = useState(false);
    
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) =>{
        setEmail(e.target.value);
        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if(regex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
    }

    const handlePW = (e) =>{
        setpw(e.target.value);
        const regex =/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{7,20}$/;

        if(regex.test(pw)){
            setpwValid(true);
        }
        else
        {
            setpwValid(false);
        }
    }

    const onClickConnfirmButton = () =>{
        if(email === User.email && pw === User.pw){
            alert('로그인 성공');
            props.loginstate(true);
        }
        else{
            alert('등록되지 않은 사용자');
        }
    }

    useEffect(()=>{
        if(emailValid && pwValid)
        {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid]);

    return(
        <div className="login">
            <div className='titleWrap'>
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className='inputTitle'>이메일 주소</div>
                <div className="inputWrap">
                    <input
                        type =  'text'
                        className="input"
                        placeholder="ex) test@gmail.com"
                        value={email}
                        onChange={handleEmail}>   
                    </input>
                </div>

                <div className="errorMsgWrap">
                    {
                        !emailValid && email.length > 0 && (<div>올바른 이메일을 입력해주세요</div>)
                    }
                </div>

                <div style={{marginTop:"26px"}} className='inputTitle'>비밀 번호</div>
                <div className="inputWrap">
                    <input 
                        type='password'
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8~12자"
                        value={pw}
                        onChange={handlePW}>  
                    </input>
                </div>
                <div className="errorMsgWrap">
                    {
                        !pwValid && pw.length > 0 && (<div>영문, 숫자, 특수문자 포함 8~12자 입력해주세요.</div>)
                    }
                </div>
            </div>

            <div>
                <button onClick={onClickConnfirmButton} disabled={notAllow} className="bottomButton">
                    로그인
                </button>
            </div>
        </div>
    );
}