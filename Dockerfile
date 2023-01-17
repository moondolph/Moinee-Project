FROM openjdk:18.0.2.1-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} iljo-discovery-service.jar
ENTRYPOINT ["java","-jar","/iljo-discovery-service.jar"]