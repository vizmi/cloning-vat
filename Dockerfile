FROM node:alpine
ENV NODE_ENV=production
USER node
COPY . .
RUN ["npm", "install", "--production"]
CMD ["node","index.js"]
EXPOSE 80
