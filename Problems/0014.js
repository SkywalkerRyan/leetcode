/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function( strs ) 
{
	let val = '';

	for( let i = 0; i < strs.length; i++ )
	{
		if ( i == 0 )
		{
			val = strs[0];
			continue;
		}
		
		let length = val.length > strs[i].length ? strs[i].length : val.length;

		let temp = '';
		for( let j = 0; j < length; j++ )
		{
			if( val[j] === strs[i][j] )
			{
				temp = strs[i].slice( 0, j + 1 )
			}
			else
			{
				break;
			}
		}
		val = temp;
	};
	
	return val;
};

console.log( longestCommonPrefix( ["ab","a"] ) );
// console.log( longestCommonPrefix( ["flower","flow","flight"] ) );
// console.log( longestCommonPrefix( ["dog","racecar","car"] ) );