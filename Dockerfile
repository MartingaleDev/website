FROM node:alpine
WORKDIR /code
COPY . .
RUN ["npm", "i"]
RUN ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
EXPOSE 3100