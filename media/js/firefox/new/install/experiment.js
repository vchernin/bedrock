/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Mozilla) {
    'use strict';

    var isChrome = !!window.chrome;

    if (isChrome) {
        var cooper = new Mozilla.TrafficCop({
            id: 'experiment_firefox_download_install',
            variations: {
                'v=a': 33, // control
                'v=b': 33, // install instructions
                'v=c': 33  // mobile app store buttons
            }
        });

        cooper.init();
    }

})(window.Mozilla);
