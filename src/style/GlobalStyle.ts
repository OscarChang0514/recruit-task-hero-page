import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		color:  rgba(0, 0, 0, 0.65);
		background-color: #fafafa;
		height: 100%;
		font-family: 微軟正黑體;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	#root {
		height: 100vh;
	}
`;
