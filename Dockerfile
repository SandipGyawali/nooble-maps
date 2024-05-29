# node apline environment
FROM node:20-alpine

# working directory of my application
WORKDIR /app 

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]