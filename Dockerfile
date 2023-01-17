FROM openjdk:18.0.2.1-oracle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} iljo-userevaulation.jar
ENTRYPOINT ["java","-jar","/iljo-userevaulation.jar"]