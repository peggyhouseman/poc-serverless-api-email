# API for Serverless

- Uses Serverless framework
- Create REST API written in node.js
- Connect to AWS
- Deploy API Gateway with API keys
- Deploy lambda connected to API Gateway
- https://serverless.com/blog/anatomy-of-a-serverless-app/#setup

## Serverless framework
- Provides a nice cloud formation abstraction
- Has built in templates to get started easily
    - ``` serverless create --template aws-nodejs --path email-service ```
- Infrastructure as code for serverless services
- Contained in serverless.yml file
- To run locally
    - ``` serverless invoke local --function send ```
- To deploy
    - ``` sls deploy ```
- State of cloud formation is saved in s3.  Serverless framework auto creates s3 bucket and stored cloud formation state files.
- Deletion of resources in serverless.yml file does remove it from AWS
- Able to specify API-gateway key by adding "apiKeys" element and providing name of key to show in gui
- Endpoints that required API-gateway keys must be marked "private: true"
- If Api-Keys are auto generated by serverless, the resulting keys are outputted on the console
- To call Api-Gateway endpoints secured by keys, the key must be provided as the value in the "x-api-key" header

## Setup
- Have AWS account
- Create IAM user for deploying app
- Install node.js
- Ensure using latest npm by checking PATH variables (may need to move npm install above nodejs reference since nodejs also has npm version)
    - ``` npm -v ```
- use npm to install serverless framework
    - ``` npm install -g serverless ```
- Install python: https://realpython.com/installing-python/
- Ensure python in PATH variables
- Install pip: https://pip.pypa.io/en/stable/installing/ or https://www.makeuseof.com/tag/install-pip-for-python/
    - saved get-py script locally: https://bootstrap.pypa.io/get-pip.py
    - ``` python get-pip.py ``` 
- Ensure pip in PATH variables
- Use pip to install aws cli
    - ``` pip install awscli ```
- Setup aws cli with IAM credentials

## VSCode Debug
- Ensure serverless is installed via npm
    - ```npm install serverless```
    - adds a node_modules folder
    - will reference node_modules folder in launch.json
- Click Debug side menu (crossed out bug icon)
- Click the gear icon on the top menu to create a new launch.json file
- Modify the launch.json program to point to node_modules serverless file
    - ```"program": "${workspaceFolder}\\node_modules\\serverless\\bin\\serverless"```
- Add args to the launch.json file and pass the serverless local execution command
    - ```
        "args": [
                "invoke",
                "local",
                "-f",
                "send",
                "--data",
                "{}"
            ]
        ```
- Add breakpoint and start debugging

