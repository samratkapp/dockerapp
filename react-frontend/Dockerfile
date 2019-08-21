# Create image based on the official Node 6 image from the dockerhub

FROM node

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/react-app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/react-app

# Copy dependency definitions
COPY package.json /usr/src/react-app

# Install dependecies


# RUN npm install pm2 -g
  
# Get all the code needed to run the app
COPY . /usr/src/react-app

# RUN npm install 

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
# CMD ["npm", "run","dev"]

CMD ["/bin/bash", "-c", "npm install && npm start;"]