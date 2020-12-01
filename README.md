# conde-nast-server

server built on nodejs v14.8.0 serves data from newsapi.org

# api endpoints
* top headlines
* search from all news sources

# features
* lists top news from UK 
* search bar to filter any desired topic fetched from multiple news sources
* clicking on articles redirects to original website's news article

# setup
* clone server and client repositories 
* navigate to respective folders and run `npm start` form each of the folders

# environment variables
* create .env file at root of directory and add below variables changing values appropriately 
PORT = 3000
HOST = '127.0.0.1'
KEY = [your api key]
baseUrlEverything = 'https://newsapi.org/v2/everything'
baseUrlHeadlines = 'https://newsapi.org/v2/top-headlines'
pageSize = 10
