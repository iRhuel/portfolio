import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <h2>Hey there, I'm <span className='name'>Phil Truong</span>,</h2>
                <p>
                    I'm a(n aspiring) software engineer who values dedication to quality,
                    continual self improvement, humility, and above all else, giving back to the world.
                </p>
                <h3>About Me</h3>
                <p>
                    I've been enamored with electronics since I was a kid, whether it was soldering
                    circuits together to create timed LEDs, or building my custom tower at home, piece by piece.
                    I believe that you do yourself a disservice if you spend time working towards anything, and
                    not investing yourself fully in it. I adopt a methodical, thorough approach to problem solving
                    both in designing software and in most other areas of my life. I enjoy being challenged, and
                    view stress as a sign of personal growth.
                </p>
                <p>
                    After growing up in San Diego, I left for college and didn't come back for 10 years. Despite
                    enjoying my time in other locales and growing immensely as an individual, I've always been
                    homesick in my heart. While the majority of my professional life has been spent in sales, I

                </p>
            </div>
        );
    }
}