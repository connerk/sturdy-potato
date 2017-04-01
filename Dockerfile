FROM node:6.10.1-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --only=production

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

LABEL name="sturdy-potato" \
	  version="0.0" \
	  description="Webform Asana Connector" \
	  maintainer="kevin.r.conner@gmail.com" 