
import { Container,  Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// 이미 가입된 계정

const FindIdExist = () => {
    const navigate=useNavigate();

    const handleNextToLogin=()=>{
        navigate('/login');
    }

    const handleNextToBefore=()=>{
        navigate('/findid');
    }

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
            style={{ fontFamily: 'Pretendard', paddingTop: '5%', overflowX: 'hidden'  }}>
            <Banner>회원으로 등록 이메일 아이디 입니다.
                해당 이메일 로그인하시고 와디즈를 이용하세요!
            </Banner>

            <div className="d-flex flex-column align-items-center mt-3 me-4" style={{ marginTop:'-1rem',marginLeft: '10%',width:'30%' }}>
                <Button variant="primary" size="lg"
                    style={{
                        width: '100%',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        background: '#0064DC',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                    onClick={handleNextToLogin}
                >
                    로그인
                </Button>
                <div style={{marginTop:'0.5rem'}}></div>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNextToBefore}
                    style={{
                        width: '100%',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        border:'1px solid #707070',
                        background: 'var(--white, #FFF)',
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#707070',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                >
                    다시 확인
                </Button>
            </div>

        </Container>
    );
}

const Banner = styled.h5`
    text-align: left;
    color: #878787;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-right:-5%;
`;


export default FindIdExist;
