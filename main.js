$(document).on('ready', function() {
  
	var alphabetsoup=function(str){
		return str.split('').sort().join('');
		// console.log(str);
	};
alphabetsoup('hello');

	
	var vowelcount=function(str){
		var vowel=/[aeiouAEIOU]/;
		var isVowel=reg.test.bind(vowel);
		return str.split('').filter(isVowel).length;
	};


});