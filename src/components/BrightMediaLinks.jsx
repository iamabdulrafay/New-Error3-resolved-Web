import React from 'react';

import facebook from '../assets/svgs/bright-media-svgs/facebook-bright.svg';
import twitter from '../assets/svgs/bright-media-svgs/twitter-bright.svg';
import linkedin from '../assets/svgs/bright-media-svgs/linkedin-bright.svg';
import google from '../assets/svgs/bright-media-svgs/google-plus-bright.svg';
import dribble from '../assets/svgs/bright-media-svgs/dribble-bright.svg';
import pinterest from '../assets/svgs/bright-media-svgs/pinterest-bright.svg';

const MediaLinks = ({ mediaNames }) => {
    const mediaLinks = mediaNames.map((mediaName) => ({
        linkHref: `https://www.${mediaName}.com/`,
        linkTarget: '_blank',
        link: eval(mediaName),
        linkAlt: mediaName,
    }));

    return mediaLinks.map((mediaLink, index) => (
        <a key={index} href={mediaLink.linkHref} target={mediaLink.linkTarget} className="rounded-full border border-white mx-1 py-[1.8vh] w-[3vw] flex flex-nowrap justify-center items-center text-gray-500">
            <img src={mediaLink.link} alt={mediaLink.linkAlt} />
        </a>
    ));
};

export default MediaLinks;