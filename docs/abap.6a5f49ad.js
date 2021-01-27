parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"n8Aw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var e={comments:{lineComment:"*"},brackets:[["[","]"],["(",")"]]};exports.conf=e;var n=["abap-source","abbreviated","abstract","accept","accepting","according","activation","actual","add","add-corresponding","adjacent","after","alias","aliases","align","all","allocate","alpha","analysis","analyzer","append","appendage","appending","application","archive","area","arithmetic","as","ascending","aspect","assert","assign","assigned","assigning","association","asynchronous","at","attributes","authority","authority-check","avg","back","background","backup","backward","badi","base","before","begin","big","binary","bintohex","bit","black","blank","blanks","blob","block","blocks","blue","bound","boundaries","bounds","boxed","break-point","buffer","by","bypassing","byte","byte-order","call","calling","case","cast","casting","catch","center","centered","chain","chain-input","chain-request","change","changing","channels","character","char-to-hex","check","checkbox","ci_","circular","class","class-coding","class-data","class-events","class-methods","class-pool","cleanup","clear","client","clob","clock","close","coalesce","code","coding","col_background","col_group","col_heading","col_key","col_negative","col_normal","col_positive","col_total","collect","color","column","columns","comment","comments","commit","common","communication","comparing","component","components","compression","compute","concat","concat_with_space","concatenate","cond","condition","connect","connection","constants","context","contexts","continue","control","controls","conv","conversion","convert","copies","copy","corresponding","country","cover","cpi","create","creating","critical","currency","currency_conversion","current","cursor","cursor-selection","customer","customer-function","dangerous","data","database","datainfo","dataset","date","dats_add_days","dats_add_months","dats_days_between","dats_is_valid","daylight","dd/mm/yy","dd/mm/yyyy","ddmmyy","deallocate","decimal_shift","decimals","declarations","deep","default","deferred","define","defining","definition","delete","deleting","demand","department","descending","describe","destination","detail","dialog","directory","disconnect","display","display-mode","distinct","divide","divide-corresponding","division","do","dummy","duplicate","duplicates","duration","during","dynamic","dynpro","edit","editor-call","else","elseif","empty","enabled","enabling","encoding","end","endat","endcase","endcatch","endchain","endclass","enddo","endenhancement","end-enhancement-section","endexec","endform","endfunction","endian","endif","ending","endinterface","end-lines","endloop","endmethod","endmodule","end-of-definition","end-of-editing","end-of-file","end-of-page","end-of-selection","endon","endprovide","endselect","end-test-injection","end-test-seam","endtry","endwhile","endwith","engineering","enhancement","enhancement-point","enhancements","enhancement-section","entries","entry","enum","environment","errormessage","errors","escaping","event","events","exact","except","exception","exceptions","exception-table","exclude","excluding","exec","execute","exists","exit","exit-command","expand","expanding","expiration","explicit","exponent","export","exporting","extend","extended","extension","extract","fail","fetch","field","field-groups","fields","field-symbol","field-symbols","file","filter","filters","filter-table","final","first","first-line","fixed-point","fkeq","fkge","flush","font","for","form","format","forward","found","frame","frames","free","friends","from","function","functionality","function-pool","further","gaps","generate","get","giving","gkeq","gkge","global","grant","green","group","groups","handle","handler","harmless","hashed","having","hdb","header","headers","heading","head-lines","help-id","help-request","hextobin","hide","high","hint","hold","hotspot","icon","id","identification","identifier","ids","if","ignore","ignoring","immediately","implementation","implementations","implemented","implicit","import","importing","inactive","incl","include","includes","including","increment","index","index-line","infotypes","inheriting","init","initial","initialization","inner","inout","input","instance","instances","instr","intensified","interface","interface-pool","interfaces","internal","intervals","into","inverse","inverted-date","is","iso","job","join","keep","keeping","kernel","key","keys","keywords","kind","language","last","late","layout","leading","leave","left","left-justified","leftplus","leftspace","legacy","length","let","level","levels","like","line","line-count","linefeed","line-selection","line-size","list","listbox","list-processing","little","llang","load","load-of-program","lob","local","locale","locator","logfile","logical","log-point","long","loop","low","lower","lpad","lpi","ltrim","mail","main","major-id","mapping","margin","mark","mask","matchcode","max","maximum","medium","members","memory","mesh","message","message-id","messages","messaging","method","methods","min","minimum","minor-id","mm/dd/yy","mm/dd/yyyy","mmddyy","mode","modif","modifier","modify","module","move","move-corresponding","multiply","multiply-corresponding","name","nametab","native","nested","nesting","new","new-line","new-page","new-section","next","no","node","nodes","no-display","no-extension","no-gap","no-gaps","no-grouping","no-heading","non-unicode","non-unique","no-scrolling","no-sign","no-title","no-topofpage","no-zero","null","number","object","objects","obligatory","occurrence","occurrences","occurs","of","off","offset","ole","on","only","open","option","optional","options","order","other","others","out","outer","output","output-length","overflow","overlay","pack","package","pad","padding","page","pages","parameter","parameters","parameter-table","part","partially","pattern","percentage","perform","performing","person","pf1","pf10","pf11","pf12","pf13","pf14","pf15","pf2","pf3","pf4","pf5","pf6","pf7","pf8","pf9","pf-status","pink","places","pool","pos_high","pos_low","position","pragmas","precompiled","preferred","preserving","primary","print","print-control","priority","private","procedure","process","program","property","protected","provide","public","push","pushbutton","put","queue-only","quickinfo","radiobutton","raise","raising","range","ranges","read","reader","read-only","receive","received","receiver","receiving","red","redefinition","reduce","reduced","ref","reference","refresh","regex","reject","remote","renaming","replacement","replacing","report","request","requested","reserve","reset","resolution","respecting","responsible","result","results","resumable","resume","retry","return","returncode","returning","returns","right","right-justified","rightplus","rightspace","risk","rmc_communication_failure","rmc_invalid_status","rmc_system_failure","role","rollback","rows","rpad","rtrim","run","sap","sap-spool","saving","scale_preserving","scale_preserving_scientific","scan","scientific","scientific_with_leading_zero","scroll","scroll-boundary","scrolling","search","secondary","seconds","section","select","selection","selections","selection-screen","selection-set","selection-sets","selection-table","select-options","send","separate","separated","set","shared","shift","short","shortdump-id","sign_as_postfix","single","size","skip","skipping","smart","some","sort","sortable","sorted","source","specified","split","spool","spots","sql","sqlscript","stable","stamp","standard","starting","start-of-editing","start-of-selection","state","statement","statements","static","statics","statusinfo","step-loop","stop","structure","structures","style","subkey","submatches","submit","subroutine","subscreen","subtract","subtract-corresponding","suffix","sum","summary","summing","supplied","supply","suppress","switch","switchstates","symbol","syncpoints","syntax","syntax-check","syntax-trace","system-call","system-exceptions","system-exit","tab","tabbed","tables","tableview","tabstrip","target","task","tasks","test","testing","test-injection","test-seam","text","textpool","then","throw","time","times","timestamp","timezone","tims_is_valid","title","titlebar","title-lines","to","tokenization","tokens","top-lines","top-of-page","trace-file","trace-table","trailing","transaction","transfer","transformation","transporting","trmac","truncate","truncation","try","tstmp_add_seconds","tstmp_current_utctimestamp","tstmp_is_valid","tstmp_seconds_between","type","type-pool","type-pools","types","uline","unassign","under","unicode","union","unique","unit_conversion","unix","unpack","until","unwind","up","update","upper","user","user-command","using","utf-8","valid","value","value-request","values","vary","varying","verification-message","version","via","view","visible","wait","warning","when","whenever","where","while","width","window","windows","with","with-heading","without","with-title","word","work","write","writer","xml","xsd","yellow","yes","yymmdd","zero","zone","abs","acos","asin","atan","bit-set","boolc","boolx","ceil","char_off","charlen","cmax","cmin","concat_lines_of","condense","contains","contains_any_not_of","contains_any_of","cos","cosh","count","count_any_not_of","count_any_of","dbmaxlen","distance","escape","exp","find","find_any_not_of","find_any_of","find_end","floor","frac","from_mixed","insert","ipow","line_exists","line_index","lines","log","log10","match","matches","nmax","nmin","numofchar","repeat","replace","rescale","reverse","round","segment","shift_left","shift_right","sign","sin","sinh","sqrt","strlen","substring","substring_after","substring_before","substring_from","substring_to","tan","tanh","to_lower","to_mixed","to_upper","translate","trunc","utclong_add","utclong_current","utclong_diff","xsdbool","xstrlen"],t={defaultToken:"invalid",ignoreCase:!0,tokenPostfix:".abap",keywords:n,typeKeywords:["b","c","d","decfloat16","decfloat34","f","i","int8","n","p","s","string","t","utclong","x","xstring","any","clike","csequence","decfloat","numeric","simple","xsequence","table","hashed","index","sorted","standard","accp","char","clnt","cuky","curr","dats","dec","df16_dec","df16_raw","df34_dec","df34_raw","fltp","int1","int2","int4","lang","lchr","lraw","numc","quan","raw","rawstring","sstring","tims","unit","df16_scl","df34_scl","prec","varc","abap_bool","space","me","syst","sy","screen"],operators:[" +"," -","/","*","**","div","mod","=","#","@","&","&&","bit-and","bit-not","bit-or","bit-xor","m","o","z","and","equiv","not","or"," < "," > ","<=",">=","<>","><","=<","=>","between","bt","byte-ca","byte-cn","byte-co","byte-cs","byte-na","byte-ns","ca","cn","co","cp","cs","eq","ge","gt","in","le","lt","na","nb","ne","np","ns"],symbols:/[=><!~?&+\-*\/\^%#@]+/,tokenizer:{root:[[/[a-z_$][\w-$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@operators":"operator","@default":"identifier"}}],[/<[\w]+>/,"identifier"],{include:"@whitespace"},[/[:,.]/,"delimiter"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/'/,{token:"string",bracket:"@open",next:"@stringquote"}],[/`/,{token:"string",bracket:"@open",next:"@stringping"}],[/\|/,{token:"string",bracket:"@open",next:"@stringtemplate"}],[/\d+/,"number"]],stringtemplate:[[/[^\\\|]+/,"string"],[/\\\|/,"string"],[/\|/,{token:"string",bracket:"@close",next:"@pop"}]],stringping:[[/[^\\`]+/,"string"],[/`/,{token:"string",bracket:"@close",next:"@pop"}]],stringquote:[[/[^\\']+/,"string"],[/'/,{token:"string",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/^\*.*$/,"comment"],[/\".*$/,"comment"]]}};exports.language=t;
},{}]},{},["n8Aw"], null)
//# sourceMappingURL=/abap.6a5f49ad.js.map