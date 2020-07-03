import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    width: 100%;
    height:  25px;
    background: #D8D8D8;
    border-radius: 100px;
`;

const ProgressBarContent = styled.div`
    width: ${props => props.width ? props.width+'%' : '0px'};
    height:  25px;
    background: linear-gradient(35.19deg, var(--primary) 55.67%, var(--secondary) 89.68%);
    border-radius: 100px;
`;

const ProgressBar = ({ width }) => {
    return (
        <ProgressBarContainer>
            <ProgressBarContent width={width} />
        </ProgressBarContainer>
    )
}

export default ProgressBar;
