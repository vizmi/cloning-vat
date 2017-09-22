FROM node:alpine
ENV NODE_ENV=production
USER node
WORKDIR /app
COPY . /app
RUN ["npm", "install", "--production"]
CMD ["node","index.js"]
EXPOSE 80
