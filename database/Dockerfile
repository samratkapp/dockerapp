FROM mysql:5.7

ENV MYSQL_DATABASE='dbcms' 
#${MYSQL_DATABASE}  
#dbcms
ENV MYSQL_ROOT_PASSWORD='root'
#${MYSQL_ROOT_PASSWORD}
#password


COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
 
EXPOSE 3306

# CMD [mysqld]
 #  docker run  -e MYSQL_DATABASE='dbcms' -e MYSQL_ROOT_PASSWORD='password' env/dbimage