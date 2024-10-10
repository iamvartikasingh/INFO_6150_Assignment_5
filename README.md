# Group Project

## Overview

This project is a **Mental Wellness Website** designed to provide users with a range of mental health services, including therapy session bookings, wellness tips, mood tracking, and more. The web application consists of various sections such as user authentication (create account, login), a user dashboard, and pages for different services provided by the platform.

### Features
- **Create and Login to User Accounts**
- **Dashboard to track wellness progress**
- **Book therapy sessions and contact therapists**
- **Daily mental wellness tips**
- **Community engagement and support forums**
- **Mood tracking and progress reports**

## File Structure

### Files and Folder Structure

```bash
mental-wellness-app/
│
├── create.html
├── dashboard.html
├── dashstyle.css
├── home.html
├── index.html
├── script.js
├── services.html
├── styles.css
├── welcome.html
└── assets/
    ├── images/
    │   ├── appointment.jpg
    │   ├── community.jpg
    │   ├── motivation.jpg
    │   ├── therapist.jpg
    │   ├── yoga.jpg
    │   └── meditation.jpg
    └── fontawesome-free-6.6.0-web/
        ├── css/
        │   ├── fontawesome.css
        │   ├── brands.css
        │   └── solid.css
        └── webfonts/
            ├── fa-brands-400.woff2
            ├── fa-solid-900.woff2
            └── ...

```



### HTML Files

1. **create.html**
   - Page where users can create a new account.
   - Uses an interactive form with validation for fields such as First Name, Last Name, Age, Username, and Password.
   - Form submissions are handled by `script.js`, which stores credentials locally and redirects users to the login page upon success.

2. **dashboard.html**
   - User dashboard showcasing mental wellness journey and progress.
   - Features components such as a progress bar, cards for booking therapy sessions, achievements, and goals tracking.
   - Users can also view recent activities, get daily wellness tips, and contact their therapist directly through the dashboard.

3. **index.html**
   - Login page where users can authenticate with their username and password.
   - Credentials are validated against local storage, and users are redirected to the `welcome.html` page if the login is successful.

4. **home.html**
   - The landing page for the Mental Wellness application.
   - Includes a carousel displaying images related to mental health, and a description of the services provided by the platform.
   - Features an accordion section with descriptions of services like therapy sessions, 24/7 support, yoga classes, and community forums.

5. **welcome.html**
   - A simple welcome page that greets users after a successful login.
   - Includes a "Logout" button that redirects users back to the login page.

6. **services.html**
   - This page lists the mental health services provided by the platform, such as booking doctor appointments, joining support groups, and accessing motivational videos.
   - Users can view detailed descriptions and book services directly from the page.

### JavaScript Files

1. **script.js**
   - Handles the logic for storing and validating user credentials using local storage.
   - Includes two main functions:
     - `storeCredential`: Saves the username and password in the browser's local storage.
     - `validateUser`: Verifies the login credentials by comparing input with stored values.

### CSS Files

1. **styles.css**
   - Provides the basic styles for the login and account creation pages, including form layout, buttons, and background colors.
   - The overall theme is consistent with the application’s light, professional, and welcoming tone.

2. **dashstyle.css**
   - Contains styles specific to the dashboard and service-related pages, such as card layouts, progress bars, badges, and a timeline of recent activities.
   - The theme uses cool tones with shades of blue and green to promote calmness and relaxation.

### Assets

1. **FontAwesome (fontawesome-free-6.6.0-web)**:
   - Icons used for the navigation bar, dashboard, and other sections.
   - Includes CSS and webfonts required for icons.

2. **Images (assets/images)**:
   - Contains images used in services (e.g., appointment.jpg, yoga.jpg, therapist.jpg) and other sections like the dashboard and carousel.

## Bootstrap Functionality

This project uses **Bootstrap**, a popular open-source CSS framework that helps build responsive and mobile-first web applications. Bootstrap provides a variety of pre-designed components and utilities to streamline the development process. Some of the Bootstrap functionalities used in this project include:

- **Responsive Grid System**: To create layouts that adapt to various screen sizes.
- **Navbar**: Used to create the navigation bar with dropdowns and a search function.
- **Cards**: For content organization in the dashboard and services sections.
- **Progress Bars**: To visually represent user progress in the dashboard.
- **Form Controls**: Used in the account creation and login pages to handle user inputs.
- **Carousels**: For displaying multiple slides of content, such as mental wellness tips and testimonials.
- **Modals**: Popup windows used for user actions, such as joining the platform or contacting support.

Bootstrap helps create a clean, professional UI with minimal custom CSS, ensuring consistency across different devices and browsers.

### External Libraries Used
- **Bootstrap**: For responsive design, form controls, navigation bars, and components like modals, accordions, and carousels.
- **FontAwesome**: For icons used in the navigation bar, dashboard, and other sections of the application.

## How to Use the Application

1. **Create an Account**: 
   - Navigate to the `create.html` page.
   - Fill out the required fields and submit the form to create an account.

2. **Login**:
   - After account creation, navigate to the `index.html` page to log in using your credentials.
   - If the username and password match stored values, you will be redirected to the `welcome.html` page.

3. **Access Dashboard**:
   - After logging in, the dashboard (`dashboard.html`) is your central hub where you can:
     - Track your mental health progress.
     - Book therapy sessions.
     - Set and track goals.
     - View recent activities.
     - Contact your therapist.

4. **Explore Services**:
   - The `services.html` page allows you to explore and utilize the mental health services offered by the platform, including therapy sessions, yoga classes, and more.

## Installation

To run this project locally:

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to start interacting with the app.
3. No backend or server setup is required as user data is stored locally via the browser's local storage.

## Future Enhancements
- Add backend support for secure user authentication and session management.
- Implement a database to store user data, session logs, and progress.
- Introduce more services and personalized wellness recommendations based on user activity.

---

This application is designed to provide a holistic approach to mental wellness, focusing on user-friendly interactions and ease of access to mental health resources.

## Developed By
* **Himank Arora** - [himankaroraneu](https://github.com/himankaroraneu)
* **Vartika Singh** - [xyz](https://github.com/)
* **Manisha Sahu** - [xyz](https://github.com/)
* **Mansi** - [xyz](https://github.com/)
* **Aditya** - [xyz](https://github.com/)
