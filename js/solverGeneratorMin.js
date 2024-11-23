function solveObject(e,t){this.difficulty=t;var i=new puzzleObject(e);this.puzzleState=i.getPuzzleState(),this.width=i.getWidth(),this.height=i.getHeight(),this.seriesArray=new Array,this.puzzCells=new Array,this.subSeriesArray=new Array,"easy"==this.difficulty?(this.guessDepth=0,this.guessLimit=0,this.candidatesLimit=9):"medium"==this.difficulty?(this.guessDepth=0,this.guessLimit=0,this.candidatesLimit=9):"hard"==this.difficulty?(this.guessDepth=0,this.guessLimit=0,this.candidatesLimit=9):"harder"==this.difficulty?(this.guessDepth=1,this.guessLimit=1,this.candidatesLimit=9):"max"==this.difficulty&&(this.guessDepth=5,this.guessLimit=20,this.candidatesLimit=9),solveObject.prototype.solve=function(){if(solveCount=0,guessCount=0,initCombos(),0==lookedForSurfaceSums&&findSurfaceSums(this.width,this.height,this.puzzleState),createSeries(this.width,this.height,this.puzzleState,this.seriesArray),0==invalidNumber){candidates=initCandidates(this.seriesArray,this.width,this.height,this.puzzleState),solveLogic(this.width,this.height,this.puzzleState,this.seriesArray,this.subSeriesArray,candidates,solveCount,this.difficulty,this.guessDepth,this.guessLimit,this.candidatesLimit,!1);for(var e="",t="true",i=0;height>i;i++)for(var s=0;width>s;s++)"#"!=this.puzzleState[i][s]&&-1==this.puzzleState[i][s].toString().indexOf(")")&&(e+=this.puzzleState[i][s]),"@"==this.puzzleState[i][s]&&(t="false");this.solutionString=t+":"+solveCount+":"+e}else this.solutionString="Invalid numerals at "+invalidX+"-"+invalidY},solveObject.prototype.getSolution=function(){return this.solutionString}}function handleSurfaceSums(e,t,i,s,n){for(var t=0;t<foundSurfaceSums.length;t++){var a=foundSurfaceSums[t].split("/"),r=a[0],l=a[1].split("-"),o=1*l[0],h=1*l[1],d=a[2].split(",");if("clean"==r){for(var f=0,u=0,g=0;g<s.length;g++)for(var c=s[g],a=c.getCells(),v=0;v<a.length;v++){var p=a[v];if(-1!=d.indexOf(p)){"h"==c.getDirection()?u+=1*c.getTotal():f+=1*c.getTotal();break}}var m=Math.abs(u-f);postMessage(m+" solved at "+o+"-"+h),candidates[o][h]=m+""}else{for(var u=0,f=0,g=0;g<s.length;g++)for(var c=s[g],a=c.getCells(),v=0;v<a.length;v++){var p=a[v];if(-1!=d.indexOf(p)){"h"==c.getDirection()?u+=1*c.getTotal():f+=1*c.getTotal();break}}var b=Math.abs(u-f),z="",y="",x=new Array;if("down"==r){z="v";var C=0;for(y=o+1+"-"+h;10>C&&"#"!=i[o+1+C][h]&&-1==i[o+1+C][h].indexOf("(");)x.push(o+1+C+"-"+h),C++}else if("up"==r){z="v";var C=0;for(y=o-1+"-"+h;10>C&&"#"!=i[o-1-C][h]&&-1==i[o-1-C][h].indexOf("(");)x.push(o-1-C+"-"+h),C++}else if("left"==r){z="h";var C=0;for(y=o+"-"+(h-1);10>C&&"#"!=i[o][h-1-C]&&-1==i[o][h-1-C].indexOf("(");)x.push(o+"-"+(h-1-C)),C++}else if("right"==r){z="h";var C=0;for(y=o+"-"+(h+1);10>C&&"#"!=i[o][h+1+C]&&-1==i[o][h+1+C].indexOf("(");)x.push(o+"-"+(h+1+C)),C++}if(x.length>1){var O=combinations[x.length][b],S=O.split(","),w=new Array,A=new seriesObject(y,z,1*x.length,b,x,S,w);n.push(A)}}}}function findSurfaceSums(e,t,i){lookedForSurfaceSums=!0;var s=e,n=t,i=i,a=new Array;for(x=0;n>x;x++)for(y=0;s>y;y++)"@"==i[x][y]&&a.push(x+"-"+y);for(foundSurfaceSums=new Array,postMessage("surface sums"),x=0;n>x;x++)for(y=0;s>y;y++)if("@"==i[x][y]){var r=0,l=0,o=!1,h=!1,d=!1,f=!1,u=!1,g=!1,c=!1,v=!1;if(("#"==i[x+1][y]||"@"!=i[x+1][y])&&(r++,l++,h=!0),("#"==i[x-1][y]||"@"!=i[x-1][y])&&(r++,l++,o=!0),("#"==i[x][y+1]||"@"!=i[x][y+1])&&(r++,l++,f=!0),("#"==i[x][y-1]||"@"!=i[x][y-1])&&(r++,l++,d=!0),("#"==i[x+1][y+1]||"@"!=i[x+1][y+1])&&(l++,v=!0),("#"==i[x+1][y-1]||"@"!=i[x+1][y-1])&&(l++,c=!0),("#"==i[x-1][y+1]||"@"!=i[x-1][y+1])&&(l++,u=!0),("#"==i[x-1][y-1]||"@"!=i[x-1][y-1])&&(l++,g=!0),2==r){var p=new Array,m=a.slice(0);i[x][y]="#",-1!=a.indexOf(x+1+"-"+y)?p=travelCells(x+1,y,p,m,i):-1!=a.indexOf(x-1+"-"+y)?p=travelCells(x-1,y,p,m,i):-1!=a.indexOf(x+"-"+(y+1))?p=travelCells(x,y+1,p,m,i):-1!=a.indexOf(x+"-"+(y-1))&&(p=travelCells(x,y-1,p,m,i)),i[x][y]="@",p.length+1!=a.length&&foundSurfaceSums.push("clean/"+x+"-"+y+"/"+p)}if(1==r&&l>1&&-1==foundSurfaceSums.indexOf(x+"-"+y)){var b=!1,z="",C="";if(1!=o||1!=v&&1!=c||(b=!0,z="up",1==v?C="right":1==c&&(C="left")),1!=h||1!=u&&1!=g||(b=!0,z="down",1==u?C="right":1==g&&(C="left")),1!=d||1!=u&&1!=v||(b=!0,z="left",1==u?C="up":1==v&&(C="down")),1!=f||1!=g&&1!=c||(b=!0,z="right",1==g?C="up":1==c&&(C="down")),1==b){var p=new Array,m=a.slice(0);i[x][y]="#","up"==z?p=travelCells(x+1,y,p,m,i):"down"==z?p=travelCells(x-1,y,p,m,i):"left"==z?p=travelCells(x,y+1,p,m,i):"right"==z&&(p=travelCells(x,y-1,p,m,i)),i[x][y]="@",p.length+1!=a.length&&foundSurfaceSums.push(C+"/"+x+"-"+y+"/"+p)}}}}function solveLogic(e,t,i,s,n,a,r,l,o,h,d,f){width=e,height=t,i=i,s=s,n=n,a=a,noCandidates=!1,r++;for(var u=new Array(height),g=0;height-1>=g;g++)u[g]=new Array(width);for(var c=0;height>c;c++)for(var v=0;width>v;v++)u[c][v]=i[c][v];for(var p=new Array(height),g=0;height-1>=g;g++)p[g]=new Array(width);for(var c=0;height>c;c++)for(var v=0;width>v;v++)p[c][v]=a[c][v];"easy"!=l&&"medium"!=l&&1==r&&handleSurfaceSums(width,height,i,s,n);for(var c=0;height>c;c++)for(var v=0;width>v;v++)"@"==i[c][v]&&1==a[c][v].length&&(value=a[c][v],i=solveCell(c,v,value,s,i));for(var c=0;height>c;c++)for(var v=0;width>v;v++)"@"==i[c][v]&&0==a[c][v].length&&(noCandidates=!0);for(g=0;g<s.length;g++){var m=s[g];removeCandidates(m)}for(g=0;g<n.length;g++){var m=s[g];removeCandidates(m)}for(g=0;g<s.length;g++){var m=s[g];removeCombos(m)}for(g=0;g<n.length;g++){var m=s[g];removeCombos(m)}if("easy"!=l){for(g=0;g<s.length;g++){var m=s[g];singleOccurrence(m)}for(g=0;g<n.length;g++){var m=s[g];singleOccurrence(m)}}if("easy"!=l){for(g=0;g<s.length;g++){var m=s[g];nakedDoubles(m)}for(g=0;g<n.length;g++){var m=s[g];nakedDoubles(m)}}if("easy"!=l){for(g=0;g<s.length;g++){var m=s[g];twoCandidates(m)}for(g=0;g<n.length;g++){var m=s[g];twoCandidates(m)}}if("easy"!=l&&"medium"!=l)for(g=0;g<n.length;g++){var m=s[g];subSeriesCandidates(m)}for(var b=!0,c=0;height>c;c++)for(var v=0;width>v;v++)"@"==i[c][v]&&(b=!1);0==b?0==f?(JSON.stringify(i)!=JSON.stringify(u)||JSON.stringify(a)!=JSON.stringify(p))&&1e4>r&&0==noCandidates?solveLogic(width,height,i,s,n,a,r,l,o,h,d,f):h>guessCount&&(startGuess(width,height,i,s,n,a,r,o,h,d),solveLogic(width,height,i,s,n,a,r,l,o,h,d,f)):(JSON.stringify(i)!=JSON.stringify(u)||JSON.stringify(a)!=JSON.stringify(p))&&1e4>r&&0==noCandidates&&o>guessSolveCount&&(guessSolveCount++,solveLogic(width,height,i,s,n,a,r,l,o,h,d,f)):solveCount=r}function subSeriesCandidates(e){for(var t="",i=0;i<e.getCombos().length;i++)for(var s=e.getCombos(),n=s[i],a=0;a<n.length;a++)for(var r=n.split(""),l=0;l<r.length;l++)-1==t.indexOf(r[l])&&(t+=r[l]+"");for(var o=0;o<e.getCells().length;o++){for(var s=e.getCells(),h=s[o].split("-"),d=1*h[0],f=1*h[1],u=candidates[d][f].split(""),g=0;g<u.length;g++)-1==t.indexOf(u[g])&&(candidates[d][f]=candidates[d][f].replace(candidates[d][f].charAt(g),"-"),postMessage("removing "+u[g]+" at "+d+"-"+f+" because of "+t));candidates[d][f]=candidates[d][f].replace(/\-/g,"")}}function removeCandidates(e){for(var t="",i=0;i<e.getCombos().length;i++){var s=e.getCombos(),n=s[i];t+=n}for(var a=0;a<e.getCells().length;a++){for(var s=e.getCells(),r=s[a].split("-"),l=r[0],o=r[1],h=0;h<candidates[l][o].length;h++)-1==t.indexOf(candidates[l][o].charAt(h))&&(candidates[l][o]=candidates[l][o].replace(candidates[l][o].charAt(h),"-"));candidates[l][o]=candidates[l][o].replace(/\-/g,"")}}function removeCombos(e){for(var t="",i=(new Array,0);i<e.getCells().length;i++){var s=e.getCells(),n=s[i].split("-"),a=n[0],r=n[1];t+=candidates[a][r]}for(var i=e.getCombos().length-1;i>-1;i--){var s=e.getCombos();nums=s[i].split("");for(var l=0;l<nums.length;l++)if(-1==t.indexOf(nums[l])&&-1==e.getValues().indexOf(nums[l])){e.removeCombo(i);break}}}function singleOccurrence(e){for(var t=new Array,i=0;i<e.getCombos().length;i++){var s=e.getCombos(),n=s[i].split("");if(0==i)t.addAll(n);else{if(0==t.length)break;t.retainAll(n)}}if(0!=t.length){for(var a=new Array,r=0;r<e.getCells().length;r++){var s=e.getCells(),l=s[r].split("-"),o=l[0],h=l[1],d=candidates[o][h].split("");a.addAll(d)}for(var f=0;f<t.length;f++){for(var u=0,g=0;g<a.length;g++)a[g]==t[f]&&u++;if(1==u)for(var c=0;c<e.getCells().length;c++){var s=e.getCells(),l=s[c].split("-"),o=l[0],h=l[1];-1!=candidates[o][h].indexOf(t[f])&&(candidates[o][h]=t[f])}}}}function nakedDoubles(e){if(2!=e.getLength()){for(var t=new Array,i=0;i<e.getCells().length;i++){var s=e.getCells(),n=s[i].split("-"),a=n[0],r=n[1];2==candidates[a][r].length&&t.push(candidates[a][r])}for(var l="",o=t.length-1;o>-1;o--){var h=t[o];t.splice(o,1),-1!=t.indexOf(h)&&(l+=h)}for(var i=0;i<e.getCells().length;i++){for(var s=e.getCells(),n=s[i].split("-"),a=n[0],r=n[1],d=0;d<candidates[a][r].length;d++)2==l.length&&-1!=l.indexOf(candidates[a][r].charAt(d))&&candidates[a][r]!=l&&(candidates[a][r]=candidates[a][r].replace(candidates[a][r].charAt(d),"-"));candidates[a][r]=candidates[a][r].replace(/\-/g,"")}if(2==l.length)for(var f=e.getCombos().length-1;f>-1;f--){var s=e.getCombos();combo=s[f],nums=l.split(""),-1==combo.indexOf(nums[1])&&-1==combo.indexOf(nums[2])&&e.removeCombo(f)}}}function twoCandidates(e){for(var t="",i="",s=0;s<e.getCells().length;s++){var n=e.getCells(),a=n[s].split("-"),r=a[0],l=a[1];if(2==candidates[r][l].length){var n=candidates[r][l].split("");t=n[0],i=n[1];for(var o=!1,h=0;h<e.getCombos().length;h++){var n=e.getCombos();-1!=n[h].indexOf(t)&&-1!=n[h].indexOf(i)&&(o=!0)}if(0==o)for(var d=0;d<e.getCells().length;d++)if(d!=s){var n=e.getCells(),a=n[d].split("-"),r=a[0],l=a[1];candidates[r][l]=candidates[r][l].replace(t,"-"),candidates[r][l]=candidates[r][l].replace(i,"-"),candidates[r][l]=candidates[r][l].replace(/\-/g,"")}}}}function startGuess(e,t,i,s,n,a,r,l,o,h){guessCount++;var d;d=new Array(t);for(var f=0;t-1>=f;f++)d[f]=new Array(e);for(var u=0;t>u;u++)for(var g=0;e>g;g++)d[u][g]=a[u][g];var c;c=new Array(t);for(var f=0;t-1>=f;f++)c[f]=new Array(e);for(var u=0;t>u;u++)for(var g=0;e>g;g++)c[u][g]=i[u][g];startSeriesArray=new Array;for(var u=0;u<s.length;u++){var v=s[u].getStartCell(),p=s[u].getDirection(),m=s[u].getLength(),b=s[u].getTotal(),z=s[u].getCells().slice(0),y=s[u].getCombos().slice(0),x=s[u].getValues().slice(0);newSeries=new seriesObject(v,p,m,b,z,y,x),startSeriesArray.push(newSeries)}for(var C=new Array,u=0;u<n.length;u++){var v=n[u].getStartCell(),p=n[u].getDirection(),m=n[u].getLength(),b=n[u].getTotal(),z=n[u].getCells().slice(0),y=n[u].getCombos().slice(0),x=n[u].getValues().slice(0);newSeries=new seriesObject(v,p,m,b,z,y,x),C.push(newSeries)}for(var f=0;f<startSeriesArray.length;f++)if("h"==startSeriesArray[f].getDirection())for(var O=s[f],S=0;S<O.getCells().length;S++){var w=O.getCells(),A=w[S].split("-"),u=A[0],g=A[1];if(1!=a[u][g].length&&a[u][g].length<=h)for(var W=0;W<a[u][g].length;W++){var j=a[u][g].charAt(W);doingGuess=!0,solveCell(u,g,j,s,i),solveLogic(e,t,i,s,n,a,r,difficulty,l,o,h,doingGuess),guessSolveCount=0,doingGuess=!1;for(var P=0;t>P;P++)for(var M=0;e>M;M++)a[P][M]=d[P][M];for(var P=0;t>P;P++)for(var M=0;e>M;M++)i[P][M]=c[P][M];s.length=0;for(var R=0;R<startSeriesArray.length;R++){var v=startSeriesArray[R].getStartCell(),p=startSeriesArray[R].getDirection(),m=startSeriesArray[R].getLength(),b=startSeriesArray[R].getTotal(),z=startSeriesArray[R].getCells().slice(0),y=startSeriesArray[R].getCombos().slice(0),x=startSeriesArray[R].getValues().slice(0);newSeries=new seriesObject(v,p,m,b,z,y,x),s.push(newSeries)}n.length=0;for(var L=0;L<C.length;L++){var v=C[L].getStartCell(),p=C[L].getDirection(),m=C[L].getLength(),b=C[L].getTotal(),z=C[L].getCells().slice(0),y=C[L].getCombos().slice(0),x=C[L].getValues().slice(0);newSeries=new seriesObject(v,p,m,b,z,y,x),n.push(newSeries)}(1==noCandidates||1==hasValue)&&(d[u][g]=d[u][g].replace(j,"")),noCandidates=!1,hasValue=!1}}for(var u=0;t>u;u++)for(var g=0;e>g;g++)a[u][g]=d[u][g];for(var u=0;t>u;u++)for(var g=0;e>g;g++)i[u][g]=c[u][g];s.length=0;for(var u=0;u<startSeriesArray.length;u++)s.push(startSeriesArray[u].createClone())}function solveCell(e,t,i,s,n){if(n[e][t]!=i){for(var a=e+"-"+t,r=(new Array,0);r<s.length;r++){var l=s[r];if(-1!=l.getCells().indexOf(a))if(-1==l.getValues().indexOf(i)){modifyValues(l,a,i);for(var o=l.getCombos().length-1;o>-1;o--){var h=l.getCombos();combo=h[o],-1==combo.indexOf(i)&&l.removeCombo(o)}}else postMessage(i+" already in series at:"+e+"-"+t+" "+l.getValues()),hasValue=!0}n[e][t]=i,candidates[e][t]=i}return n}function modifyValues(e,t,i){e.addValue(i);for(var s=0;s<e.getCells().length;s++){temp=e.getCells();var n=temp[s].split("-"),a=n[0],r=n[1];candidates[a][r].length>1&&-1!=candidates[a][r].indexOf(i)&&(candidates[a][r]=candidates[a][r].replace(i,""))}}function initCandidates(e,t,i,s){for(var e=e,n=new Array(i),a=0;i-1>=a;a++)n[a]=new Array(t);for(var r=0;i>r;r++)for(var l=0;t>l;l++)n[r][l]="";for(var r,l,a=0;a<e.length;a++)if("h"==e[a].getDirection())for(var o=e[a],h=0;h<o.getCells().length;h++){var d=o.getCells();v=d[h].split("-"),r=v[0],l=v[1],n[r][l]="";for(var f=0;f<o.getCombos().length;f++)for(var d=o.getCombos(),u=d[f],g=0;g<u.length;g++){p=u.split("");for(var c=0;c<p.length;c++)-1==n[r][l].indexOf(p[c])&&(n[r][l]+=p[c])}}for(var r=0;i>r;r++)for(var l=0;t>l;l++)"@"==s[r][l]&&""==n[r][l]&&(n[r][l]="123456789");for(var a=0;a<e.length;a++)if("v"==e[a].getDirection())for(var o=e[a],h=0;h<o.getCells().length;h++){var d=o.getCells(),v=d[h].split("-");r=v[0],l=v[1];for(var p="",f=0;f<o.getCombos().length;f++)for(var d=o.getCombos(),u=d[f].split(","),g=0;g<u.length;g++)p+=u[g];for(var m=n[r][l].split(""),c=0;c<m.length;c++)-1==p.indexOf(m[c])&&(n[r][l]=n[r][l].replace(m[c],""))}return n}function seriesObject(e,t,i,s,n,a,r){this.startCell=e,this.direction=t,this.length=i,this.total=s,this.cells=n,this.combos=a,this.values=r,seriesObject.prototype.createClone=function(){var e=new seriesObject(this.startCell,this.direction,this.length,this.total,this.cells.splice(0),this.combos.splice(0),this.values.splice(0));return e},seriesObject.prototype.toString=function(){return this.startCell+"-"+this.direction+"-"+this.length+"-"+this.total+"-"+this.cells+"-"+this.combos+"-"+this.values},seriesObject.prototype.getStartCell=function(){return this.startCell},seriesObject.prototype.getDirection=function(){return this.direction},seriesObject.prototype.getLength=function(){return this.length},seriesObject.prototype.getTotal=function(){return this.total},seriesObject.prototype.getCells=function(){return this.cells},seriesObject.prototype.getCombos=function(){return this.combos},seriesObject.prototype.getValues=function(){return this.values},seriesObject.prototype.addValue=function(e){this.values.push(e)},seriesObject.prototype.removeCombo=function(e){this.combos.splice(e,1)}}function puzzleObject(e){this.puzzleString=e,splitPuzz=e.split(":",2),puzzData=splitPuzz[1],wxh=splitPuzz[0].split("x"),this.width=wxh[0],this.height=wxh[1],puzzData2=puzzData.split(","),this.puzzleState=new Array(this.height);for(var t=0;t<=this.height-1;t++)this.puzzleState[t]=new Array(this.width);for(var i=0,s=0;s<this.height;s++)for(var n=0;n<this.width;n++)this.puzzleState[s][n]=puzzData2[i],i++;puzzleObject.prototype.getHeight=function(){return this.height},puzzleObject.prototype.getWidth=function(){return this.width},puzzleObject.prototype.getPuzzleState=function(){return this.puzzleState}}function createSeries(e,t,i,s){for(invalidNumber=!1,width=e,height=t,x=0;height>x;x++)for(y=0;width>y;y++)if(-1!=i[x][y].indexOf("(")&&1!=invalidNumber){var n="",a=new Array,r=(new Array,new Array),l=0,o=i[x][y].split("-");if(2==o.length){o[0]=o[0].substring(1),o[1]=o[1].substring(0,o[1].length-1);for(var a=new Array;10>l&&"@"==i[x][y+1+l];)n="h",a.push(x+"-"+(y+1+l)),l++;if("*"==o[1]);else{var h="";if(h=combinations[a.length][o[1]],"0"!=h){var d=h.split(","),r=new Array,f=new seriesObject(x+"-"+y,n,a.length,o[1],a,d,r);s.push(f)}else invalidNumber=!0,invalidX=x,invalidY=y}for(a=new Array,l=0;10>l&&height>x+1+l&&"@"==i[x+1+l][y];)n="v",a.push(x+1+l+"-"+y),l++;if("*"==o[0]);else if(h="",h=combinations[a.length][o[0]],"0"!=h){h=combinations[a.length][o[0]];var d=h.split(",");r=new Array,f=new seriesObject(x+"-"+y,n,a.length,o[0],a,d,r),s.push(f)}else invalidNumber=!0,invalidX=x,invalidY=y}else{for(a=new Array,o[0]=o[0].substring(1),o[0]=o[0].substring(0,o[0].length-1);10>l&&"@"==i[x][y+1+l];)n="h",a.push(x+"-"+(y+1+l)),l++;for(l=0;10>l&&height>x+1+l&&"@"==i[x+1+l][y];)n="v",a.push(x+1+l+"-"+y),l++;if("*"==o[0]);else{var h="";if(h=combinations[a.length][o[0]],"0"!=h){var d=h.split(",");r=new Array,f=new seriesObject(x+"-"+y,n,a.length,o[0],a,d,r),s.push(f)}else invalidNumber=!0,invalidX=x,invalidY=y}}}}function generateObject(e,t,i){this.height=t,this.width=e,height=t,width=e,this.difficulty=i,puzzleWalls=new Array,addedWalls=new Array,puzzleCells=new Array,invalidWalls=new Array;var s=!0,n=0;this.puzzleString="",this.puzzleString2="",this.genPuzzleState=new Array(this.height);for(var a=0;a<=this.height-1;a++)this.genPuzzleState[a]=new Array(this.width);for(var r=0;r<this.height;r++)for(var l=0;l<this.width;l++)1>r||1>l||l>this.width-2||r>this.height-2?(this.genPuzzleState[r][l]="#",puzzleWalls.push(r+"-"+l)):(this.genPuzzleState[r][l]="@",puzzleCells.push(r+"-"+l));generateObject.prototype.generate=function(){if(this.genPuzzleState=generateGrid(this.genPuzzleState,this.difficulty),s=validateGrid(this.genPuzzleState),0==s)return postMessage("regen_invalidPuzzle"),"none";for("easy"!=this.difficulty&&"medium"!=this.difficulty?findSurfaceSums(this.width,this.height,this.genPuzzleState):lookedForSurfaceSums=!0,temp=generateSolution(this.genPuzzleState);"none"==temp;){if(n>30)return postMessage("regen_numberRegen"),"none";n++;for(var e=0;e<this.height;e++)for(var t=0;t<this.width;t++)this.genPuzzleState[e][t]="#"!=this.genPuzzleState[e][t]&&-1==this.genPuzzleState[e][t].toString().indexOf("(")?"@":"#";temp=generateSolution(this.genPuzzleState)}if(this.genPuzzleState=temp,this.genPuzzleState=generateClues(this.genPuzzleState),this.puzzleString=generatePuzzleString(this.genPuzzleState),this.puzzleString2=refactorSolution(this.puzzleString,this.genPuzzleState,this.difficulty),"hard"!=this.difficulty&&"max"!=this.difficulty&&"medium"!=this.difficulty||"none"==this.puzzleString2)return this.puzzleString2;postMessage("harder");var i=refactorClues(this.puzzleString2,this.genPuzzleState,this.difficulty);return i}}function refactorClues(e,t,i){var s=e,n=0,a=new solveObject(s,i);a.solve();var r=a.getSolution(),l=r.split(":"),o=l[0],h=(l[2],1*l[1]),d=1*l[1];for(puzzleCells=shuffle(puzzleCells);n<puzzleCells.length;){if(postMessage("testing"),"medium"!=i||"medium"==i&&n%2==0){for(var f=0;height>f;f++)for(var u=0;width>u;u++)"#"==t[f][u]||0==isNaN(1*t[f][u])||-1!=t[f][u].indexOf(")")&&(t[f][u]="#");var g=puzzleCells[n],c=g.split("-"),f=1*c[0],u=1*c[1],v=new Array(1,2,3,4,5,6,7,8,9),p=new Array,m=new Array,b=0,z=0;v[v.indexOf(1*t[f][u])]="-";for(var y=f;y>0&&"#"!=t[y][u];y--)"@"!=t[y][u]&&(v[v.indexOf(1*t[y][u])]="-",m.push(t[y][u]),z+=1*t[y][u]);for(var y=f;y>0&&"#"!=t[y][u];y++)"@"!=t[y][u]&&(v[v.indexOf(1*t[y][u])]="-",m.push(t[y][u]),z+=1*t[y][u]);for(var x=u;x>0&&"#"!=t[f][x];x--)"@"!=t[f][x]&&(v[v.indexOf(1*t[f][x])]="-",p.push(t[f][x]),b+=1*t[f][x]);for(var x=u;x>0&&"#"!=t[f][x];x++)"@"!=t[f][x]&&(v[v.indexOf(1*t[f][x])]="-",p.push(t[f][x]),b+=1*t[f][x]);for(var C=v.length-1;C>-1;C--){var O=v[C];t[f-1][u-1]==O&&t[f-1][u]==t[f][u-1]&&"#"!=t[f][u-1]&&v.splice(C,1)}for(var S=v.length-1;S>-1;S--)"-"==v[S]&&v.splice(S,1);if(0!=v.length){var w=0;for(v=shuffle(v);w<v.length;){var A=t[f][u],W=v[w];t[f][u]=W,t=generateClues(t);var j=generatePuzzleString(t);solveCount=0,a=new solveObject(j,i),a.solve();var r=a.getSolution(),l=r.split(":"),o=l[0],P=(l[2],1*l[1]);"hard"==i||"max"==i?P>=h&&"true"==o?(h=P,postMessage("replacing "+A+" at "+f+"-"+u+"with "+W),s=j):t[f][u]=A:"true"==o?(h=P,postMessage("replacing "+A+" at "+f+"-"+u+"with "+W),s=j):t[f][u]=A,w++}}}n++}return postMessage("old solve count: "+d+" new solve count: "+h),s}function refactorSolution(e,t,i){var s=e;solver=new solveObject(s,i),solver.solve();var n=solver.getSolution(),a=n.split(":"),r=a[0];n=a[2],sparseSolveCount=0,emptySolveCount=0,refactorCount=0,clearNumbersCount=0;for(var l=!1;"true"!=r&&0==l;){refactorCount++;for(var o=n.indexOf("@"),h=0;o>=0;)h++,o=n.indexOf("@",o+1);postMessage("genprogress_"+h);var d=h/(n.length/2);if(d>.7&&sparseSolveCount++,d>.9&&emptySolveCount++,refactorCount*height*width>1e5)return postMessage("regen_tooMuchRefactoring"),"none";for(var f=n.split(""),u=0,g=0;height>g;g++)for(var c=0;width>c;c++)"#"!=t[g][c]&&-1==t[g][c].toString().indexOf("(")?(t[g][c]=f[u],u++):t[g][c]="#";for(a=generateSolution(t),regenNumbersCount=0;"none"==a;){if(regenNumbersCount>30)return postMessage("regen_numberRegen"),"none";u=0,regenNumbersCount++;for(var g=0;height>g;g++)for(var c=0;width>c;c++)"#"!=t[g][c]&&-1==t[g][c].toString().indexOf("(")?(t[g][c]=f[u],u++):t[g][c]="#";a=generateSolution(t)}t=generateClues(t),s=generatePuzzleString(t),solver=new solveObject(s,i),solver.solve(),n=solver.getSolution(),a=n.split(":"),r=a[0],n=a[2]}return s}function generateGrid(e,t){var i=puzzleCells.slice(0);i=shuffle(i);for(var s=!1,n=0;n<i.length;n++){var a=i[n];if((addedWalls.length<=(height-2)*(width-2)/3||width*height>1e3||"easy"==t)&&-1==invalidWalls.indexOf(a)&&-1==addedWalls.indexOf(a)){var r=a.split("-"),l=1*r[0],o=1*r[1],h=height-1-l,d=width-1-o;s=validateCell(l,o,e),1==s&&(e[l][o]="#",e[h][d]="#",puzzleWalls.push(l+"-"+o),puzzleWalls.push(h+"-"+d),puzzleCells.splice(puzzleCells.indexOf(l+"-"+o),1),-1!=puzzleCells.indexOf(h+"-"+d)&&puzzleCells.splice(puzzleCells.indexOf(h+"-"+d),1),addedWalls.push(l+"-"+o),addedWalls.push(h+"-"+d),2==l&&-1==addedWalls.indexOf(l-1+"-"+o)&&(e[l-1][o]="#",e[h+1][d]="#",puzzleWalls.push(l-1+"-"+o),puzzleWalls.push(h+1+"-"+d),addedWalls.push(l-1+"-"+o),addedWalls.push(h+1+"-"+d),puzzleCells.splice(puzzleCells.indexOf(l-1+"-"+o),1),puzzleCells.splice(puzzleCells.indexOf(h+1+"-"+d),1)),l==height-3&&-1==addedWalls.indexOf(l+1+"-"+o)&&(e[1*l+1][o]="#",e[h-1][d]="#",puzzleWalls.push(l+1+"-"+o),puzzleWalls.push(h-1+"-"+d),addedWalls.push(l+1+"-"+o),addedWalls.push(h-1+"-"+d),puzzleCells.splice(puzzleCells.indexOf(l+1+"-"+o),1),puzzleCells.splice(puzzleCells.indexOf(h-1+"-"+d),1)),2==o&&-1==addedWalls.indexOf(l+"-"+(o-1))&&(e[l][o-1]="#",e[h][d+1]="#",puzzleWalls.push(l+"-"+(o-1)),puzzleWalls.push(h+1+"-"+(d+1)),addedWalls.push(l+"-"+(o-1)),addedWalls.push(h+1+"-"+(d+1)),puzzleCells.splice(puzzleCells.indexOf(l-1+"-"+(o-1)),1),puzzleCells.splice(puzzleCells.indexOf(h+1+"-"+(d+1)),1)),o==width-3&&-1==!addedWalls.indexOf(l+"-"+(o+1))&&(e[l][o+1]="#",e[h][d-1]="#",puzzleWalls.push(l+"-"+(o+1)),puzzleWalls.push(h+1+"-"+(d-1)),addedWalls.push(l+"-"+(o+1)),addedWalls.push(h+1+"-"+(d-1)),puzzleCells.splice(puzzleCells.indexOf(l-1+"-"+(o+1)),1),puzzleCells.splice(puzzleCells.indexOf(h+1+"-"+(d-1)),1)))}}if("hard"==t){invalidRemoveWalls=new Array;var f=0;tempAddedWalls=addedWalls.slice(0),tempAddedWalls=shuffle(tempAddedWalls);for(var u=!1,n=0;n<tempAddedWalls.length;n++){var g=tempAddedWalls[n],c=Math.round((1*height+1*width)/6);if(-1==invalidRemoveWalls.indexOf(g)&&f%c==0){var v=g.split("-"),l=1*v[0],o=1*v[1],h=height-1-l,d=width-1-o;u=validateWallRemove(l,o,e),1==u?(e[l][o]="@",puzzleWalls.splice(puzzleWalls.indexOf(l+"-"+o),1),puzzleCells.push(l+"-"+o),addedWalls.splice(addedWalls.indexOf(l+"-"+o),1),invalidRemoveWalls.push(l+1+"-"+o),invalidRemoveWalls.push(l-1+"-"+o),invalidRemoveWalls.push(l+"-"+(o+1)),invalidRemoveWalls.push(l+"-"+(o-1)),invalidRemoveWalls.push(l+1+"-"+(o+1)),invalidRemoveWalls.push(l-1+"-"+(o-1)),invalidRemoveWalls.push(l-1+"-"+(o+1)),invalidRemoveWalls.push(l+1+"-"+(o-1)),e[h][d]="@",puzzleWalls.splice(puzzleWalls.indexOf(h+"-"+d),1),puzzleCells.push(h+"-"+d),addedWalls.splice(addedWalls.indexOf(h+"-"+d),1),invalidRemoveWalls.push(h+1+"-"+d),invalidRemoveWalls.push(h-1+"-"+d),invalidRemoveWalls.push(h+"-"+(d+1)),invalidRemoveWalls.push(h+"-"+(d-1)),invalidRemoveWalls.push(h+1+"-"+(d+1)),invalidRemoveWalls.push(h-1+"-"+(d-1)),invalidRemoveWalls.push(h-1+"-"+(d+1)),invalidRemoveWalls.push(h+1+"-"+(d-1))):(e[l][o]="#",e[h][d]="#")}f++}}return postMessage("max_"+puzzleCells.length),e}function validateWallRemove(e,t,i){var s=!0;tempWalls=puzzleWalls.slice(0),tempCells=puzzleCells.slice(0);var n=height-1-e,a=width-1-t;if(tempWalls.splice(tempWalls.indexOf(e+"-"+t),1),tempCells.push(e+"-"+t),tempWalls.splice(tempWalls.indexOf(n+"-"+a),1),tempCells.push(n+"-"+a),i[e][t]="@",i[n][a]="@",s=validateGrid(i),1==s)for(var r=0;height>r;r++)for(var l=0;width>l;l++)"@"==i[r][l]&&-1==tempWalls.indexOf(r+"-"+l)&&("#"==i[r+1][l]&&"#"==i[r-1][l]&&(s=!1),"#"==i[r][l+1]&&"#"==i[r][l-1]&&(s=!1));if(1==s){for(var o=new Array,h=!1,r=0;height>r;r++)for(var l=0;width>l;l++)if("@"==i[r][l]&&0==h){h=!0,o=travelCells(r,l,o,tempCells,i);break}for(var d=0;d<tempCells.length;d++){var f=tempCells[d];-1==o.indexOf(f)&&(s=!1)}}return 0==s&&(invalidRemoveWalls.push(e+"-"+t),invalidRemoveWalls.push(n+"-"+a)),s}function validateCell(e,t,i){var s,n=!0,a=!1,r=height-1-e,l=width-1-t;s=puzzleWalls.slice(0),s.push(e+"-"+t),s.push(r+"-"+l);var o;o=puzzleCells.slice(0),o.splice(o.indexOf(e+"-"+t),1),o.splice(o.indexOf(r+"-"+l),1);var h=0;2==e&&-1==s.indexOf(e-1+"-"+t)&&(s.push(e-1+"-"+t),s.push(r+1+"-"+l),o.splice(o.indexOf(e-1+"-"+t),1),o.splice(o.indexOf(r+1+"-"+l),1),a=!0),e==height-3&&-1==s.indexOf(e+1+"-"+t)&&(s.push(e+1+"-"+t),s.push(r-1+"-"+l),o.splice(o.indexOf(e+1+"-"+t),1),o.splice(o.indexOf(r-1+"-"+l),1),a=!0),2==t&&-1==s.indexOf(e+"-"+(t-1))&&(s.push(e+"-"+(t-1)),s.push(r+1+"-"+(l+1)),o.splice(o.indexOf(e-1+"-"+(t-1)),1),o.splice(o.indexOf(r+1+"-"+(l+1)),1),a=!0),t==width-3&&-1==s.indexOf(e+"-"+(t+1))&&(s.push(e+"-"+(t+1)),s.push(r+1+"-"+(l-1)),o.splice(o.indexOf(e-1+"-"+(t+1)),1),o.splice(o.indexOf(r+1+"-"+(l-1)),1),a=!0);for(var d=0;height>d;d++)for(var f=0;width>f;f++)"@"==i[d][f]&&-1==s.indexOf(d+"-"+f)&&(-1!=s.indexOf(d+1+"-"+f)&&-1!=s.indexOf(d-1+"-"+f)&&(n=!1),-1!=s.indexOf(d+"-"+(f+1))&&-1!=s.indexOf(d+"-"+(f-1))&&(n=!1));if(1==n&&(-1!=s.indexOf(e+1+"-"+t)&&h++,-1!=s.indexOf(e-1+"-"+t)&&h++,-1!=s.indexOf(e+"-"+(t+1))&&h++,-1!=s.indexOf(e+"-"+(t-1))&&h++,-1!=s.indexOf(e+1+"-"+(t+1))&&h++,-1!=s.indexOf(e-1+"-"+(t-1))&&h++,-1!=s.indexOf(e+1+"-"+(t-1))&&h++,-1!=s.indexOf(e-1+"-"+(t+1))&&h++,h>1||1==a)){for(var u=new Array,g=!1,d=0;height>d;d++)for(var f=0;width>f;f++)if("@"==i[d][f]&&0==g){g=!0,u=travelCells(d,f,u,o,i);break}for(var c=0;c<o.length;c++){var v=o[c];-1==u.indexOf(v)&&(n=!1)}}return 0==n&&(invalidWalls.push(e+"-"+t),invalidWalls.push(r+"-"+l)),n}function travelCells(e,t,i,s,n){for(var a=e,r=t,l=!0;1==l;)if(-1==i.indexOf(a+"-"+r)&&i.push(a+"-"+r),a=1*a,r=1*r,"@"==n[1*a+1][r]&&-1==i.indexOf(a+1+"-"+r)&&-1!=s.indexOf(a+1+"-"+r))a++;else if("@"==n[a-1][r]&&-1==i.indexOf(a-1+"-"+r)&&-1!=s.indexOf(a-1+"-"+r))a--;else if("@"==n[a][r+1]&&-1==i.indexOf(a+"-"+(r+1))&&-1!=s.indexOf(a+"-"+(r+1)))r++;else if("@"==n[a][r-1]&&-1==i.indexOf(a+"-"+(r-1))&&-1!=s.indexOf(a+"-"+(r-1)))r--;else{var o=i.indexOf(a+"-"+r);if(0!=o){var h=i[o-1].split("-");a=h[0],r=h[1]}else l=!1}return i}function validateGrid(e){for(var t=0;height>t;t++)for(var i=0;width>i;i++)if("#"==e[t][i]){for(var s=1;11>s&&t+s!=height&&"@"==e[t+s][i]&&"#"!=e[t+s][i]&&-1==e[t+s][i].indexOf("(");)s++;if(11==s)return!1;for(s=1;11>s&&i+s!=width&&"@"==e[t][i+s]&&"#"!=e[t][i+s]&&-1==e[t][i+s].indexOf("(");)s++;if(11==s)return!1}return!0}function generateSolution(e){puzzleCells=shuffle(puzzleCells);for(var t=0;t<puzzleCells.length;t++){var i=puzzleCells[t],s=i.split("-"),n=1*s[0],a=1*s[1];if("@"==e[n][a]){for(var r=new Array(1,2,3,4,5,6,7,8,9),l=new Array,o=new Array,h=0,d=0,f=n;f>0&&"#"!=e[f][a];f--)"@"!=e[f][a]&&(r[r.indexOf(1*e[f][a])]="-",o.push(e[f][a]),d+=1*e[f][a]);for(var f=n;f>0&&"#"!=e[f][a];f++)"@"!=e[f][a]&&(r[r.indexOf(1*e[f][a])]="-",o.push(e[f][a]),d+=1*e[f][a]);for(var u=a;u>0&&"#"!=e[n][u];u--)"@"!=e[n][u]&&(r[r.indexOf(1*e[n][u])]="-",l.push(e[n][u]),h+=1*e[n][u]);for(var u=a;u>0&&"#"!=e[n][u];u++)"@"!=e[n][u]&&(r[r.indexOf(1*e[n][u])]="-",l.push(e[n][u]),h+=1*e[n][u]);for(var g=r.length-1;g>-1;g--){var c=r[g];e[n-1][a-1]==c&&e[n-1][a]==e[n][a-1]&&"#"!=e[n][a-1]&&r.splice(t,1)}for(var v=r.length-1;v>-1;v--)"-"==r[v]&&r.splice(v,1);if(0==r.length)return"none";var p=Math.floor(2*Math.random()+1),m=2,b=Math.floor(2*Math.random()+1);1==p&&l.length+o.length!=0&&(m=(h+d)/(l.length+o.length)>5?0:1),r.length>2&&1==b&&(r.splice(0,1),r.splice(r.length-1,1));var z="";1==m?z=r[0]:0==m?z=r[r.length-1]:(r=shuffle(r),z=r[0]),e[n][a]=z}}return e}function generateClues(e){for(var t=0;height>t;t++)for(var i=0;width>i;i++)-1!=e[t][i].toString().indexOf("(")&&(e[t][i]="#");for(var t=0;height>t;t++)for(var i=0;width>i;i++)if("#"==e[t][i].toString()){for(var s=1,n=0;10>s&&t+s!=height&&"@"!=e[t+s][i]&&"#"!=e[t+s][i]&&-1==e[t+s][i].toString().indexOf("(");)n+=1*e[t+s][i],s++;for(0!=n&&-1==e[t][i].toString().indexOf("(")&&(e[t][i]="("+n+")"),s=1,n=0;10>s&&i+s!=width&&"@"!=e[t][i+s]&&"#"!=e[t][i+s]&&-1==e[t][i+s].toString().indexOf("(");)n+=1*e[t][i+s],s++;if(0!=n)if(-1==e[t][i].toString().indexOf("("))e[t][i]="("+n+")";else{var a=e[t][i].substring(1,e[t][i].length-1);e[t][i]="("+a+"-"+n+")"}}return e}function generatePuzzleString(e){for(var t=width+"x"+height+":",i=0;height>i;i++)for(var s=0;width>s;s++)t+="#"==e[i][s]||"@"==e[i][s]||-1!=e[i][s].toString().indexOf("(")?e[i][s]+",":"@,";return t=t.substring(0,t.length-1)}function initCombos(){combinations=new Array(10);for(var e=1;46>=e;e++)combinations[e]=new Array;for(var t=1;10>=t;t++)for(var i=1;46>=i;i++)combinations[t][i]="0";combinations[1][1]="1",combinations[1][2]="2",combinations[1][3]="3",combinations[1][4]="4",combinations[1][5]="5",combinations[1][6]="6",combinations[1][7]="7",combinations[1][8]="8",combinations[1][9]="9",combinations[2][3]="12",combinations[2][4]="13",combinations[2][5]="14,23",combinations[2][6]="15,24",combinations[2][7]="16,25,34",combinations[2][8]="17,26,35",combinations[2][9]="18,27,36,45",combinations[2][10]="19,28,37,46",combinations[2][11]="29,38,47,56",combinations[2][12]="39,48,57",combinations[2][13]="49,58,67",combinations[2][14]="59,68",combinations[2][15]="69,78",combinations[2][16]="79",combinations[2][17]="89",combinations[3][6]="123",combinations[3][7]="124",combinations[3][8]="125,134",combinations[3][9]="126,135,234",combinations[3][10]="127,136,145,235",combinations[3][11]="128,137,146,236,245",combinations[3][12]="129,138,147,156,237,246,345",combinations[3][13]="139,148,157,238,247,256,346",combinations[3][14]="149,158,167,239,248,257,347,356",combinations[3][15]="159,168,249,258,267,348,357,456",combinations[3][16]="169,178,259,268,349,358,367,457",combinations[3][17]="179,269,278,359,368,458,467",combinations[3][18]="189,279,369,378,459,468,567",combinations[3][19]="289,379,469,478,568",combinations[3][20]="389,479,569,578",combinations[3][21]="489,579,678",combinations[3][22]="589,679",combinations[3][23]="689",combinations[3][24]="789",combinations[4][10]="1234",combinations[4][11]="1235",combinations[4][12]="1236,1245",combinations[4][13]="1237,1246,1345",combinations[4][14]="1238,1247,1256,1346,2345",combinations[4][15]="1239,1248,1257,1347,1356,2346",combinations[4][16]="1249,1258,1267,1348,1357,1456,2347,2356",combinations[4][17]="1259,1268,1349,1358,1367,1457,2348,2357,2456",combinations[4][18]="1269,1278,1359,1368,1458,1467,2349,2358,2367,2457,3456",combinations[4][19]="1279,1369,1378,1459,1468,1567,2359,2368,2458,2467,3457",combinations[4][20]="1289,1379,1469,1478,1568,2369,2378,2459,2468,2567,3458,3467",combinations[4][21]="1389,1479,1569,1578,2379,2469,2478,2568,3459,3468,3567",combinations[4][22]="1489,1579,1678,2389,2479,2569,2578,3469,3478,3568,4567",combinations[4][23]="1589,1679,2489,2579,2678,3479,3569,3578,4568",combinations[4][24]="1689,2589,2679,3489,3579,3678,4569,4578",combinations[4][25]="1789,2689,3589,3679,4579,4678",combinations[4][26]="2789,3689,4589,4679,5678",combinations[4][27]="3789,4689,5679",combinations[4][28]="4789,5689",combinations[4][29]="5789",combinations[4][30]="6789",combinations[5][15]="12345",combinations[5][16]="12346",combinations[5][17]="12347,12356",combinations[5][18]="12348,12357,12456",combinations[5][19]="12349,12358,12367,12457,13456",combinations[5][20]="12359,12368,12458,12467,13457,23456",combinations[5][21]="12369,12378,12459,12468,12567,13458,13467,23457",combinations[5][22]="12379,12469,12478,12568,13459,13468,13567,23458,23467",combinations[5][23]="12389,12479,12569,12578,13469,13478,13568,14567,23459,23468,23567",combinations[5][24]="12489,12579,12678,13479,13569,13578,14568,23469,23478,23568,24567",combinations[5][25]="12589,12679,13489,13579,13678,14569,14578,23479,23569,23578,24568,34567",combinations[5][26]="12689,13589,13679,14579,14678,23489,23579,23678,24569,24578,34568",combinations[5][27]="12789,13689,14589,14679,15678,23589,23679,24579,24678,34569,34578",combinations[5][28]="13789,14689,15679,23689,24589,24679,25678,34579,34678",combinations[5][29]="14789,15689,23789,24689,25679,34589,34679,35678",combinations[5][30]="15789,24789,25689,34689,35679,45678",combinations[5][31]="16789,25789,34789,35689,45679",combinations[5][32]="26789,35789,45689",combinations[5][33]="36789,45789",combinations[5][34]="46789",combinations[5][35]="56789",combinations[6][21]="123456",combinations[6][22]="123457",combinations[6][23]="123458,123467",combinations[6][24]="123459,123468,123567",combinations[6][25]="123469,123478,123568,124567",combinations[6][26]="123479,123569,123578,124568,134567",combinations[6][27]="123489,123579,123678,124569,124578,134568,234567",combinations[6][28]="123589,123679,124579,124678,134569,134578,234568",combinations[6][29]="123689,124589,124679,125678,134579,134678,234569,234578",combinations[6][30]="123789,124689,125679,134589,134679,135678,234579,234678",combinations[6][31]="124789,125689,134689,135679,145678,234589,234679,235678",combinations[6][32]="125789,134789,135689,145679,234689,235679,245678",combinations[6][33]="126789,135789,145689,234789,235689,245679,345678",combinations[6][34]="136789,145789,235789,245689,345679",combinations[6][35]="146789,236789,245789,345689",combinations[6][36]="156789,246789,345789",combinations[6][37]="256789,346789",combinations[6][38]="356789",combinations[6][39]="456789",combinations[7][28]="1234567",combinations[7][29]="1234568",combinations[7][30]="1234569,1234578",combinations[7][31]="1234579,1234678",combinations[7][32]="1234589,1234679,1235678",combinations[7][33]="1234689,1235679,1245678",combinations[7][34]="1234789,1235689,1245679,1345678",combinations[7][35]="1235789,1245689,1345679,2345678",combinations[7][36]="1236789,1245789,1345689,2345679",combinations[7][37]="1246789,1345789,2345689",combinations[7][38]="1256789,1346789,2345789",combinations[7][39]="1356789,2346789",combinations[7][40]="1456789,2356789",combinations[7][41]="2456789",combinations[7][42]="3456789",combinations[8][36]="12345678",combinations[8][37]="12345679",combinations[8][38]="12345689",combinations[8][39]="12345789",combinations[8][40]="12346789",combinations[8][41]="12356789",combinations[8][42]="12456789",combinations[8][43]="13456789",combinations[8][44]="23456789",combinations[9][45]="123456789"
}function ascend(e,t){return t>e?-1:e>t?1:0}function shuffle(e){for(var t=e.length-1;t>-1;t--){var i=Math.random()*t|0,s=e[t];e[t]=e[i],e[i]=s}return e}var combinations,candidates,seriesArray,subSeriesArray,noCandidates,hasValue,guessCount=0,guessSolveCount=0,solveCount=0,puzzleWalls,addedWalls,puzzleCells,invalidWalls,difficulty,genPuzzleState,invalidNumber=!1,invalidX,invalidY,foundSurfaceSums=new Array,lookedForSurfaceSums=!1;onmessage=function(e){var t=e.data.split("_");if("generate"==t[0]){for(generator=new generateObject(t[1],t[2],t[3],t[4]),genPuzzle=generator.generate();"none"==genPuzzle;)generator=new generateObject(t[1],t[2],t[3],t[4]),genPuzzle=generator.generate();postMessage("done_"+genPuzzle)}else solver=new solveObject(t[1],t[2]),solver.solve(),postMessage("done_"+solver.getSolution())},Array.prototype.linearSearch=function(e,t){"undefined"==typeof t&&(t=ascend);for(var i=0;i<this.length;i++)if(0==t(this[i],e))return i;return-1},Array.prototype.binarySearch=function(e,t){"undefined"==typeof t&&(t=ascend);for(var i=0,s=this.length-1;s>=i;){var n=i+(s-i>>>1),a=t(e,this[n]);if(a>0)i=n+1;else{if(!(0>a))return n;s=n-1}}return-(i+1)},Array.prototype.addAll=function(){for(var e=0;e<arguments.length;e++){arr=arguments[e];for(var t=0;t<arr.length;t++)this.push(arr[t])}},Array.prototype.retainAll=function(e,t){"undefined"==typeof t&&(t=ascend);for(var i=0;i<this.length;)if(-1==e.linearSearch(this[i],t)){for(var s=i+1;s<this.length&&-1==e.linearSearch(this[s],t);)s++;this.splice(i,s-i)}else i++},Array.prototype.removeAll=function(e,t){"undefined"==typeof t&&(t=ascend);for(var i=0;i<this.length;)if(-1!=e.linearSearch(this[i],t)){for(var s=i+1;s<this.length&&-1!=e.linearSearch(this[s],t);)s++;this.splice(i,s-i)}else i++},Array.prototype.unique=function(e){"undefined"==typeof e&&(e=ascend);for(var t=0,i=0,s=this.length-1;s>i;){for(;0==e(this[i],this[i+1])&&++i!=s;);this[t++]=this[i++]}i==s&&(this[t++]=this[i]),this.length=t};
