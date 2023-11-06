//https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona&page=1

async function getTotalGoals(team, year) {
    try{
        const response1 = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1`);
        const response2 = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=1`);

        const data1 = await response1.json();
        const data2 = await response2.json();

        return data1.total+data2.total;
    }
    catch (error) {
        console.error("An error occurred:", error);
    }   
}
async function main() {
    try {
        const totalGoals = await getTotalGoals('Barcelona', 2011);
        console.log(totalGoals);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
main();