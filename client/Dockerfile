# set the base image to create the image for react app
FROM node:20-alpine

# create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# switch to root to adjust ownership
USER root
RUN chown -R app:app .

# switch back to app user
USER app

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173
EXPOSE 5173

# Tell Vite what backend URL to use inside Docker
ENV VITE_API_URL=http://olehkyryliuk:8080

# run dev server, binding to all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
