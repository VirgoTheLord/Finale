
# Portfolio Website

A modern and responsive portfolio website built using **Next.js** and **Framer Motion**. This project showcases my work as a **Web Developer** and **UI/UX Designer**, highlighting skills, projects, and achievements with smooth animations and a clean user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Animations](#animations)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop).
- **Smooth Animations**: Fluid transitions and animations using Framer Motion.
- **Projects Section**: Showcases work with project details and images.
- **About Section**: Brief introduction and skills section.
- **Contact Form**: Allows users to get in touch through a contact form.
- **SEO Friendly**: Optimized for search engines with meta tags and descriptions.

## Technologies Used

- **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered and statically generated websites.
- **[Framer Motion](https://www.framer.com/motion/)**: A popular library for animations and motion components in React.
- **[Styled Components](https://styled-components.com/)**: Used for styling components with tagged template literals.
- **Email.js**: For handling contact form submissions.
- **Vercel**: Deployment platform for static websites.

## Installation and Setup

To get started with the project, follow the instructions below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VirgoTheLord/Finale.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Final
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

After installation, you can modify the content in the following sections:

- **`/components`**: Contains reusable components for the website.
- **`/pages`**: Pages for the website like Home, About, Projects, and Contact.
- **`/public`**: Stores static assets such as images and icons.
- **`/styles`**: Global styles and themes.

### Customization

- To add your projects, edit the `projects.json` file located in the `/data` directory.
- Modify the global styles and color scheme in the `/styles` folder.
- Replace the images in the `/public` folder with your own to match your branding.

## Project Structure

```plaintext
├── components
│   ├── Header.js         # Navigation bar and header
│   ├── Footer.js         # Footer component
│   ├── ProjectCard.js    # Card component for displaying projects
│   └── ContactForm.js    # Form for submitting inquiries
├── pages
│   ├── index.js          # Home page
│   ├── about.js          # About page
│   ├── projects.js       # Projects page
│   └── contact.js        # Contact page
├── public
│   ├── images            # Image assets for projects and sections
│   └── favicon.ico       # Favicon for the website
├── styles
│   ├── globals.css       # Global styles for the website
│   └── theme.js          # Color and theme settings
├── package.json          # Project metadata and dependencies
└── README.md             # Readme file
```

## Animations

This portfolio makes extensive use of **Framer Motion** to create smooth transitions and interactive animations, including:

- **Page Transitions**: Fluid transitions between different pages for a seamless user experience.
- **Hover Animations**: Subtle animations when hovering over projects or buttons.
- **Entrance Animations**: Components and text smoothly appear when scrolling.

## Contributing

Contributions are welcome! If you want to contribute to this project, feel free to fork the repository and create a pull request.

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

