document.getElementById("speed-ghost-check").addEventListener("change", function() {
  const display = document.getElementById("display-speedsheet");
  if (this.checked) {
    display.innerHTML = `
    <p>1.Moroi			   3.71 m/s</p>
    <p>2.Revenant		           3.0 m/s</p>
    <p>3.Deogen		           3.0 m/s</p>
    <p>4.Thaye			  2.75 m/s</p>
    <p>5.Hantu			   2.7 m/s</p>
    <p>6.Jinn			           2.5 m/s</p>
    <p>7.Raiju			   2.5 m/s</p>
    <p>8.The Twins 		          1.87 m/s</p>
    <p>9.Banshee		           1.7 m/s</p>
    <p>10.Demon	                   1.7 m/s</p>
    <p>11.Goryo	                   1.7 m/s</p>
    <p>12.Mare	                   1.7 m/s</p>
    <p>13.Myling                 	   1.7 m/s</p>
    <p>14.Obake	                   1.7 m/s</p>
    <p>15.Oni	                   1.7 m/s</p>
    <p>16.Onryo	                   1.7 m/s</p>
    <p>17.Phantom	                   1.7 m/s</p>
    <p>18.Poltergeist	           1.7 m/s</p>
    <p>19.Shade	                   1.7 m/s</p>
    <p>20.Spirit	                   1.7 m/s</p>
    <p>21.The Mimic	           1.7 m/s</p>
    <p>22.Wraith	                   1.7 m/s</p>
    <p>23.Yokai	                   1.7 m/s</p>
    <p>24.Yurei	                   1.7 m/s</p>

`;
  } else {
    display.innerHTML = `
      
    <p>1.Deogen:		           0.4 m/s</p>
    <p>2.Revenant:		         1.0 m/s</p>
    <p>3.Thaye:			         1.0 m/s</p>
    <p>4.Hantu:			         1.44 m/s</p>
    <p>5.Moroi:			         1.5 m/s</p>
    <p>6.The Twins: 		       1.53 m/s</p>
    <p>7.Jinn:			           1.7 m/s</p>
    <p>8.Raiju:			         1.7 m/s</p>
    <p>9.Banshee:	         1.7 m/s</p>
    <p>10.Demon:	             1.7 m/s</p>
    <p>11.Goryo:	             1.7 m/s</p>
    <p>12.Mare:	             1.7 m/s</p>
    <p>13.Myling:             1.7 m/s</p>
    <p>14.Obake:	             1.7 m/s</p>
    <p>15.Oni:	               1.7 m/s</p>
    <p>16.Onryo:	             1.7 m/s</p>
    <p>17.Phantom:	           1.7 m/s</p>
    <p>18.Poltergeist:	       1.7 m/s</p>
    <p>19.Shade:	             1.7 m/s</p>
    <p>20.Spirit:	           1.7 m/s</p>
    <p>21.The Mimic:	         1.7 m/s</p>
    <p>22.Wraith:	           1.7 m/s</p>
    <p>23.Yokai:	             1.7 m/s</p>
    <p>24.Yurei:	             1.7 m/s</p>
`;
  }
});