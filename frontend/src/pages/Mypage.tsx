import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Mypage = () => {
 const navigate = useNavigate();
	const kanban = () => {
		navigate('/kanban');
	}

	return (
		<>
		<div>
		<Mypagecontainer>
			<div className="pagebox">
				<Buttonbox>Manage Account Details</Buttonbox>
				<Buttonbox>Manage Job Postings</Buttonbox>
			</div>
			<div className="pagebox">
				<Buttonbox onClick={kanban}>Manage My Projects</Buttonbox>
				<Buttonbox>Payment</Buttonbox>
			</div>
		</Mypagecontainer>
		</div>
		</>
	)
}

export default Mypage

const Mypagecontainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	max-width: 1280px;
	height: 100vh;
	margin: 0 auto;
`

const Buttonbox = styled.button`
	border: 1px solid #002E71;
	color: #002E71;
	background-color: #ffffff;
	border-radius: 6px;
	padding: 10px 20px;
	width: 300px;
	height: 200px;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 50px;
	&:hover {
		background-color: #002E71;
		color: #ffffff;
	}
`