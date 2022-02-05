# Simple Dashboard

Using React, npx create-react-app, CSS
    -Only Homepage
    -No CSS framework used
    -No router used
    -No context API
    -No Reducer for state management (Redux or useReducer hook)
    -Mock API using summary.json file
    -One Libraby is used, "Rechart", a charting library build on React components
        -url: https://recharts.org/en-US/

## Features

-Basic UI Layout, without any functionality.

-Among all the pages, only Home page is developed.
    -Home page may have some more graphs and charts like Barchat and Pie chart to make more interesting and complex layout.

-Sticky Badboard Topbar with notification, settings, and user avator
    - Notification can be pushed after any changes made to the dashboard and latest few notifications will be shown in the recent       updates component.
    - settings can be used to change dashboard themes, colors, and layouts
    -user avator shows the current logged in user, and user account details

-Sticky Sidebar component, holds the main pages. Each of the navigation menu takes to a different page.
    -Manage page has the functionalty to manipulate the data table and graphs (Edit, Delate, Report)
    -Graph page contains all the different kinds of graphs using the test data, visual representaion of diffient statistics
    -Any feedback by any user will reach to other user when they login to the site.
    -Report page for managing the reported issues and mark as resolved, unresolved or backlog
    -Analytics page shows analytics of reported issues, managing test data, and feedback
    -Logout Menu to log user out

### Responsive

Mobile, Tablet and Laptop/Desktop responsive

### How to run the project

In terminal, run the commands

1. npm install 
2. npm start

