import React from 'react'
import aStarImg from '../../assets/images/screenshots/astar.png'
import personalTrainingImg from '../../assets/images/screenshots/personaltraining.png'
import hwTrackerImg from '../../assets/images/screenshots/homeworktracker.png'
import bugTrackingImg from '../../assets/images/screenshots/nativebugtracker.png'
import mobilePlacesImg from '../../assets/images/screenshots/nativeplaces.png'
import bookStoreImg from '../../assets/images/screenshots/bookstore.png'

export default ({
    aStar: {
        modalName: 'aStar',
        title: 'A* Search Algorithm',
        subtitle: ['js', 'react'],
        info: 'JavaScript (React, ES6)',
        image: aStarImg,
        details: (
            <>A visual way to see how the <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank" rel="noopener noreferrer">A* search algorithm works</a> in pathfinding.
            <br /><br />Click to set a start and ending position, then you can draw unpassable nodes/walls. The algorithm will find the shortest path!</>
        ),
        viewUrl: 'https://wes337.github.io/astar-search-visualization/',
        srcUrl: 'https://github.com/wes337/astar-search-visualization',
        mobile: false,
    },

    personalTraining: {
        modalName: 'personalTraining',
        title: 'Personal Training',
        subtitle: ['js', 'react'],
        info: 'JavaScript (React, ES6)',
        image: personalTrainingImg,
        details: (
            <>A Bootsrapped React app of a Personal Training Company. I created this for my Front-End Development course at University. You can manage customers and their schedules for their trainings at the gym.
            <br /><br />I've deployed this app <a href="https://personaltrainingapp-9023e.firebaseapp.com/" target="_blank" rel="noopener noreferrer">here</a> using Google Firebase.
            <br /><br /><em>You can sign up, or login using these test credentials:</em>
            <pre>test@test.com/test123</pre>
            </>
        ),
        viewUrl: 'https://personaltrainingapp-9023e.firebaseapp.com/',
        srcUrl: 'https://github.com/wes337/FrontEndDevelopment-PersonalTraining',
        mobile: false,
    },

    bugTracking: {
        modalName: 'bugTracking',
        title: 'Mobile Bug Tracking App',
        subtitle: ['js', 'react'],
        info: 'JavaScript (React Native, ES6)',
        image: bugTrackingImg,
        details: (
            <>A project manager app for iOS &amp; Android. Create tasks for your projects, organize them using custom categories, and track their progress with project milestones.
            <br /><br />Built using <a href="https://www.expo.io" target="_blank" rel="noopener noreferrer">Expo</a> and styled with <a href="https://docs.nativebase.io/" target="_blank" rel="noopener noreferrer">native-base</a>.</>
        ),
        viewUrl: 'https://github.com/wes337/react-native-bugtracker',
        srcUrl: 'https://github.com/wes337/react-native-bugtracker',
        mobile: true,
    },

    mobilePlaces: {
        modalName: 'mobilePlaces',
        title: 'Mobile Places App',
        subtitle: ['js', 'react'],
        info: 'JavaScript (React Native, ES6)',
        image: mobilePlacesImg,
        details: (
            <>A React Native app used to track your favourite places. Built with <a href="https://www.expo.io" target="_blank" rel="noopener noreferrer">Expo</a>, <a href="https://github.com/react-native-community/react-native-maps" target="_blank" rel="noopener noreferrer">react-native-maps</a> and <a href="https://react-native-elements.github.io/react-native-elements/" target="_blank" rel="noopener noreferrer">react-native-elements</a>. Real-time database provided by Google FireBase.</>
        ),
        viewUrl: 'https://github.com/wes337/react-native-places',
        srcUrl: 'https://github.com/wes337/react-native-places',
        mobile: true,
    },

    hwTracker: {
        modalName: 'hwTracker',
        title: 'Homework Tracker',
        subtitle: ['java'],
        info: 'Java (Spring, H2)',
        image: hwTrackerImg,
        details: (
            <>A homework tracking application built with Java Spring. Can be used to keep track of assignments, projects, and other deadlines. <br /><br />A live version of this app has been deployed on Heroku, you can see it <a href="https://serverprog-homeworktracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>.</>
        ),
        viewUrl: 'https://serverprog-homeworktracker.herokuapp.com/',
        srcUrl: 'https://github.com/wes337/ServerProgramming-HomeworkTracker',
        mobile: false,
    },

    bookStore: {
        modalName: 'bookStore',
        title: 'Bookstore',
        subtitle: ['java'],
        info: 'Java (Spring, H2, Thymeleaf)',
        image: bookStoreImg,
        details: (
            <>A book store app created for my Server Programming course at university. Created using an MVC design and implementing basic CRUD functions.<br /><br />A live version of this app has been deployed on Heroku, you can see it <a href="https://serverprogramming-bookstore.herokuapp.com/login" target="_blank" rel="noopener noreferrer">here</a>.<br /><br /><em>You can signup, or login using the following test account:</em>
            <pre>
                username: user
                password: user
            </pre>
            </>
        ),
        viewUrl: 'https://serverprogramming-bookstore.herokuapp.com/booklist',
        srcUrl: 'https://github.com/wes337/ServerProgramming-BookStore',
        mobile: false,
    },
})
