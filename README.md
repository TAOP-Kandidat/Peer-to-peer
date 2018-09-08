# Peer-to-peer
A Raspberry pi with a humidity sensor connected.
The sensor is connected as shown in Niels Bouvins slides.

## Setup on Raspberry
After you cloned the project into the desired directory.
Run this command in the terminal.  
`$ docker build -t milestone .`  
After this command has been run, a Docker image has been created.  

## Run the image
To run the docker image run the following command.  
`$ docker run --rm -p 8585:8585 --privileged milestone`  
In your terminal, you can see which localhost port the raspberry is running on.
Just for clearifying the port is binded to localhost:8585  
Here the newest Data is displayed in 2 urls.  
1. localhost:8585/temperature
2. localhost:8585/humidity
