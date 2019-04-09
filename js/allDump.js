function copyToClipboard(flagg) {

            var text = "You failed to click on the text";
            if (flagg == '2') {
                text = document.getElementById("url").textContent;

            } else {
                text = document.getElementById("launchurl").textContent;

            }
            var dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.setAttribute('value', text);
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        }


        function copynewtoClipboard () {
            var text = "You failed to click on the text";
            text = document.getElementById("new_Sentence").textContent;
            var dummy = document.createElement("input");
            document.body.appendChild(dummy);
            dummy.setAttribute('value', text);
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
    
        }