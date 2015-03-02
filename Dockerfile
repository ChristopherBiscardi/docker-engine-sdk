FROM iojs

WORKDIR /opt/sdk
ENV PATH /opt/sdk/node_modules/.bin:$PATH

COPY . /opt/sdk

RUN npm install 
