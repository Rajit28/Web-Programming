(function () {

    const staticForm = document.getElementById("static-form");

    if (staticForm) {

        const phrasetext = document.getElementById("phrase");


        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName(
            "text-goes-here"
        )[0];

        const resultContainer = document.getElementById("result-container");
        const resultTextElement = resultContainer.getElementsByClassName(
            "text-goes-here"
        )[0];


        staticForm.addEventListener("submit", event => {
            event.preventDefault();


            try {

                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");


                const phrasetextvalue = phrasetext.value;
                if (phrasetextvalue == null || phrasetextvalue.trim().length == 0) {

                    $("#error").show();
                    $("#error").html("You Have Entered Space!");
                    $('#text_input').focus();


                }
                const result = palindrome(phrasetextvalue);

                function palindrome(phrasetextvalue) {
                    if (phrasetextvalue == null || phrasetextvalue.trim().length == 0) {
                        return false;
                    } else {

                        let mi_l = phrasetextvalue.toLowerCase();
                        let mi = mi_l.replace(/[^A-Za-z0-9]/g, '');
                        let len = mi.length;
                        for (let i = 0; i < len / 2; i++) {
                            if (mi[i] !== mi[len - 1 - i]) {
                                return false;
                            }
                        }
                        return true;
                    }


                }



                if (phrasetext.value) {
                    $('#error').hide();
                    $('#text_input').focus();

                }
                else {
                    $("#error").show();
                    $("#error").html("You Have to provide text to check for palindrome!");
                    $('#text_input').focus();

                }
                if (result) {


                    const li = `<li class="is-palindrome"> ${phrasetext.value} is a PALINDROME </li>`;
                    $("#attempts").append(li);
                    resultContainer.classList.remove("hidden");
                } else {


                    const li = `<li class="not-palindrome"> ${phrasetext.value} is a NOT PALINDROME </li>`;
                    $("#attempts").append(li);
                    resultContainer.classList.remove("hidden");

                }




            } catch (e) {
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();





















// (function () {
//     const staticForm = document.getElementById("static-form");

//     if (staticForm) {
//         const inputtext = document.getElementById("phrase");

//         const errorContainer = document.getElementById("error-container");
//         const errorTextElement = errorContainer.getElementsByClassName(
//           "text-goes-here"
//         )[0];

//         const resultContainer = document.getElementById("result-container");
//         const resultTextElement = resultContainer.getElementsByClassName(
//           "text-goes-here"
//         )[0];
//     }













// (function () {
//     const palindromemethod = {
//         palindrome(input) {
//             let mi_l = input.toLowerCase();
//             let mi = mi_l.replace(/[^A-Za-z0-9]/g, '');
//             let len = mi.length;
//             for (let i = 0; i < len / 2; i++) {
//                 if (mi[i] !== mi[len - 1 - i]) {
//                     return false;
//                 }
//             }
//             return true;


//         }
//     };
//     const palForm = document.getElementById("formid");
//     if (palForm) {
//         const inputstr = document.getElementById("phrase");

//         staticForm.addEventListener("submit", event => {
//             event.preventDefault();
//         }



//     }
// })

