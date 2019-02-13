import React, { Component, Fragment } from 'react';

export default class Badge extends Component {

    render() {
        return (
            
            <div className="badges">
                <div>
                    <iframe src="https://api.badgr.io/public/assertions/1nhvHBZNRFCnp6UjB7wD_g?embedVersion=1" title="Badge: HTML 5"></iframe>
                    <iframe src="https://api.badgr.io/public/assertions/4F3y9yS1RHy3gAn59sgrog?embedVersion=1" title="Badge: CSS3 - level 2"></iframe>
                </div>
                <div>
                    <iframe src="https://api.badgr.io/public/assertions/E-VU94QrQ3GWaqnDg1q2Og?embedVersion=1" title="Badge: Responsiveness skills"></iframe>
                    <iframe src="https://api.badgr.io/public/assertions/DdT1JSu5S8-3hSNh2Z4-1g?embedVersion=1" title="Badge: CSS framework - level 2"></iframe>
                </div>
                <div>
                <iframe src="https://api.badgr.io/public/assertions/LrHvBOAWQY2hZ96zFo-2jA?embedVersion=1" title="Badge: Git - level 1"></iframe>
                <iframe src="https://api.badgr.io/public/assertions/MC-tG3ORSj-O_eW6hAsiTQ?embedVersion=1" title="Badge: Terminal user"></iframe>
                </div>
            </div>
            
        );
    }
}
