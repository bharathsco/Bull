var queue = [document.body],
        curr, passcheck="", result = "", cveTitle = "", score ="100", credit = 8.33, cpd = "00.00.0000", hotflag="", flag="" ;   

  if((document.querySelector("#htmlb_form_1 > table:nth-child(34) > tbody > tr:nth-child(3) > td > table.urMatrixLayout > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > a > span") !== null))
    {
     cveTitle = document.querySelector("#htmlb_form_1 > table:nth-child(34) > tbody > tr:nth-child(3) > td > table.urMatrixLayout > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(1) > a > span").innerText;
	 alert(cveTitle);
              
              if (cveTitle.includes("CVE"))
              {
              passcheck = passcheck + ("\n CVE Title Validation: PASSED");
                             }
              else{
              result = result + ("\n CVE Title Validation: FAILED");
              score = score - credit;
              }
              }

   if (((document.querySelector("#Display_Container-r > div > div:nth-child(6) > p > a"))!== null) || (((document.querySelector("#Display_Container-r > div > div:nth-child(6) > p > span > a"))!== null)))    {
              passcheck = passcheck + ("\n MITRE CVE Link in Other terms: PASSED");
              }
              else{
              result = result + ("\n MITRE CVE Link in Other terms: FAILED");
              score = score - credit;
              }
              
if (document.querySelector("#Display_Container-r > div > table:nth-child(24) > tbody > tr:nth-child(6) > td:nth-child(2) > span") !== null) {
    if ((document.querySelector("#Display_Container-r > div > table:nth-child(24) > tbody > tr:nth-child(6) > td:nth-child(2) > span")).innerText.length == 0) {
        alert("processor name removed");
        passcheck = passcheck + ("\n Processor name removal : PASSED");
    } else {
        score = score - credit;
        result = result + ("\n Processor name removal: FAILED");

    }
}

 else if ((document.querySelector("#Display_Container-r > div > table:nth-child(22) > tbody > tr:nth-child(6) > td:nth-child(2) > span") !== null) && (document.querySelector("#Display_Container-r > div > table:nth-child(22) > tbody > tr:nth-child(6) > td:nth-child(2) > span").innerText == ""))
 {
        alert("processor name removed");
        passcheck = passcheck + ("\n Processor name removal : PASSED");

    } else {
        alert("null catched");
    }
			 
			  
              
              if ((document.querySelector("#CORR_VALIDITY_C_refs_1_4-img")!==null))
              {
              if((document.querySelector("#CORR_VALIDITY_C_refs_1_4-img").className)== "urCImgOffRo")
              {
                  passcheck = passcheck + ("\n Add Subsequent: PASSED"); 
              }
              else{
              result = result + ("\n Add Subsequent needs to be removed: FAILED");
              score = score - credit;
              }
              }
              if ((document.querySelector("#DEFAULT_GR_C_wu_00200720410000000431-content > table > tbody > tr:nth-child(2) > td:nth-child(4) > span") !== null))
              {
if(document.querySelector("#DEFAULT_GR_C_wu_00200720410000000431-content > table > tbody > tr:nth-child(2) > td:nth-child(4) > span").innerText == "Completed")
              {
    passcheck = passcheck + ("\n Corrective Measure CM: PASSED");
              }
              else{
              result = result + ("\n Corrective Measure CM: FAILED");
              score = score - credit;
              }
              }
              
if(document.querySelector("#SECU_REVIEW_C_note_checks_1_2").title=="Check Passed")
{
passcheck = passcheck + ("\n Note Basic Check: PASSED");
}
else
{
score = score - credit;
result = result + ("\n Note Basic Check: FAILED");}
if(document.querySelector("#SECU_REVIEW_C_note_checks_2_2").title=="Check Passed")
{
passcheck = passcheck + ("\n Release Check: PASSED");
}
else
{
score = score - credit;
result = result + ("\n Release Check: FAILED");}
if(document.querySelector("#SECU_REVIEW_C_note_checks_3_2").title=="Check Passed")
{
passcheck = passcheck + ("\n Case Owner Review: PASSED");
}
else
{
score = score - credit;
result = result + ("\n Case Owner Review: FAILED");}
if(document.querySelector("#SECU_REVIEW_C_note_checks_4_2").title=="Check Passed")
{
passcheck = passcheck + ("\n Security Validation: PASSED");
}
else
{
score = score - credit;
result = result + ("\n Security Validation: FAILED");}
if(document.querySelector("#SECU_REVIEW_C_note_checks_5_2").title=="Check Passed")
{
passcheck = passcheck + ("\n Final Review: PASSED");
}
else
{
score = score - credit;
result = result + ("\n Final Review: FAILED");}






while (curr = queue.pop()) {
              for (var i = 0; i < curr.childNodes.length; ++i) {
                             if (curr.childNodes[i].nodeType !== "empty") {
                                           if (curr.childNodes[i].nodeType == Node.TEXT_NODE) {
                                                          switch (curr.childNodes[i].textContent) {
                case "00.00.0000" :
                    score = score - credit;
                                                                        flag=1;
                    //console.log(curr);
                    break;
                                               case "Completed" :
                    console.log(curr);
                  //  result = result + ("\n CM  : PASSED");
                    break;
                case "Hot News" :
                    hotflag=1;
                                                                        //console.log(curr);
                    //result = result + ("\n CM  : FAILED");
                    break;
                case "From Rel." :
                   // console.log(curr);
                    passcheck = passcheck + ("\n Validity Section  : PASSED");
                                                                        break;
            }

        }

        if (Node.ELEMENT_NODE) {
            queue.push(curr.childNodes[i]);
        }

    }
}}
if(flag == 1)
{
result = result + ("\n Candidate for Patch Day not set: FAILED");
}
else
{
passcheck = passcheck + ("\n Candidate for Patch Day: PASSED");
}

if(hotflag == 1)
{
result = result + ("\n ***HOT NEWS needs FAQ to be added***: WARNING");}

score= Math.round(score);

alert(" \n "+ "                   " + "**** Deep Audit   ****" +"" + "Score  is" + "   " + score    + "/100" + "" + passcheck + "\n" + result);
