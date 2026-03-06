
# 📻 Saco Cheio TV Mobile App

<div align="center">

<img width="100px" src="assets/icon.png"/>

<br/>
<br/>

[![GitHub stars](https://img.shields.io/github/stars/Vitor-Carmo/app-sacocheio-tv?style=for-the-badge)](https://github.com/Vitor-Carmo/app-sacocheio-tv/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Vitor-Carmo/app-sacocheio-tv?style=for-the-badge)](https://github.com/Vitor-Carmo/app-sacocheio-tv/network)
[![GitHub issues](https://img.shields.io/github/issues/Vitor-Carmo/app-sacocheio-tv?style=for-the-badge)](https://github.com/Vitor-Carmo/app-sacocheio-tv/issues)
[![GitHub license](https://img.shields.io/badge/license-UNLICENSED-red.svg?style=for-the-badge)](https://github.com/Vitor-Carmo/app-sacocheio-tv/blob/main/package.json)

**The unofficial mobile companion for Saco Cheio TV's podcast platform, built with React Native and Expo.**

<!-- TODO: Add live demo link if available (e.g., Expo Go QR code link or app store links) -->

</div>

## 💡 About the Project

This is an **unofficial mobile app** for the [Saco Cheio TV](https://www.sacocheio.tv) podcast platform.

Since the platform doesn't provide an official mobile application and only distributes episodes through **RSS feeds**, I decided to build a dedicated mobile app that allows fans to listen to the podcast while keeping the visual identity of the platform.

The entire UI of this application was designed by me using **Figma**, which was quite a challenge since I'm not a designer.

You can see the original UI design here:  
https://www.figma.com/file/7LuyM5VZsCj6kYRgQiNyaD/sacocheio-tv-app

This project was mainly created as an excuse to **learn new technologies and step out of my comfort zone**.

---

## 📱 Some Screens

<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/56807155/201567534-85e28d56-c3a7-4b5a-93e5-0808be52820a.png" width=270></td>
<td><img src="https://user-images.githubusercontent.com/56807155/201567567-cc7e65ff-e156-41e7-bd2d-ac3b39daeda8.png" width=270></td>
<td><img src="https://user-images.githubusercontent.com/56807155/201567674-35ac830b-7f06-48c2-9c61-d95a868164f8.png" width=270></td>
</tr>
<tr>
<td><img src="https://user-images.githubusercontent.com/56807155/201567728-44620af6-e8a0-40e2-8876-336d3deeff20.png" width=270></td>
<td><img src="https://user-images.githubusercontent.com/56807155/201567878-f2e10ada-f5ee-4ee4-8374-d3c48a2982b2.png" width=270></td>
<td><img src="https://user-images.githubusercontent.com/56807155/201567616-4cca1369-5c2c-4980-a294-8e792c2ffd33.png" width=270></td>
</tr>
</table>

---

## 📖 Overview

This repository hosts the source code for an unofficial mobile application designed to provide a seamless listening experience for the Saco Cheio TV podcast platform. Developed with React Native and Expo, the app offers a native-like interface for browsing, playing, and managing podcast episodes, allowing fans to enjoy their favorite content on the go.

## ✨ Features

-   🎧 **Podcast Playback**: Listen to episodes with a dedicated audio player, complete with controls for play/pause, seek, and track progression.
-   📚 **Episode Browsing**: Navigate through a comprehensive list of Saco Cheio TV podcast episodes.
-   📱 **Intuitive Navigation**: Smooth user experience powered by React Navigation.
-   🎨 **Custom Theming**: Supports different visual themes for personalized aesthetics (e.g., dark/light mode).
-   📡 **API Integration**: Fetches podcast data from the Saco Cheio TV platform's API.
-   🔄 **Background Audio**: Potentially supports background audio playback for uninterrupted listening.
-   🛡️ **Type-Safe Development**: Built with TypeScript for enhanced code quality and maintainability.

## 🛠️ Tech Stack

**Mobile Frontend:**
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Navigation](https://img.shields.io/badge/React_Navigation-1B1F23?style=for-the-badge&logo=react-navigation&logoColor=white)](https://reactnavigation.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Native Paper](https://img.shields.io/badge/React_Native_Paper-blue?style=for-the-badge&logo=react-native-paper&logoColor=white)](https://reactnativepaper.com/)

**DevOps & Tools:**
[![Expo Application Services](https://img.shields.io/badge/Expo_EAS-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/eas)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

## 🚀 Quick Start

Follow these steps to get the development environment set up and run the app locally.

### Prerequisites

-   **Node.js**: [LTS Version (e.g., 18.x or 20.x)](https://nodejs.org/en/download/)
-   **Yarn**: [Package manager](https://classic.yarnpkg.com/lang/en/docs/install/)
-   **Expo CLI**: Install globally (`npm install -g expo-cli` or `yarn global add expo-cli`)
-   **A mobile device or emulator/simulator**: To run the app.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Vitor-Carmo/app-sacocheio-tv.git
    cd app-sacocheio-tv
    ```

2.  **Install dependencies**
    ```bash
    yarn install
    ```

### Environment setup

This project primarily uses `app.json` for configuration and doesn't explicitly rely on `.env` files for basic setup. Ensure `app.json` contains appropriate settings for your development environment if you intend to customize app metadata.

### Start development server

1.  **Start the Expo development server**
    ```bash
    yarn start
    ```
2.  **Open your app**
    *   **On a physical device**: Scan the QR code displayed in your terminal or browser with the [Expo Go app](https://expo.dev/client).
    *   **On iOS Simulator**: Press `i` in the terminal.
    *   **On Android Emulator**: Press `a` in the terminal.
    *   **In Web Browser**: Press `w` in the terminal (for web preview, though primarily a mobile app).

## 📁 Project Structure

```
app-sacocheio-tv/
├── assets/             # Static assets (images, fonts, app icon, splash screen)
├── src/                # Main application source code
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers (e.g., AudioPlayerContext)
│   ├── hooks/          # Custom React hooks
│   ├── routes/         # React Navigation setup and navigators
│   ├── screens/        # Application screens/pages (e.g., Home, Player, Episodes)
│   ├── services/       # API integration and data fetching logic (e.g., api.ts)
│   ├── themes/         # Theming configuration and styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions and helpers
├── App.tsx             # Main application entry point
├── app.json            # Expo application configuration
├── babel.config.js     # Babel configuration for JavaScript/TypeScript transpilation
├── eas.json            # Expo Application Services (EAS) configuration for builds
├── metro.config.js     # Metro Bundler configuration for React Native
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Yarn dependency lock file
```

## ⚙️ Configuration

### Expo Application Configuration (`app.json`)
The `app.json` file contains crucial configuration for your Expo project, including:
-   `name`: Display name of the app.
-   `slug`: Unique identifier for the app in Expo.
-   `version`: Current version of the app.
-   `orientation`: Screen orientation (e.g., portrait).
-   `icon`: Path to the app icon.
-   `splash`: Configuration for the app's splash screen.
-   `ios`, `android`: Platform-specific configurations.

### EAS Build Configuration (`eas.json`)
The `eas.json` file configures builds and submissions using [Expo Application Services (EAS)](https://expo.dev/eas). It defines different build profiles (e.g., `development`, `preview`, `production`) and their respective settings for:
-   Platform (iOS, Android).
-   Build type (development, production).
-   Environment variables.
-   Credentials.

## 🔧 Development

### Available Scripts
The `package.json` defines several convenient scripts for development:

| Command           | Description                                                 |
|-------------------|-------------------------------------------------------------|
| `yarn start`      | Starts the Expo development server and opens the app.       |
| `yarn android`    | Opens the app on a connected Android device/emulator.       |
| `yarn ios`        | Opens the app on a connected iOS device/simulator.          |
| `yarn web`        | Runs the app in a web browser (experimental for mobile apps). |
| `yarn eject`      | Ejects the Expo project to a bare React Native workflow.    |
| `yarn test`       | Runs the test suite using Jest.                             |

### Development Workflow
1.  Ensure prerequisites are installed.
2.  Start the development server using `yarn start`.
3.  Develop components and screens within the `src/` directory.
4.  Utilize Expo Go on your mobile device or an emulator/simulator for real-time preview and debugging.

## 🧪 Testing

The project is configured for unit and component testing using [Jest](https://jestjs.io/) and `react-test-renderer`.

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run a specific test file
yarn test -- YourFileName.test.tsx
```

## 🚀 Deployment

This project uses [Expo Application Services (EAS)](https://expo.dev/eas) for building and deploying mobile applications to app stores.

### Production Builds
To create a production build for iOS or Android, you would typically use the `eas build` command, configured via `eas.json`.

```bash
# Install EAS CLI globally if not already installed
npm install -g eas-cli

# Login to your Expo account
eas login

# Build for Android
eas build --platform android --profile production

# Build for iOS
eas build --platform ios --profile production
```
Refer to the [EAS documentation](https://docs.expo.dev/build/introduction/) for detailed setup and deployment guides.

## 🤝 Contributing

This project is currently archived and contributions are not actively being accepted. However, you are welcome to fork the repository, experiment with the code, and use it as a reference for your own projects.

Should the project become active again, a `CONTRIBUTING.md` file will be added with specific guidelines.

## 📄 License

This project is currently **UNLICENSED**. For details, please refer to the `license` field in the `package.json` file.

## 🙏 Acknowledgments

-   **React Native** & **Expo**: For providing a powerful framework and platform for mobile development.
-   **Saco Cheio TV**: For their podcast content that inspired this application.
-   All dependencies listed in `package.json` that make this project possible.

## 📞 Support & Contact

-   🐛 **Issues**: Report bugs or suggest features via [GitHub Issues](https://github.com/Vitor-Carmo/app-sacocheio-tv/issues).
-   👤 **Author**: [Vitor Carmo](https://github.com/Vitor-Carmo)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Vitor Carmo](https://github.com/Vitor-Carmo)

</div>
