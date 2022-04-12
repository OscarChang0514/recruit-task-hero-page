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

	@keyframes fade-move-in {
		0% {
			margin-top: 100px;
			margin-bottom: -100px;
			opacity: 0;
		}
		100% {
			margin-top: 0;
			margin-bottom: 0;
			opacity: 1;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
