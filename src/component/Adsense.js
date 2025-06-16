
'use client';

import { useEffect } from 'react';

export default function Adsense() {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense Error:', e);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display : 'block'}}
            data-ad-client="ca-pub-6716098438139577"
            data-ad-slot="3479453654"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
}
