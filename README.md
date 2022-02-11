# chatty-mobile-app
This repo contains simple chat app built with **Ract Native** and **Expo** framework. \
App contains chats list and chat screen. It consumes **GraphQL** API using **Apollo Client**. \
Requests are authorized with user token set as an environmental variable.

## Local development setup
1. Clone the repo
2. Install expo-cli if needed `npm install -g expo-cli`
3. Install dependencies with `expo install` 
4. Run project `expo start`
5. To communicate with the API create `.env` file in project directory and add TOKEN variable. 

## Mobile preview
Mobile preview is available with Expo Go app after scanning QR code from this [link](https://expo.dev/@doforever/chatty-mobile-app?serviceType=classic&distribution=expo-go).
