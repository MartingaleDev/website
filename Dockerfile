FROM node:alpine
WORKDIR /code
COPY . .
ENV GIST_ID ''
ENV GITHUB_ACCESS_TOKEN ''
RUN ["npm", "i"]
RUN ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
EXPOSE 3100