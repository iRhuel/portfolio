module.exports = [
    {
        name: 'SDJS App',
        description: [
            'A Meetup-like app tailored specifically for the San Diego Javascript community.',

            'It features new user registration and login, profile management, email-prompted password reset, email ' +
            'and SMS notification capability and opt-in/opt-out, ACL-hardened endpoints and user authentication, ' +
            'Meetup.com event search, rsvp, and check-in functionality, an SDJS merch shop, and a donation page ' +
            'fulfilled by Patreon.',

            'It\'s currently available in the Android store, with plans to bring it to the Apple store.'
        ],
        tech: [
            'React Native',
            'React Redux',
            'React Router',
            'Loopback',
            'Express',
            'MongoDB',
            'Jest/Appium'
        ],
        context: [
            'This app was actually a legacy product my group chose to inherit as a final project in the Origin ' +
            'Code Academy curriculum. We chose SDJS-app because it combined all of the skills we\'d learned ' +
            'throughout the curriculum with a new but familiar tech (React Native) on a new platform (mobile).',

            'We spent 3 weeks working on this project, spread across 3 one-week sprints. Our team (G-Rex :D ) ' +
            'consisted of 6 members with varying preferences and aptitudes, so we tried to delegate work to ' +
            'match those emphases. We were the third team to inherit this project, so one of our core focuses ' +
            'throughout our time with SDJS-App was not only on implementing new features, but on improving the ' +
            'maintainability of the project through things like unit and end-to-end test suites, standardizing ' +
            'eslint configurations, refactoring unintuitive code, and more.',
        ],
        lessons: [
            'While we made innumerable visual and styling changes to improve the end user experience, much of our ' +
            'most impactful changes (in my opinion) were under the hood. While this wasn\'t our team\'s first time ' +
            'jumping into someone else\'s codebase, the added challenge of learning our way around mobile app ' +
            'development on top of getting situated tested us both individually and as a team. I eventually adopted ' +
            'a leadership role overseeing work and git workflow processes in order to avoid headache. Despite ' +
            'some growing pains, I firmly believe that we\'re all better developers for this experience.',

            'One of my biggest takeaways from both this and my team\'s previous project is that 1) writing ' +
            'maintainable code is more important than writing less code, and 2) constant communication between team ' +
            'members (especially with as many as we had) is key to avoiding version control headaches as well as to ' +
            'producing much more code than if we\'d worked more individually.',

            'Lastly, working on this app has given me an appreciation for intuitive, cross-platform utilities, ' +
            'frameworks, and libraries, without which I can\'t even imagine how much more difficult it would be ' +
            'to develop for multiple platforms at once.'
        ],
        img: {
            src: 'sdjsapp.png',
            alt: 'SDJS App screen shot'
        }
    },
    {
        name: 'Origin Portal',
        description: [
            'A Hired.com-like web platform for connecting Origin grads with potential employers. It allows both ' +
            'students and employers to manage various profile features, and allows employers to search for employers ' +
            'to search a pool of alums by skillset and role.'
        ],
        tech: [
            'React',
            'React Redux',
            'React Router',
            'Bootstrap',
            'EJS',
            'Loopback',
            'MongoDB'
        ],
        context: [
            'This was my team\'s first project, and our first taste of both working collaboratively on a single ' +
            'project with other developers, and of jumping into an existing codebase. Unlike with SDJS-App, however, ' +
            'we were not the only team working on this project. At one point, there were as many as 18 developers ' +
            'spread across 4 teams all working on the same repo. It was also my team\'s first real taste of working ' +
            'with the scrum method of development.'
        ],
        lessons: [
            'It was with the Origin Portal that my team first learned the importance of good observance of git ' +
            'workflow processes... because we unfortunately suffered firsthand the results of the lack thereof, ' +
            'and how much extra work it creates.',

            'On top of this, this project was our first taste of working with other developers. We learned ' +
            'very quickly that while there are certain pitfalls to working with a team of developers as large as ' +
            'ours, there\'s also a lot of value in having access to multiple perspectives and skill sets, especially ' +
            'when approaching problems that each individual may or may not be confident in. We used the mod method ' +
            'of collaborative programming to work through especially difficult blocks, which proved time and again ' +
            'that it produces the best result, if not the fastest.'
        ],
        img: {
            src: 'portal.png',
            alt: 'Origin Portal screen shot'
        }
    },
    {
        name: 'BattleTech Weapon Editor',
        description: [
            'A modding tool for the video game BattleTech (HBS 2018). It displays data from .json files into a ' +
            'more intuitive, editable, and customizable table. It also features batch editing parameters of ' +
            'common files, and backup file creation and restoration.'
        ],
        tech: [
            'Java',
            'JavaFX',
            'Jackson FasterXML',
            'Gson'
        ],
        context: [
            'While working towards my BS in Software Engineering from ASU, I found that I was taking courses that ' +
            'didn\'t engage directly in writing code. Rather than let my skills rust, I wanted to write a small ' +
            'utility, and decided to do so for a video game I was enjoying at the time. I decided to write a small ' +
            'function to automate some data display so that I could make decisions while hand editing some game ' +
            'files. I quickly thought of other features I wanted the tool to do, and BWE is a result of that ' +
            'evolution. It\'s currently used by some mod authors in creating and publishing their own game mods.'
        ],
        lessons: [
            'This is the very first piece of software I wrote that other people actually used in a practical sense. ' +
            'While it\'s only got a few hundred unique downloads and it\'s fairly small, I am still quite proud of ' +
            'it. The positive feedback I got from the modding community as well as the sense that I was contributing ' +
            'to a community that I care about is what made the effort worth it, and makes me so proud of it.',

            'In a more technical sense, developing this app gave me a taste of designing a UI while driven by ' +
            'actual, practical concerns, with actual end user feedback to guide me. I also became much more ' +
            'familiar with .json manipulation in a strictly typed language like Java, and (ab)using factories'
        ],
        img: {
            src: 'bwe.png',
            alt: 'BWE screen shot'
        }
    },
    {
        name: 'SMUSHR',
        description: [
            'A .json parsing utility to aggregate data from multiple files into a single, readable result. It ' +
            'recursively searches for .json files, checks each key against a result, and adds discrete (not ' +
            'already added) data points to an array of the same key. If the value is an object, it will match ' +
            'objects with the same keys and preserve the nested object structure in the result .json. The result ' +
            'is a single .json object made up of all represented keys, with values equalling all represented values.'
        ],
        tech: [
            'React',
            'Node.js'
        ],
        context: [
            'I wrote this utility as an add-on for the above project, Battlefield Weapon Editor. In order to create ' +
            'an item generator form template, I needed the valid values of every key in every file so that I could ' +
            'prepopulate some of the fields in my form. The alternative was to leave everything open ended and ' +
            'trust that the user knew exactly what they were doing...',

            'I tried to generify its use as much as possible so that anyone with a similar need to mine would be ' +
            'able to use it in their situation. For now it only exists as a script and only aggregates data points ' +
            'as primitives in an array, but I want to redesign the tool to represent datum as an object with both ' +
            'the original value, and a record of all files that data point was represented in, so that the user ' +
            'can eventually see what data is relevant to what files, or what other data shares a common file.'
        ],
        lessons: [
            'This was a fun challenge that I actually enlisted many people in solving, including attendees of SDJS ' +
            'meetups, as well as programmer friends. In the end we all got stuck on the recursive step trying to ' +
            'preserve the nested structure, until I combined a few suggested approaches to design my own solution.',

            'Designing this tool forced me to think about data (specifically objects and arrays), and what ' +
            'constitutes a unique data point.'
        ],
        img: {
            src: '',
            alt: ''
        }
    }
];
