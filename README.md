# HealthNewsNow - TAD Hack 2020 Phoenix

Check out the hosted version here: https://tad-hack-2020-phx.kmariano.now.sh/

## Run Locally
1. Install [Node](https://github.com/nvm-sh/nvm)
1. Create a `.env` file:
```
export AVAYA_ACCOUNT_SID=<YOUR_ID>
export AVAYA_ACCOUNT_TOKEN=<YOUR_TOKEN>
export GOOGLE_API_KEY=<YOUR_KEY>
export GOOGLE_SEARCH_CX=<YOUR_CX_ID>
export GOOGLE_APPLICATION_CREDENTIALS=<PATH_TO_GOOGLE_PROVIDER_ACCOUNT_CREDS>
```
3. Fill in your Avaya account SID and token from your Avaya Account
4. [Setup custom google search account](https://developers.google.com/custom-search/v1/overview) and copy the API_KEY and SEARCH_CX ID
5. Copy your Google Provider Account Credentials file into the project
6. Clone and start the app locally
```
git clone https://github.com/kmariano/healthnewsnow.git
cd healthnewsnow
npm install
npm run dev
```
