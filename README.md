# Leaderboard Client

## Targets

- Fetch users from an endpoint to list with country, name, money, rank, and daily difference fields.
- Displaying different text colors on daily difference field by value.
    -If the ranking change is greater than 0, the text color will be “green”.
    -If the ranking change is equal to 0, the text color will be “yellow”.
    -If the ranking change is less than 0, the text color will be “red”.
- Marking the random user's row with different background color.
- Have an operations button for several operations such as fetching a random user, giving a random amount of money to every user, closing the day, closing the week, regenerating data.
- Responsive design.

### Tech Stack & Features
- React 17
- Kendo UI
- Test (Jest)

## Run & Test

Node Version -> 14

#### Run
```bash
$ npm install
```
```bash
$ npm run build
$ npm run start
```
#### Test
```bash
$ npm test
```
## Notes

- For server side of this app ( [Laderboard Server](https://github.com/heaton11/leaderboard-server.git) )
- This app was created by create-react-app and it has every feature available that create-react-app provides