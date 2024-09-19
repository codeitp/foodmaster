FROM node:20

# Name of the working directory
WORKDIR /foodmasters

# copy package json to folder
COPY package.json ./

# Copy full content to folder
COPY . /foodmasters

# install necessary dependencies
RUN npm install

# Expose/Run on port
EXPOSE 3000

# Run server
CMD npm run dev