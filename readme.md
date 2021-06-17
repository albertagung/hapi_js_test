## How to install

 - Clone the github repo
 - Open project directory
 - Install PostgreSQL on your local machine (links: https://www.postgresql.org/download/)
 - Create new PostgreSQL database with your preferred credentials and database name on your 	local machine
 - Install [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) on your local machine
 - `npm install` on the project root folder
 - Create a new `.env` file on the project root folder containing these items:
 - `process.env.PG_LOCAL_USERNAME = <YOUR_DATABASE_USERNAME>`
 - `process.env.PG_LOCAL_PASSWORD = <YOUR_DATABASE_PASSWORD>`
 - `process.env.PG_LOCAL_DATABASE_NAME = <YOUR_DATABASE_NAME>`
 - `process.env.PG_LOCAL_HOST = <YOUR_DATABASE_LOCAL_HOST>`
 - Run `sequelize db:migrate` to migrate the PostgreSQL configuration and tables into your local database
 - Run the server using: `npm start`

## API endpoints

 - Get all movies: `GET /movies/l/list?search=<QUERY>&limit=<NUMBER>&offset=<NUMBER>`
	 - `?search=<QUERY>` --> to search the movie by title / author, default is null
	 - `?limit=<NUMBER>` --> to limit the dataset by number, default is null
	 - `?offset=<NUMBER>` --> to identify the starting point to return rows from a result dataset, default is null
 - Get movie by ID: `GET /movies/g/:<MOVIE_ID>`
 -  Update movie by ID: `PATCH /movies/g/:<MOVIE_ID>` with JSON body:
	 - `title: <UPDATE_MOVIE_TITLE>`
	 - `author: <UPDATED_MOVIE_AUTHOR>`
	 - `is_released: <UPDATED_MOVIE_RELEASE_DATE>`
	 - `production_year: <UPDATED_MOVIE_PRODUCTION_YEAR>`
 - Delete movie by ID: `DELETE /movies/g/:<MOVIE_ID>`

 


		

