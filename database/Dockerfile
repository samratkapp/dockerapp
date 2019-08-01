FROM mysql:5.7

ENV MYSQL_DATABASE dbcms
ENV MYSQL_ROOT_PASSWORD=password


COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
 