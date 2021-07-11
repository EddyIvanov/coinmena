# Applying for frontend position

Eddy Ivanov (eddy_ivanov@hotmail.com)

### Total time spent

- Friday morning, until Sunday morning

### Difficulties

- decided to use the time that will work on the task to explore react-query and Material UI, with which I hadn't worked before. Most of the time on the task was spent with searching "how to customize Material UI styles" and "react-query with typescript issues"

### Things regarding the task which are not done

- Didn't find any data on the API regarding Sponsor. Maybe is a variable which only few Repositories and Develipers have, but tried to explore few times all the data, and didn't find anything. For this reason I have the button only on the one page, and it is on everywhere. As this button, should redirect us to new page, and there is no functionality, I just let the button for visual effect
- the mutations regarding Follow, Unfollow, Star and Unstar are not implemented. I believe that the Star is almost ready, but for some reason the updated state, don't fire re-rendering. If I was able to implement this one, the other 3 were just a matter of minutes to be done.
- automation tests
- the dropdowns doesn't look exactly as the mock-up. Spent a lot of time on this, and the result is the optimum that I could make for the given time.
- didn't find how I can use css variables for the Material UI theme. Would be nice if we can have single source of thruth for the different theme variables.

### Things which would like to do, if more time was available

- virtualized tables
- Pop up with user info, when we hover over the "Build by" avatars
- create separate Material UI wrapper compoents, so we can use custom style, for all the components (didn't like the use styles)

## How to run localy

1. install allow cors plugin to your browser, in order to access the APIs
   Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

2. In the project directory, run: `npm start`
