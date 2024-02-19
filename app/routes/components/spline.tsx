"use client";

import Spline from '@splinetool/react-spline';

const SplineAnimation = () => {
    return(
        <div className="hidden lg:flex overflow-hidden">
            <Spline  className="translate-x-10 translate-y-08" scene="https://prod.spline.design/QWF61cgPAWTDvZ27/scene.splinecode" />
        </div>
    )
}

export default SplineAnimation;