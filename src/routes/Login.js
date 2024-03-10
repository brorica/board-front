import React, { useState } from 'react';
import Instance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const tryAuth = (event) => {
    event.preventDefault(); // 폼 제출에 의한 페이지 새로고침 방지

    Instance.post('/members/sign-in', {
      email: email,
      password: password,
    })
      .then((res) => {
        alert(`${email}님 반갑습니다.`);
        navigate('/'); // 로그인 성공 후 홈으로 이동
      })
      .catch((error) => {
        // 에러 처리 로직 추가 가능
        console.error('로그인 실패:', error);
      });
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={tryAuth}>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            id="email"
            // type="email" // 이메일 입력 필드로 변경
            name="email"
            value={email}
            onChange={onChangeEmail}
            required // 필수 입력 필드로 지정
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            id="password"
            type="password" // 비밀번호 입력 필드로 변경
            name="password"
            value={password}
            onChange={onChangePassword}
            required // 필수 입력 필드로 지정
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
