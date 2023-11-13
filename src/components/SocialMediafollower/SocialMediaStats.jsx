import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';

const SocialMediaStats = () => {
  const [youtubeSubscribers, setYoutubeSubscribers] = useState(0);
  const [instagramFollowers, setInstagramFollowers] = useState(0);
  const [linkedinFollowers, setLinkedinFollowers] = useState(0);

  useEffect(() => {
    // Fetch YouTube data
    axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'statistics',
        id: 'YOUR_YOUTUBE_CHANNEL_ID',
        key: 'YOUR_YOUTUBE_API_KEY',
      },
    })
    .then(response => {
      setYoutubeSubscribers(response.data.items[0]?.statistics.subscriberCount || 0);
    })
    .catch(error => console.error('Error fetching YouTube data:', error));

    // Fetch Instagram data
    axios.get('https://graph.instagram.com/v12.0/YOUR_INSTAGRAM_USER_ID', {
      params: {
        fields: 'followers_count',
        access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN',
      },
    })
    .then(response => {
      setInstagramFollowers(response.data.followers_count || 0);
    })
    .catch(error => console.error('Error fetching Instagram data:', error));

    // Fetch LinkedIn data
    axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: 'Bearer YOUR_LINKEDIN_ACCESS_TOKEN',
      },
    })
    .then(response => {
      setLinkedinFollowers(response.data.followers || 0);
    })
    .catch(error => console.error('Error fetching LinkedIn data:', error));
  }, []);

  return (
    <div className="social-media-stats-container">
      <div className="social-media-stat">
        <img src="youtube-logo.png" alt="YouTube Logo" />
        <p>{youtubeSubscribers} Subscribers</p>
        <a href="https://www.youtube.com/YOUR_CHANNEL_LINK">Go to YouTube</a>
      </div>
      <div className="social-media-stat">
        <img src="instagram-logo.png" alt="Instagram Logo" />
        <p>{instagramFollowers} Followers</p>
        <a href="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE">Go to Instagram</a>
      </div>
      <div className="social-media-stat">
        <img src="linkedin-logo.png" alt="LinkedIn Logo" />
        <p>{linkedinFollowers} Followers</p>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE">Go to LinkedIn</a>
      </div>

      {/* Add motion background using react-particles-js */}
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default SocialMediaStats;
