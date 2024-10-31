// pages/HomePage.tsx
'use client';
import { useState } from 'react';
import { PoseVector } from './types';
import dynamic from 'next/dynamic';

const OpenPoseEditor = dynamic(
    () => import('./OpenPoseEditor'),
    { ssr: false } // This will load the component only on client side
);

const HomePage: React.FC = () => {
    const defaultPose: PoseVector = [
        [241, 77], [241, 120], [191, 118], [177, 183], [163, 252],
        [298, 118], [317, 182], [332, 245], [225, 241], [213, 359],
        [215, 454], [270, 240], [282, 360], [286, 456], [232, 59],
        [253, 60], [225, 70], [260, 72]
    ];

    const [poseVector, setPoseVector] = useState<PoseVector>(defaultPose);
    const onPoseChange = (newPoseVector: PoseVector) => {
        setPoseVector(newPoseVector);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: '1' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '5px' }}>
                        <OpenPoseEditor poseVector={poseVector} onPoseChange={onPoseChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
