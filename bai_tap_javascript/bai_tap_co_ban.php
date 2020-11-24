<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Javascript can validate input</h1>
    <h2>Insert number from 1 to 10</h2>
    <input type="text" id="numb">
    <button type="button" onclick="myFunction()">Submit</button>
    <p id="demo"></p>

    <script>
        function myFunction(){
            var x;
            var text;
            x = document.getElementById("numb").value;
            if (isNaN(x) || x < 1 || x > 10){
                //alert("Input not valid")
                text = "Input not valid"
            }
            else {
                //alert("Input valid")
                text = "Input valid"
            }
            document.getElementById("demo").innerHTML = text;

        }
    </script>
<!-- ----------------------------------------------------------------------  -->
<p>------------------------------------------------------------------</p>
    <h2>Please enter your name</h2>
    <input type="text" id="name">
    <button type="button" onclick="myFunction2()">Submit</button>
    <p id="demo2"></p>

    <script>
        function myFunction2(){
            var person = document.getElementById("name").value;
            if (person!=null){
                document.getElementById("demo2").innerHTML = "Hello " + person;
            }
        }
    </script>

<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
    <h2>Input hour</h2>
    <input type="number" id="hour">
    <button type="button" onclick="myFunction3()">Submit</button>
    <p id="demo3"></p>

    <script>
        function myFunction3(){
            var timeHour = document.getElementById("hour").value;
            if (timeHour < 12){
                document.getElementById("demo3").innerHTML = "Good morning!";
            }
            else if (timeHour >= 12 || timeHour < 18){
                document.getElementById("demo3").innerHTML = "Good afternoon!";
            }
            else {
                document.getElementById("demo3").innerHTML = "Good evening!";
            }
        }
        
    </script>

<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
        <h2>Display what day is today</h2>
        <p id="demo4"></p>
        <script>
            var day;
            switch(new Date().getDay()){
                case 0: day = "Sunday";break;
                        

                case 1: day = "Monday";break;
                        

                case 2: day = "Tuesday";break;
                        

                case 3: day = "Wednesday";break;
                        

                case 4: day = "Thursday";break;
                        

                case 5: day = "Friday";break;
                       

                case 6: day = "Saturday";break;
                       
            }
            document.getElementById("demo4").innerHTML = "today is " + day;
        </script>

<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
            <h2>Input your age</h2>
            <input id="age">
            <button type="button" onclick="myFunction4()">Submit</button>
            <p id="demo5"></p>

            <script>
                function myFunction4(){
                    var age;
                    var votable;
                    age = document.getElementById("age").value;

                    if (isNaN(age)){
                        document.getElementById("demo5").innerHTML = "Please insert your age!";                        
                    } 
                    
                    else {
                        votable = (age < 18) ? "Too young to vote":"Old enough to vote";
                        document.getElementById("demo5").innerHTML = votable;
                        
                    }
                    
                }
            </script>
<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
<h2>BOM & DOM in JAVASCRIPT</h2>
                <h3>JS SCreen</h3>
    <script>
        document.write("Screen resolution: " + window.screen.width + "x" + window.screen.height); // JS SCreen
    </script>
<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p> 
                <h3>JS Window</h3>
    <script>
        function openWindow(){                                      // JS Window
            window.open('http://google.com','_blank');
        }
        function closeWindow(){
            window.close();
        }
    </script>
    
    <form action="">
        <input type="button" value="google" onclick="openWindow()">
        <input type="button" value="close" onclick="closeWindow()">
    </form>

<!-- ---------------------------------------------------------------------- -->
    <p>------------------------------------------------------------------</p>
    <h3>JS Location</h3>
    <script>                                            // JS Location
        function current_location(){
            alert(location.href);
        }

        function change_location(){
            window.location="http://google.com";
        }
    </script>

    <form action="">
        <input type="button" value="show URL" onclick="current_location()">
        <input type="button" value="change URL" onclick="change_location()">
    </form>
<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
        <h3>JS History</h3>
        <a href="page.html">Link to page.html</a>            <!-- JS History -->

<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
        <h3>JS Navigator</h3>                                     
        <script>
            document.write("<p>Browser: ")                      // JS Navigator
            document.write(navigator.appName + "</p>")

            document.write("<p>Browser Version: ")
            document.write(navigator.appVersion + "</p>")

            document.write("<p>Code: ")
            document.write(navigator.appCodeName + "</p>")

            document.write("<p>Platform: ")
            document.write(navigator.platform + "</p>")

            document.write("<p>Cookies enabled: ")
            document.write(navigator.cookieEnabled + "</p>")

            document.write("<p>Online: ")
            document.write(navigator.onLine + "</p>")
        </script>
<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
        <h3>JS Timing</h3>
        <p>Click and wait 3 seconds</p>
        <button onclick="setTimeout(myFunction,3000);">Wait</button>
        <script>
            function myFunction(){
                alert("Wait finished!");
            }
        </script>
    
<!-- ---------------------------------------------------------------------- -->
<p>------------------------------------------------------------------</p>
            <h3>DOM Event</h3>
            <div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background: yellow; width:120px; height:20px;padding:40px;">Mouse over Me</div>
            <script>
                function mOver(e){
                    e.innerHTML = "Thanks";
                }

                function mOut(e){
                    e.innerHTML = "Mouse over me";
                }
            </script>
</body>
</html>