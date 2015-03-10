var req;

function reloadData()
{
   console.log("Reloading data.");
   var now = new Date();
   // url = 'feedback?'+now.getTime();
   url = '/feedback.txt';

   try {
      req = new XMLHttpRequest();
   } catch (e) {
      try {
         req = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
         try {
            req = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (oc) {
            alert("No AJAX Support");
            return;
         }
      }
   }

   req.onreadystatechange = processReqChange;
   req.open("GET", url, true);
   req.send(null);
}

function processReqChange()
{
   // If req shows "complete"
   if (req.readyState == 4)
   {
      dataDiv = document.getElementById('student-data');

      // If "OK"
      if (req.status == 200)
      {
         // Set current data text
         dataDiv.innerHTML = req.responseText;

         // Start new timer (1 min)
         timeoutID = setTimeout('reloadData()', 4000);
      }
      else
      {
         // Flag error
         dataDiv.innerHTML = '<p>There was a problem retrieving data: ' + req.statusText + '</p>';
      }
   }
}