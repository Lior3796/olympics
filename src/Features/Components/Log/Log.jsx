import { useContext, useState } from "react";
import styled from "styled-components";
import { SetUserName } from "../../../Context";
function Log() {
	const form = SetUserName();

	const StyledSearch = styled.nav`
		width: 30%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 100%;
		border-radius: 0px 25px 25px 0px;
		border-left: none;
	`;
	const StyledInput = styled.input`
		height: 25px;
		border-radius: 25px 0 0 25px;
		border-right: none;
		outline: none;
	`;
	const StyledButton = styled.input`
		border-radius: 0 25px 25px 0;
		height: 31px;
		outline: none;
	`;
	return (
		<StyledSearch>
			{form ? form[0].value : <i class="far fa-user"></i>}
			<StyledInput type="text" />
			<StyledButton type="button" value="search" />
		</StyledSearch>
	);
}

export default Log;
