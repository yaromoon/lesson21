let s="";
s+=$('#s1').text();
s+=$('.s2').text();
s+=$('i:first-child').text();
s+=$("q[title='hello']").text();
s+=$('[href]').text();
alert(s);
