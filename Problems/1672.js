/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function( accounts ) 
{
    let maxWealth = 0;

    accounts.map( m => {
        const wealth = m.reduce( ( amount, n ) => {
            return amount += n;
        }, 0 );

        if ( wealth > maxWealth ) maxWealth = wealth;
    } );

    console.log( maxWealth );
    return maxWealth;
};