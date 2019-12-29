# THE WHOLE PROCESS BELOW IS TO BUILD AN IMAGE WHICH CAN BE RUN AS CONTAINER WHEN REQUIRED
# Use an existing docker image as a base
# FROM is an instruction to Docker Server; it specifies the base image (alpine) to be used
FROM alpine

# Download and install dependency
# execute some steps
RUN apk add --update redis
RUN apk add --update gcc
# Tell the image what to do when it starts as a container
# command to cmd
CMD ["redis-server"]