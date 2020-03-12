FROM node:alpine
WORKDIR /code
COPY . .
ARG GIST_ID
ARG GITHUB_ACCESS_TOKEN
RUN ["npm", "i"]
RUN ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
EXPOSE 3100