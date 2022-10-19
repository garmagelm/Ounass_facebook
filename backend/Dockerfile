FROM python:3.10

RUN apt-get update
RUN mkdir -p /var/ounass
RUN mkdir -p /var/ounass/backend

WORKDIR /var/ounass/backend

# install our dependencies
COPY requirements.txt /var/ounass/backend

# copy our project code
COPY . /var/ounass/backend

# run Django management commands at start
RUN pip install --no-cache-dir --upgrade -r requirements.txt

#COPY entrypoint.sh /var/ounass/backend
#RUN chmod +x "/var/ounass/backend/entrypoint.sh"
#ENTRYPOINT ["/var/ounass/backend/entrypoint.sh"]
#RUN cd /var/ounass/backend && python manage.py migrate --no-input
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "80"]