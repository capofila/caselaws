FROM openjdk:8-jdk
RUN mkdir -p /opt
RUN mkdir -p /opt/webservice
RUN mkdir -p /var/logs
COPY ./webservice.properties /root/
COPY ./webservice-0.0.1-SNAPSHOT.jar /app/webservice-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "/app/webservice-0.0.1-SNAPSHOT.jar"]
