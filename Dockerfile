FROM openjdk:18.0.2.1-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} iljo-user-server.jar
ENTRYPOINT ["java","-jar","/iljo-user-server.jar"]