# Dialogflow CX Webhook sample
Hi everyone, this a starter code for a sample webhook that can generate response for **Dialogflow CX**, it also manages a **targetFlo** and/or **tagetPage** as well.

## Youtube
You can find a video explaining the usage of this repository [here](). 

## Files
This repository contains the following file structure.

```
├── controllers
│   ├── export_controller.js
│   ├── sample_controller.js
│   └── util.js
├── package.json
├── README.md
├── routes
│   ├── dialogflow_route.js
│   └── home_route.js
└── src
    └── index.js
```

`index.js` is the entry point, which calls the `routes`, from here we call the individual `controller` for that request.

## How to run it
You first need to install the required packages to run the code, you can install the packages using

> ```npm install --save```

then run the `index.js` file with either

> ```node src/index.js```

or

> ```npm start```

## Expose localhost
When you run this application locally, it will not provide you a public URL to use with **Dialogflow CX** webhook section, you need to expose your local host to internet, no worries, we can acheive this by using **NGROK**.

Install **NGROK** from [here](https://ngrok.com/download).

Then run

> ```ngrok http 5000```

Here, make sure the port `5000` is the same used in the `index.js` file to avoide any errors.

## Usefull links
* [Node](https://nodejs.org/en/download/)
* [VS Code](https://code.visualstudio.com/download)
* [Dialogflow CX Request/Response](https://cloud.google.com/dialogflow/cx/docs/concept/webhook)
* [NGROK](https://ngrok.com/download)


# About me

I am `Raj Kapadia`, I am passionate about `AI/ML/DL` and their use in different domains, I also love to build `chatbots` using `Google Dialogflow ES/CX`, I have backend development experience with Python[Flask], and NodeJS[Express] For any work, you can reach out to me at...

* [LinkedIn](https://www.linkedin.com/in/rajkkapadia/)
* [Fiverr](https://www.fiverr.com/rajkkapadia​)
* [Upwork](https://www.upwork.com/freelancers/~0176aeacfcff7f1fc2)
* [Youtube](https://www.youtube.com/channel/UCOT01XvBSj12xQsANtTeAcQ)