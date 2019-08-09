function twoNumberSum(array, targetSum) {
    // Write your code here.
      const diff = {}
      
      for(let i = 0; i <= array.length; i++) {
          if(diff[targetSum - array[i]]) {
              let answer = [targetSum - array[i], array[i]]
              
              // below did not pass #6 because sort() sorts a string... 
              // return answer.sort()			// got [15, 3] instead of [3, 15]
              
              return answer.sort((a, b) => (a-b))
          } else {
              diff[array[i]] = true
              
              // below is what gave err for #7 
              // twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5) //[-5, 0]
              // AssertionError: expected [] to deeply equal [-5, 0]
            //   diff[array[i]] = targetSum - array[i]
          }
              
      }
      return []	
  }
  
  
  
  
  // below passes everything but Test Case #7
  // function twoNumberSum(array, targetSum) {
  //   // Write your code here.
  // 	const diff = {}
      
  // 	for(let i = 0; i <= array.length; i++) {
  // 		if(diff[targetSum - array[i]]) {
  // 			let answer = [targetSum - array[i], diff[targetSum - array[i]]]
  // 			answer.sort(function(a, b){return a-b})
  // 			return answer
  // 		}
  // 		if (!diff[array[i]]) {
  // 			diff[array[i]] = targetSum - array[i]
  
  // 		}		
  // 	}
  // 	return []	
  // }
  
  
  
      
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  