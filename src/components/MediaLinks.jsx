import React from 'react';
import facebook from '../assets/svgs/mediaSvgs/facebook.svg';
import twitter from '../assets/svgs/mediaSvgs/twitter.svg';
import messanger from '../assets/svgs/mediaSvgs/messanger.svg';

const MediaLinks = ({ mediaNames }) => {
    const mediaLinks = mediaNames.map((mediaName) => ({
        linkHref: `https://www.${mediaName}.com/`,
        linkTarget: '_blank',
        link: eval(mediaName),
        linkAlt: mediaName,
    }));

    return mediaLinks.map((mediaLink, index) => (
        <a key={index} href={mediaLink.linkHref} target={mediaLink.linkTarget} className="ml-2 text-gray-500">
            <img src={mediaLink.link} alt={mediaLink.linkAlt} width={16} />
        </a>
    ));
};

export default MediaLinks;