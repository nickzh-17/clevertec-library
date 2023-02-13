import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { useScrollBlock } from '../../hooks/use-scroll-block';
import animationData from './loader-animation.json';

import './lottie-loader.scss';

export const LottieLoader = () => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const isFetching = useSelector(state => state.mainReducer.isFetching);

    if(isFetching) {
        blockScroll();
    } else {
        allowScroll();
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData
    };

    return <div className={classNames(
        'lottie-loader',
        {active: isFetching}    
    )}>
        <Lottie options={defaultOptions} height={200} width={200} />
    </div>;
};