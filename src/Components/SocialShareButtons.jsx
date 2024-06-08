'use client'
import { useEffect } from 'react';

const SocialShareButtons = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) return;
    const fbScript = document.createElement('script');
    fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = 'anonymous';
    fbScript.onload = () => {
      window.FB.init({
        appId: '986396536472858', // Replace with your Facebook app ID
        xfbml: true,
        version: 'v12.0',
      });
    };
    document.body.appendChild(fbScript);

    // Load Twitter SDK
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.async = true;
    twitterScript.charset = 'utf-8';
    document.body.appendChild(twitterScript);

    // Load LinkedIn SDK
    const linkedInScript = document.createElement('script');
    linkedInScript.src = 'https://platform.linkedin.com/in.js';
    linkedInScript.type = 'text/javascript';
    linkedInScript.innerHTML = 'lang: en_US';
    document.body.appendChild(linkedInScript);
  }, []);

  const shareOnFacebook = () => {
    FB.ui({
      method: 'share',
      href: window.location.href,
    }, function(response){});
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this amazing bookstore!");
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    window.open(linkedInUrl, '_blank');
  };

  return (
    <div className='flex' id="share-buttons">
                <a href='https://facebook.com' className="text-gray-400" target='_blank' onClick={shareOnFacebook}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href='https://x.com' className="ml-3 text-gray-400" target='_blank' onClick={shareOnTwitter}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href='https://Linkedin.com' className="ml-3 text-gray-400" target='_blank' onClick={shareOnLinkedIn}>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
    </div>
  );
};

export default SocialShareButtons;
