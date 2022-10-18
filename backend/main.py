from fastapi import FastAPI, Body
from starlette.responses import RedirectResponse

from utils.facebook_utils import FacebookApi
from utils.facebook_data_schemas import (
    CampaignItem, AdsetItem, CreativeAdItem)
from utils.mock_datas import (
    mock_campaign, mock_ad_set, mock_creative_campaign)
from config import settings
import logging


logging.basicConfig(level=logging.WARN)
app = FastAPI(title='Ounass Marktech Developer Case study',
              )


@app.get("/")
async def root():
    response = RedirectResponse(url="/docs")
    return response


api = FacebookApi(my_app_id='438080767979521',
                  my_app_secret='ff2002ad9af7137b75aafe9e828571e8',
                  my_access_token='EAAGObqCO8AEBAKH53CrBZBQ4a9ZCudLR3mmGEyAC8583GxZCPLuFofzuNKagCS25hCZA3zWEo 8rikGjRgCUaQb2xKPJuQGWdbOzTBMztrxBT3I3TWQD3XuHgJVi1uVjML5BNZBnbDasZCdZAnQ2T9Wx fUAqEzLKLlWuuYlWVoZAN7RWeLK6ySrKRsakaG3PcBuAZD', # noqa
                  ad_account_id='act_3061829570753376')


@app.get("/campaign", tags=["Campaign"])
async def get_campaigns():
    return api.get_campaigns()


@app.post("/campaign", tags=["Campaign"])
async def add_campaign(campaign_details: CampaignItem = Body(mock_campaign)):
    resp = api.create_campaign(**campaign_details.dict())
    return resp

@app.get("/hello/{name}")
async def say_hello(name: str = ""):
    return {"message": f"Hello {name}"}


@app.get("/adset", tags=["Adset"])
async def get_adsets():
    return api.get_add_sets()


@app.post("/adset", tags=["Adset"])
async def add_adsets(ad_set_details: AdsetItem = Body(mock_ad_set)):
    return api.create_add_set(**ad_set_details.dict())


@app.get("/creative_ads", tags=["AdCreative"])
async def get_creative_ads():
    return api.get_creative_ads()


@app.post("/creative_ads", tags=["AdCreative"])
async def create_creative_ads(creative_ad_details: CreativeAdItem = Body(mock_creative_campaign)): # noqa
    return api.create_creative_ad(**creative_ad_details.dict())



@app.get("/insight/adset/{ad_set_id}", tags=["Insight API"])
async def get_ad_set_insights(ad_set_id: int):
    """
    Sample Adset for testing: 120330000104414509
    """
    insights = api.get_adset_insight(str(ad_set_id))
    # https://developers.facebook.com/docs/graph-api/reference/ad-campaign/insights/#example
    mock_response = {
        "data": [],
        "paging": {},
        "summary": {}
    }
    # if data response is empty, it will be mocked. 120330000104414509
    return insights if insights else mock_response


@app.get("/insight/creative_ad/{creative_ad_id}", tags=["Insight API"])
async def get_creative_add_insights(creative_ad_id: int):
    """
    Sample CreativeAdd ID for testing: 120330000104440509
    """
    insight = api.get_creative_ads_insight(str(creative_ad_id))
    # https://developers.facebook.com/docs/graph-api/reference/ad-campaign/insights/#example
    # if data response is empty, it will be mocked. 120330000104440509
    return insight
