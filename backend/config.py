from pydantic import BaseSettings


class Settings(BaseSettings):
    my_app_id: str
    my_app_secret: str
    my_access_token: str
    ad_account_id: str

    class Config:
        env_file = ".env"


settings = Settings()
