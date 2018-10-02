import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div>
                    <div>
                        <h2>Hey there, I'm <span className='name'>Phil Truong</span>,</h2>
                        <p>
                            I'm a software engineer who values dedication, quality,
                            continual self improvement, humility, and above all else, giving back to the world.
                        </p>
                    </div>
                    <div className='img-container'><img src='portrait.jpg' alt='A portrait of Phil'/></div>
                </div>
                <p>
                    I enjoy learning new things, and making new things. The more intricate and useful those systems
                    are, the better - which is why I've found a passion for programming and software engineering.
                    To me, coding is a way to translate understanding of complex systems into real, immediate value
                    and contribute that back to the world.
                </p>
                <p>
                    I adopt a methodical, thorough approach to problem solving both in designing software and in most
                    other areas of my life. I enjoy being challenged, and view stress as a sign of personal growth.
                    If I'm not building something neat or learning how to build something neat, I'm usually playing
                    with my cats, hiking, cooking new foods, eating said foods, or trying new breweries.
                </p>
                <p>Also my favorite color is <span className='name'>purple</span> :)</p>
            </div>
        );
    }
}
