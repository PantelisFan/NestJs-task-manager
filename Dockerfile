FROM postgres

ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB taskmanager

CMD ["docker-entrypoint.sh", "postgres"]
