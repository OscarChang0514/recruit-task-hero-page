import { $Green } from 'src/style/color';
import { StyledLoadingBlock } from './LoadingBlock.style';
import type { LoadingBlockProps } from './LoadingBlock.type';

const LoadingBlock: React.FC<LoadingBlockProps> = (props) => {
  return (
    <StyledLoadingBlock {...props}>
      <div className='dot-flashing' />
    </StyledLoadingBlock>
  );
};

LoadingBlock.defaultProps = {
  color: $Green,
  dotSpacing: '25px',
  size: '15px'
}

export default LoadingBlock;
