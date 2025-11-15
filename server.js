// server.js 파일 내용

const express = require('express');
const axios = require('axios');
const app = express();
// 서버가 실행될 포트 번호입니다.
const port = 8080; 

// 🚨 1. YOUR_REST_API_KEY : 카카오 개발자 센터에서 REST API 키로 변경
const KAKAO_CLIENT_ID = 'f6df09a8b16820bf7c54bd444163822a'; 

// 🚨 2. YOUR_CLIENT_SECRET : 카카오 개발자 센터에서 발급받은 Client Secret으로 변경
const KAKAO_CLIENT_SECRET = 'Y3l7Id39aSkSOFAroUgWcdp5kqxPuP3x'; 

// 3. 카카오 개발자 센터에 등록한 Redirect URI와 정확히 일치해야 합니다.
const KAKAO_REDIRECT_URI = 'https://jjspecialforces.neocities.org/kakao/callback'; 

// CORS 설정: 외부 도메인(neocities)에서 접근할 수 있도록 허용
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 카카오 로그인 콜백을 처리하는 API 엔드포인트
app.get('/kakao/callback', async (req, res) => {
    console.log('--- 카카오 로그인 콜백 요청 수신 ---');
    
    // 1. 인가 코드(Code) 추출
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('로그인 실패: 인가 코드가 없습니다.');
    }

    // 2. 인가 코드를 이용하여 Access Token을 요청
    try {
        const tokenResponse = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            null,
            {
                params: {
                    grant_type: 'authorization_code',
                    client_id: KAKAO_CLIENT_ID,
                    client_secret: KAKAO_CLIENT_SECRET,
                    redirect_uri: KAKAO_REDIRECT_URI,
                    code: code,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            }
        );

        const accessToken = tokenResponse.data.access_token;
        
        // 3. 사용자 정보(프로필) 가져오기
        const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userData = userResponse.data;
        
        // 4. 로그인 성공 메시지 반환
        res.send(`
            <!DOCTYPE html>
            <html>
            <head><title>로그인 성공</title></head>
            <body>
                <h1>카카오 로그인 성공!</h1>
                <p>환영합니다, ${userData.properties.nickname}님!</p>
                <p>이 서버는 ${req.headers.host}에서 실행 중입니다.</p>
                <a href="https://jjspecialforces.neocities.org/">상품 페이지로 돌아가기</a>
            </body>
            </html>
        `);

    } catch (error) {
        console.error('토큰 또는 사용자 정보 획득 실패:', error.response ? error.response.data : error.message);
        res.status(500).send('카카오 로그인 중 오류가 발생했습니다.');
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`백엔드 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});