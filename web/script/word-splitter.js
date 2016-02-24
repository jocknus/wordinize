$(function () {

    var WORDS = $(".word");
    var CLASS_SPLIT = "split";
    var CLASS_EDIT = "edit";
    var CLASS_EDITABLE = "editable";
    var CLASS_BUTTON_ADD = "button-add";
    var HTML_SPLITTER = "<div class=\"splitword\"><p>Original word</p><div class=\"newword\"><div class=\"editable\"><p>Word 1</p><div class=\"remove\"></div></div><div class=\"edit\"><textarea class=\"field single-line\" type=\"text\">Word 1</textarea></div></div><a class=\"button-add\">+ Add new word</a><a class=\"button-split\">Split</a><a class=\"button-cancel\">Cancel</a>	</div>";
    var HTML_NEW_WORD = "<div class=\"newword\"><div class=\"editable\"><p>Word 1</p><div class=\"remove\"></div></div><div class=\"edit\"><textarea class=\"field single-line\" type=\"text\">Word 1</textarea></div></div>";

    $.each(WORDS, function (index, el) {
        $(el).find("." + CLASS_SPLIT).click(function () {
            createSplitter($(el));

        });
    });

    var createSplitter = function (elWord) {
        var splitter = $(HTML_SPLITTER);
        splitter.insertAfter(elWord);
        splitter.find("p").first().text(elWord.find("p").text());
        elWord.remove();

        splitter.find("." + CLASS_EDITABLE).hide();
        splitter.find("." + CLASS_EDIT).show();
        splitter.find("textarea").select();

        splitter.find("textarea").keypress(function (e) {
            if (e.which == 13) {
                splitter.find("." + CLASS_EDITABLE).find("p").text($(this).val());
                splitter.find("." + CLASS_EDITABLE).show();
                splitter.find("." + CLASS_EDIT).hide();
                splitter.find("." + CLASS_EDITABLE).click(function(){
                    splitter.find("." + CLASS_EDITABLE).hide();
                    splitter.find("." + CLASS_EDIT).show();
                    splitter.find("textarea").select();
                });


                return false;
            }
        });


        splitter.find("." + CLASS_BUTTON_ADD).click(function(){

            var newWord = $(HTML_NEW_WORD);
            newWord.insertAfter(splitter.find(".newword").last());
            newWord.find("." + CLASS_EDITABLE).hide();
            newWord.find("." + CLASS_EDIT).show();
            newWord.find("textarea").select();
        });


    };
});