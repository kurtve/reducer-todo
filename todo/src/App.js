import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	h1 {
		font-size: 4rem;
		text-align: center;
	}
`;


function App() {
	return (
		<AppWrapper>
			<h1>Hello, App!</h1>
		</AppWrapper>
	);
}

export default App;
