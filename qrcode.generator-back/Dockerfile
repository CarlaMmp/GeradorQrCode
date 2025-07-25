FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/qrcode.generator-0.0.1-SNAPSHOT.jar app.jar

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_REGION
ARG AWS_BUCKET_NAME

ENV AWS_REGION=$AWS_REGION
ENV AWS_BUCKET_NAME=$AWS_BUCKET_NAME

ENTRYPOINT ["java", "-jar", "app.jar"]
