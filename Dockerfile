FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install && yarn start
CMD ["node", "src/index.js"]
ENV PORT=10000
EXPOSE 10000