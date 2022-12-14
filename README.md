# Ounass Marktech Developer Case study
Ounass wants to build a marketing platform for social media platforms. As a pilot project, Facebook Marketing platform has been selected for the implementation. As a developer, you are tasked to integrate with the Facebook Marketing platform.
Required Credentials:
```python
access_token 
=EAAGObqCO8AEBAKH53CrBZBQ4a9ZCudLR3mmGEyAC8583GxZCPLuFofzuNKagCS25hCZA3zWEo8rikGjRgCUaQb2xKPJuQGWdbOzTBMztrxBT3I3TWQD3XuHgJVi1uVjML5BNZBnbDasZCdZAnQ2T9Wx fUAqEzLKLlWuuYlWVoZAN7RWeLK6ySrKRsakaG3PcBuAZD
ad_account_id = act_3061829570753376
app_secret = ff2002ad9af7137b75aafe9e828571e8
app_id = 438080767979521
page_id = 104413048775500
```

## Task 1: Backend
1. Implement below tasks with FastAPI

2. Create a campaign via API
   - The name will be **Conversions Campaign ***[your name here]*****
   - The objective will be ***REACH*** <br>
3. Create an Adset via API
   - The name will be **My First Adset ***[your name here]*****
   - The daily budget will be 2000 USD
   - The campaign will start the day the code is executed and run for 10 days
   - The bid amount will be 5 USD
   - Chose the suitable billing event
   - Chose the right optimization goal
   - The target audience will be story viewers who are between 20-35 years old and located in UAE, KSA, KUWAIT.
4. Create an ad via API.
   - The creative link message will be **try it out**
   - The creative link will be [Gucci](https://www.ounass.ae/designers/gucci)
   - The page id will be **104413048775500**
   - The creative name will be **Gucci AdCreative for Link Ad.**
   - The creative image will be <br> ![The San Juan Mountains are beautiful!](https://i.ibb.co/b38bYmw/gucci-bag.jpg)
5. Use Adset insight API to display the click and impressions results.
   - You may get empty result. Mock the api response from Facebook documentation
6. Use Preview API to display the ad that you created via API
   - If you want, you can use this package [Facebook-Business](https://pypi.org/project/facebook-business/) for API requests.
## Task 2: Frontend
Build a UI with React.js for the parameters that are entered above, such as 
Adset name, daily budget, etc. and preview your ad on the frontend as mentioned inTask 1.5

## Task3: Dockerize
Dockerize your code, and make sure the project will be up and running with an only
single command.

## Install Instructions
Prerequisite: You need to have Docker installed on the system where you'll be running this app. [Get Docker](https://docs.docker.com/install/)


1. Using your command line interface, `cd` to the cloned directory containing the docker-compose.yml file.
2. Build the images and run the containers:
    ```sh
    $ docker-compose up -d --build
    ```
3. To stop the application, run `docker-compose down`