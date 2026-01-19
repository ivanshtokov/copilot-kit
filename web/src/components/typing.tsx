'use client';

import Typewriter from 'typewriter-effect';

export default function Typing() {
    return (
        <Typewriter
            options={{
                strings: ['40+ prompt files', '16 custom agents', 'Instructions', 'Open Source'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
            }}
        />
    )
}